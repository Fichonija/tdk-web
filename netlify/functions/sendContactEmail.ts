import type { Handler, HandlerEvent } from '@netlify/functions';
import FormData from 'form-data';
import Mailgun from 'mailgun.js';

const key = process.env.MAILGUN_API_KEY as string;
const domain = process.env.MAILGUN_DOMAIN as string;
const receiver = process.env.MAILGUN_RECEIVER as string;

interface ContactData {
  name: string;
  email: string;
  message: string;
}

const handler: Handler = async ({ httpMethod, body }: HandlerEvent) => {
  if (httpMethod !== 'POST') {
    return badRequestMethodResponse;
  }

  if (!body) {
    return noBodyResponse;
  }

  const { name, email, message } = JSON.parse(body) as ContactData;
  if (!(name && email && message)) {
    return noBodyResponse;
  }

  const mg = new Mailgun(FormData).client({ username: 'api', key });
  try {
    const messageData = {
      from: `${name} <${email}>`,
      to: [receiver],
      subject: 'TDK.hr: Upit',
      text: message,
    };
    const response = await mg.messages.create(domain, messageData);

    return {
      statusCode: 200,
      body: JSON.stringify(response),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify((error as Error).message),
    };
  }
};

export { handler };

const badRequestMethodResponse = {
  statusCode: 400,
  body: JSON.stringify(`POST request method is required.`),
};

const noBodyResponse = {
  statusCode: 400,
  body: JSON.stringify('Request body must contain parameters: name, email, message.'),
};

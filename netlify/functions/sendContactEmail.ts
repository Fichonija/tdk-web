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
  if (httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: corsHeaders,
    };
  }

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
      headers: corsHeaders,
      body: JSON.stringify(response),
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: corsHeaders,
      body: JSON.stringify(error),
    };
  }
};

export { handler };

const corsHeaders = {
  'Access-Control-Allow-Origin': 'https://tdk.hr',
  //! enable function invocation on LOCAL DEVELOPMENT
  // 'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'POST',
};

const badRequestMethodResponse = {
  statusCode: 400,
  headers: corsHeaders,
  body: JSON.stringify({ message: 'POST request method is required.' }),
};

const noBodyResponse = {
  statusCode: 400,
  headers: corsHeaders,
  body: JSON.stringify({ message: 'Request body must contain parameters: name, email, message.' }),
};

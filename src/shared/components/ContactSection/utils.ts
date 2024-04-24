import { isDev } from '~/utils/env';

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const CONTACT_FUNCTION_PATH = `${isDev ? 'http://localhost:9999' : ''}/.netlify/functions/sendContactEmail`;

const FETCH_OPTIONS: RequestInit = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
};

export async function sendContactEmail(data: ContactFormData) {
  return fetch(CONTACT_FUNCTION_PATH, { ...FETCH_OPTIONS, body: JSON.stringify(data) });
}

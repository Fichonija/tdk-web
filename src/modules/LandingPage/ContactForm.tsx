import { HttpStatusCode } from 'axios';
import { useState, type FormEvent } from 'react';
import { Button, Input, Textarea } from '~/ui/components';
import { isDev } from '~/utils/env';

const CONTACT_FUNCTION_PATH = `${isDev ? 'http://localhost:9999' : ''}/.netlify/functions/sendContactEmail`;
const FETCH_OPTIONS: RequestInit = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  mode: isDev ? 'no-cors' : undefined,
};

export const ContactForm = () => {
  const [values, setValues] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSending(true);

    try {
      const response = await fetch(CONTACT_FUNCTION_PATH, { ...FETCH_OPTIONS, body: JSON.stringify(values) });

      if (response.status !== HttpStatusCode.Ok) {
        //todo toast library?
        alert('Došlo je do pogreške prilikom slanja podataka. Pokušajte ponovno kasnije.');
      }
    } catch (error) {
      alert('Došlo je do pogreške prilikom slanja podataka. Pokušajte ponovno kasnije.');
    }

    setIsSending(false);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:gap-5">
      <Input
        label="Ime"
        name="name"
        value={values.name}
        onChange={(name) => setValues((prevValues) => ({ ...prevValues, name }))}
        required
      />
      <Input
        label="E-mail"
        type="email"
        name="email"
        value={values.email}
        onChange={(email) => setValues((prevValues) => ({ ...prevValues, email }))}
        required
      />
      <Textarea
        label="Upit"
        name="message"
        value={values.message}
        onChange={(message) => setValues((prevValues) => ({ ...prevValues, message }))}
        required
      />
      <Button type="submit" text={isSending ? 'SLANJE...' : 'POŠALJI'} isDisabled={isSending} />
    </form>
  );
};

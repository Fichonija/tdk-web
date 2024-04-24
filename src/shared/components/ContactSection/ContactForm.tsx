import { HttpStatusCode } from 'axios';
import { useState, type FormEvent } from 'react';
import { InputWithLabels, TextareaWithLabels } from '~/shared/form';
import { Button } from '~/ui/components';
import { isDev } from '~/utils/env';
import { sendContactEmail, type ContactFormData } from './utils';

const ContactForm = () => {
  const [values, setValues] = useState<ContactFormData>({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSending(true);

    try {
      const response = await sendContactEmail(values);

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
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-10">
      <div className="flex flex-col gap-6">
        <InputWithLabels
          label="Ime:"
          name="name"
          value={values.name}
          onChange={(name) => setValues((prevValues) => ({ ...prevValues, name }))}
          required
        />
        <InputWithLabels
          label="Email:"
          type="email"
          name="email"
          value={values.email}
          onChange={(email) => setValues((prevValues) => ({ ...prevValues, email }))}
          required
        />
        <TextareaWithLabels
          label="Poruka:"
          name="message"
          value={values.message}
          onChange={(message) => setValues((prevValues) => ({ ...prevValues, message }))}
          required
        />
      </div>
      <div className="w-full md:w-fit">
        <Button type="submit" isFullWidth text={isSending ? 'Slanje...' : 'Pošalji'} isDisabled={isSending} />
      </div>
    </form>
  );
};

export default ContactForm;

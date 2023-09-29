import { type TextareaHTMLAttributes } from 'react';
import { Label } from '../Input';

type TextareaProps = Pick<TextareaHTMLAttributes<HTMLTextAreaElement>, 'required' | 'name'>;

type Props = TextareaProps & {
  value: string;
  onChange: (val: string) => void;
  label?: string;
};

export const Textarea = ({ label, ...rest }: Props) => {
  if (label !== undefined) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
        <Label label={label} name={rest.name} />
        <TextareaComponent {...rest} />
      </div>
    );
  }

  return <TextareaComponent {...rest} />;
};

const TextareaComponent = ({ value, onChange, ...rest }: Props) => {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      cols={30}
      rows={10}
      style={{
        width: '100%',
        border: '1px solid hsl(0deg 0% 27.15%)',
        borderRadius: '6px',
        padding: '4px 8px',
      }}
      {...rest}
    ></textarea>
  );
};

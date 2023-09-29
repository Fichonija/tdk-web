import type { InputHTMLAttributes } from 'react';

type InputAttributes = Pick<InputHTMLAttributes<HTMLInputElement>, 'type' | 'name' | 'required'>;

type Props = InputAttributes & {
  value: string;
  onChange: (value: string) => void;
};

export const Input = ({ value, onChange, ...rest }: Props) => {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{
        width: '100%',
        border: '1px solid hsl(0deg 0% 27.15%)',
        borderRadius: '6px',
        padding: '4px 8px',
      }}
      {...rest}
    />
  );
};

import { type InputHTMLAttributes } from 'react';

type InputAttributes = Pick<InputHTMLAttributes<HTMLInputElement>, 'id' | 'type' | 'name' | 'required'>;

type Props = InputAttributes & {
  value: string;
  onChange: (value: string) => void;
  isDisabled?: boolean;
};

export const Input = ({ value, onChange, isDisabled, ...rest }: Props) => {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      disabled={isDisabled}
      className="w-full rounded-sm border-none"
      {...rest}
    />
  );
};

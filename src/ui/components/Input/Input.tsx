import { type InputHTMLAttributes } from 'react';

type InputAttributes = Pick<InputHTMLAttributes<HTMLInputElement>, 'type' | 'name' | 'required'>;

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
      className="w-full border border-solid border-[#454545] rounded-md"
      {...rest}
    />
  );
};

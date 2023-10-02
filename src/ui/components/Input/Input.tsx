import { type InputHTMLAttributes } from 'react';
import { Label } from './Label';

type InputAttributes = Pick<InputHTMLAttributes<HTMLInputElement>, 'type' | 'name' | 'required'>;

type Props = InputAttributes & {
  value: string;
  onChange: (value: string) => void;
  label?: string;
  isDisabled?: boolean;
};

export const Input = ({ label, ...rest }: Props) => {
  if (label !== undefined) {
    return (
      <div className="flex flex-col gap-3">
        <Label label={label} name={rest.name} />
        <InputComponent {...rest} />
      </div>
    );
  }

  return <InputComponent {...rest} />;
};

const InputComponent = ({ value, onChange, isDisabled, ...rest }: Omit<Props, 'label'>) => {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      disabled={isDisabled}
      className="w-full py-1 px-2 border border-solid border-[#454545] rounded-md"
      {...rest}
    />
  );
};

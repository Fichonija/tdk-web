import { type TextareaHTMLAttributes } from 'react';
import { Label } from '../Input';

type TextareaAttributes = Pick<TextareaHTMLAttributes<HTMLTextAreaElement>, 'required' | 'name'>;

type Props = TextareaAttributes & {
  value: string;
  onChange: (val: string) => void;
  label?: string;
  isDisabled?: boolean;
};

export const Textarea = ({ label, ...rest }: Props) => {
  if (label !== undefined) {
    return (
      <div className="flex flex-col gap-3">
        <Label label={label} name={rest.name} />
        <TextareaComponent {...rest} />
      </div>
    );
  }

  return <TextareaComponent {...rest} />;
};

const TextareaComponent = ({ value, onChange, isDisabled, ...rest }: Omit<Props, 'label'>) => {
  return (
    <textarea
      disabled={isDisabled}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      cols={30}
      rows={10}
      className="w-full border border-solid border-[#454545] rounded-md"
      {...rest}
    ></textarea>
  );
};

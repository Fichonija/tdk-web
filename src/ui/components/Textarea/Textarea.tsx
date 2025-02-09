import { type TextareaHTMLAttributes } from 'react';

type TextareaAttributes = Pick<TextareaHTMLAttributes<HTMLTextAreaElement>, 'id' | 'required' | 'name'>;

type Props = TextareaAttributes & {
  value: string;
  onChange: (val: string) => void;
  isDisabled?: boolean;
};

export const Textarea = ({ value, onChange, isDisabled, ...rest }: Props) => {
  return (
    <textarea
      disabled={isDisabled}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      cols={30}
      rows={10}
      className="w-full rounded-sm border-none"
      {...rest}
    ></textarea>
  );
};

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
      <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
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

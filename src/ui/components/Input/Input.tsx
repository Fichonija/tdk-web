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
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
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

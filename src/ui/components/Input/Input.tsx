import { useEffect, useState, type InputHTMLAttributes } from 'react';

type InputAttributes = Pick<InputHTMLAttributes<HTMLInputElement>, 'type' | 'name' | 'required'>;

type Props = InputAttributes & {
  value: string;
  onChange: (value: string) => void;
  label?: string;
};

export const Input = ({ label, ...rest }: Props) => {
  if (label !== undefined) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
        <Label label={label} name={rest.name} />
        <InputComponent {...rest} />
      </div>
    );
  }

  return <InputComponent {...rest} />;
};

const Label = ({ label, name }: Pick<Props, 'label' | 'name'>) => {
  //todo replace matching logic with theming ASAP
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaMatch = window.matchMedia('(max-width: 768px)');

    const handler = (e: MediaQueryListEvent) => setMatches(e.matches);
    mediaMatch?.addEventListener('change', handler);
    return () => mediaMatch?.removeEventListener('change', handler);
  }, []);

  return (
    <label
      htmlFor={name}
      style={{
        fontFamily: 'Montserrat Medium',
        fontSize: 'var(--m-font-size)',
        lineHeight: 'var(--m-line-height)',
        ...(matches && {
          fontSize: 'var(--r-font-size)',
          lineHeight: 'var(--r-line-height)',
        }),
      }}
    >
      {label}
    </label>
  );
};

const InputComponent = ({ value, onChange, ...rest }: Omit<Props, 'label'>) => {
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

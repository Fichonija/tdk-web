import { useEffect, useState, type ButtonHTMLAttributes } from 'react';

type ButtonAttributes = Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'name'>;

type Props = ButtonAttributes & {
  text: string;
  onClick?: () => void;
  isDisabled?: boolean;
};

export const Button = ({ text, onClick, isDisabled, ...rest }: Props) => {
  //todo replace matching logic with theming ASAP
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaMatch = window.matchMedia('(max-width: 768px)');

    const handler = (e: MediaQueryListEvent) => setMatches(e.matches);
    mediaMatch?.addEventListener('change', handler);
    return () => mediaMatch?.removeEventListener('change', handler);
  }, []);

  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      style={{
        cursor: isDisabled ? 'auto' : 'pointer',
        width: 'fit-content',
        padding: '16px 24px',
        borderRadius: '8px',
        border: '2px solid #9aa583',
        background: isDisabled ? '#afafaf' : '#c5d89c',
        ...(matches && {
          padding: '8px 16px',
          width: '100%',
          borderRadius: '8px',
        }),
      }}
      {...rest}
    >
      <span
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
        {text}
      </span>
    </button>
  );
};

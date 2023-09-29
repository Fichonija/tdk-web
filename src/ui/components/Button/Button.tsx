import { useEffect, useState, type ButtonHTMLAttributes } from 'react';

type ButtonProps = Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'name'>;

type Props = ButtonProps & {
  text: string;
  onClick?: () => void;
};

export const Button = ({ text, onClick, ...rest }: Props) => {
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
      style={{
        cursor: 'pointer',
        width: 'fit-content',
        padding: '16px 24px',
        borderRadius: '8px',
        border: '2px solid #9aa583',
        background: '#c5d89c',
        ...(matches && {
          padding: '8px 16px',
          width: '100%',
          borderRadius: '8px',
        }),
      }}
      {...rest}
    >
      {text}
    </button>
  );
};

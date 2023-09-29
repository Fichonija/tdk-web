import { useState, useEffect } from 'react';

interface Props {
  label: string;
  name?: string;
}

export const Label = ({ label, name }: Props) => {
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

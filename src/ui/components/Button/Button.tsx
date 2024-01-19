import clsx from 'clsx';
import { type AnchorHTMLAttributes, type ButtonHTMLAttributes } from 'react';

type ButtonAttributes = Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'name'>;
type LinkAttributes = Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>;

type Props = ButtonAttributes &
  LinkAttributes & {
    as?: 'button' | 'a';
    text: string;
    isDisabled?: boolean;
    isFullWidth?: boolean;
    onClick?: () => void;
  };

//todo add support for icons
// option 1. forward icon via slot?
export const Button = ({ as = 'button', text, isDisabled, isFullWidth, onClick, ...rest }: Props) => {
  const Component = as;
  return (
    <Component
      onClick={onClick}
      disabled={isDisabled}
      className={clsx(
        isFullWidth ? 'w-full' : 'w-fit',
        'py-2 px-4 rounded bg-[#4B7254] disabled:bg-[#afafaf] disabled:cursor-auto',
      )}
      {...rest}
    >
      <span className="font-sansation font-normal text-base text-gray-50">{text}</span>
    </Component>
  );
};

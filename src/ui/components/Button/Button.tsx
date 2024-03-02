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
    iconRight?: React.ReactElement;
  };

export const Button = ({
  as: Component = 'button',
  text,
  isDisabled,
  isFullWidth,
  onClick,
  iconRight,
  ...rest
}: Props) => {
  return (
    <Component
      onClick={onClick}
      disabled={isDisabled}
      className={clsx(
        isFullWidth ? 'w-full' : 'w-fit',
        'py-2 px-4 rounded bg-[#829C9B] disabled:bg-[#afafaf] disabled:cursor-auto',
      )}
      {...rest}
    >
      <div className="group flex items-center gap-2 text-white">
        <span className="font-sansation font-normal text-base">{text}</span>
        {iconRight && <div className="group-hover:animate-slide">{iconRight}</div>}
      </div>
    </Component>
  );
};

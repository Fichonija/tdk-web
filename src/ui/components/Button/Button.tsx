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
      onClick={!isDisabled ? onClick : undefined}
      disabled={isDisabled}
      className={clsx(
        isFullWidth ? 'w-full' : 'w-fit',
        'py-2 px-4 rounded bg-[#829C9B]',
        isDisabled ? 'bg-[#afafaf] cursor-default' : 'hover:bg-[#688887] focus:bg-[#688887] active:bg-[#3F6362]',
      )}
      {...rest}
    >
      <div className={clsx('group flex items-center gap-2 text-white', isDisabled && 'opacity-80')}>
        <span className="font-sansation font-normal text-base">{text}</span>
        {iconRight && <div className={clsx(!isDisabled && 'w-6 h-6 group-hover:animate-slide')}>{iconRight}</div>}
      </div>
    </Component>
  );
};

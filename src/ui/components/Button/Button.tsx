import clsx from 'clsx';
import { type AnchorHTMLAttributes, type ButtonHTMLAttributes } from 'react';
import { LoadingSvg } from './LoadingSvg';

type ButtonAttributes = Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'name'>;
type LinkAttributes = Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>;

type Props = ButtonAttributes &
  LinkAttributes & {
    as?: 'button' | 'a';
    text: string;
    iconRight?: React.ReactElement;
    isDisabled?: boolean;
    isLoading?: boolean;
    isFullWidth?: boolean;
    onClick?: () => void;
  };

export const Button = ({
  as: Component = 'button',
  text,
  iconRight,
  isDisabled,
  isLoading,
  isFullWidth,
  onClick,
  ...rest
}: Props) => {
  const isClickDisabled = isDisabled || isLoading;
  const isIconVisible = iconRight && !isLoading;

  return (
    <Component
      onClick={!isClickDisabled ? onClick : undefined}
      disabled={isClickDisabled}
      className={clsx(
        isFullWidth ? 'w-full' : 'w-fit',
        'group py-2 px-4 rounded-sm bg-[#829C9B]',
        isDisabled && 'bg-[#afafaf]',
        !isClickDisabled && 'hover:bg-[#688887] focus:bg-[#688887] active:bg-[#3F6362]',
      )}
      {...rest}
    >
      <div className={clsx('relative flex justify-center items-center gap-2 text-white', isDisabled && 'opacity-80')}>
        <div className="font-sansation font-normal text-base md:text-lg">
          <span className={clsx(isLoading && 'invisible')}>{text}</span>
          {isLoading && (
            <div className="absolute top-0 h-6 md:h-7 w-full">
              <LoadingSvg />
            </div>
          )}
        </div>
        {isIconVisible && <div className={clsx(!isDisabled && 'w-6 h-6 group-hover:animate-slide')}>{iconRight}</div>}
      </div>
    </Component>
  );
};

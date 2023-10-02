import { type ButtonHTMLAttributes } from 'react';

type ButtonAttributes = Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'name'>;

type Props = ButtonAttributes & {
  text: string;
  onClick?: () => void;
  isDisabled?: boolean;
};
export const Button = ({ text, onClick, isDisabled, ...rest }: Props) => {
  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={
        'w-full md:w-fit ' +
        'py-2 px-4 md:py-4 md:px-8 ' +
        'border-2 border-solid border-[#9aa583] rounded-lg ' +
        'bg-[#c5d89c] disabled:bg-[#afafaf] ' +
        'cursor-pointer disabled:cursor-auto '
      }
      {...rest}
    >
      <span className="font-display font-medium text-base md:text-xl">{text}</span>
    </button>
  );
};

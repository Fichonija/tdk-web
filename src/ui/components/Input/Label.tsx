interface Props {
  label: string;
  name?: string;
}

export const Label = ({ label, name }: Props) => {
  return (
    <label htmlFor={name} className="font-display font-medium text-base md:text-xl">
      {label}
    </label>
  );
};

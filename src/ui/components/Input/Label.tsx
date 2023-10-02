interface Props {
  label: string;
  name?: string;
}

export const Label = ({ label, name }: Props) => {
  return (
    <label htmlFor={name} className="text-base md:text-xl" style={{ fontFamily: 'Montserrat Medium' }}>
      {label}
    </label>
  );
};

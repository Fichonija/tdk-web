import { Input, Textarea } from '~/ui/components';

interface FieldLabelProps {
  label: string;
}

const withFieldLabels = <T extends any>(WrappedComponent: React.FC<T>) => {
  const displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

  const ComponentWithLabels = ({ label, ...rest }: T & FieldLabelProps) => (
    <div className="flex flex-col gap-3">
      <label htmlFor={(rest as any).name} className="font-sansation font-bold text-xl text-gray-800">
        {label}
      </label>
      <WrappedComponent {...(rest as any)} />
    </div>
  );

  ComponentWithLabels.displayName = `withTheme(${displayName})`;

  return ComponentWithLabels;
};

export const InputWithLabels = withFieldLabels(Input);
export const TextareaWithLabels = withFieldLabels(Textarea);

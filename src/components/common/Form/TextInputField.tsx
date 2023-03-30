import { HTMLAttributes } from 'react';
import { Control, Controller, RegisterOptions } from 'react-hook-form';

interface TextInputFieldProps extends HTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  name: string;
  control: Control<any, object>;
  rules?: Omit<
    RegisterOptions<any, any>,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >;
  classNames?: string;
  error?: string;
  textarea?: boolean;
}

export const TextInputField: React.FC<TextInputFieldProps> = ({
  label,
  name,
  control,
  rules,
  classNames = '',
  textarea = false,
  error,
  ...props
}) => {
  return (
    <div className="mx-2 md:mx-4 py-1">
      <label htmlFor={name} className="py-2 font-medium md:text-lg block">
        {label}
      </label>
      <Controller
        name={name}
        control={control}
        rules={{
          required: {
            value: true,
            message: name + ' is Required',
          },
          ...rules,
        }}
        render={({ field }) => {
          if (textarea) {
            return (
              <textarea
                rows={4}
                className={`px-4 py-2 md:py-3 font-light md:font-medium rounded-sm border border-paragraph w-full focus:border-secondary outline-none ${classNames}`}
                id={name}
                {...props}
                {...field}
              />
            );
          }
          return (
            <input
              className={`px-4 py-2 md:py-3 font-light md:font-medium rounded-sm border border-paragraph w-full focus:border-secondary outline-none ${classNames}`}
              id={name}
              {...props}
              {...field}
            />
          );
        }}
      />
      {error && <p className="text-primary-dark text-sm mt-2 capitalize">{error}</p>}
    </div>
  );
};

'use client';

import { Controller, FieldValues, UseControllerProps } from 'react-hook-form';
import { ITextAreaProps, TextArea } from './text-area';

interface IControlledTextAreaProps<T extends FieldValues>
  extends Omit<ITextAreaProps, 'name' | 'defaultValue'>,
    UseControllerProps<T> {}

export const ControlledTextArea = <T extends FieldValues>({ control, name, ...props }: IControlledTextAreaProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => {
        return <TextArea {...props} {...field} error={fieldState.error?.message} />;
      }}
    />
  );
};

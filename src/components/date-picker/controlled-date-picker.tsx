'use client';

import { Controller, FieldValues, UseControllerProps } from 'react-hook-form';
import { IDatePickerProps, DatePicker } from './date-picker';

interface IControlledSelectProps<T extends FieldValues> extends IDatePickerProps, UseControllerProps<T> {}

export const ControlledDatePicker = <T extends FieldValues>({ name, control, ...props }: IControlledSelectProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => {
        return <DatePicker {...props} {...field} error={fieldState.error?.message} />;
      }}
    />
  );
};

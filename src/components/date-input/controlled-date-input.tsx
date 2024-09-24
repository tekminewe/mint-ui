"use client";

import { Controller, FieldValues, UseControllerProps } from "react-hook-form";
import { DateInputProps, DateInput } from "./date-input";

export interface ControlledDateInputProps<T extends FieldValues>
  extends DateInputProps,
    UseControllerProps<T> {}

export const ControlledDatePicker = <T extends FieldValues>({
  name,
  control,
  ...props
}: ControlledDateInputProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => {
        return (
          <DateInput {...props} {...field} error={fieldState.error?.message} />
        );
      }}
    />
  );
};

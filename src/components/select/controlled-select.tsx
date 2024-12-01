"use client";

import { Controller, FieldValues, UseControllerProps } from "react-hook-form";
import { SelectProps, Select } from "./select";

interface IControlledSelectProps<T extends FieldValues>
  extends SelectProps,
    UseControllerProps<T> {}

export const ControlledSelect = <T extends FieldValues>({
  name,
  control,
  ...props
}: IControlledSelectProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => {
        return (
          <Select {...props} {...field} error={fieldState.error?.message} />
        );
      }}
    />
  );
};

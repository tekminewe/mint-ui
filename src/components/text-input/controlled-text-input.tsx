"use client";

import { TextInputProps, TextInput } from "./text-input";
import { Controller, FieldValues, UseControllerProps } from "react-hook-form";

interface IControlledTextInputProps<T extends FieldValues>
  extends Omit<TextInputProps, "name" | "defaultValue">,
    UseControllerProps<T> {}

export const ControlledTextInput = <T extends FieldValues>({
  control,
  name,
  ...props
}: IControlledTextInputProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => {
        return (
          <TextInput {...props} {...field} error={fieldState.error?.message} />
        );
      }}
    />
  );
};

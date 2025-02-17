"use client";

import { Controller, FieldValues, UseControllerProps } from "react-hook-form";
import { ImageInput, ImageInputProps } from "./image-input";

export interface ControlledImageInputProps<T extends FieldValues>
  extends Omit<ImageInputProps, "name" | "defaultValue">,
    UseControllerProps<T> {}

export const ControlledImageInput = <T extends FieldValues>({
  control,
  name,
  ...props
}: ControlledImageInputProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => {
        return (
          <ImageInput {...props} {...field} error={fieldState.error?.message} />
        );
      }}
    />
  );
};

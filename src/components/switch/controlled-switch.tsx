"use client";

import { ISwitchProps, Switch } from "./switch";
import { Controller, FieldValues, UseControllerProps } from "react-hook-form";

interface IControlledSwitchProps<T extends FieldValues>
  extends Omit<ISwitchProps, "name" | "defaultValue">,
    UseControllerProps<T> {}

export const ControlledSwitch = <T extends FieldValues>({
  control,
  name,
  ...props
}: IControlledSwitchProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => {
        return (
          <Switch
            {...props}
            {...field}
            checked={field.value}
            onCheckedChange={field.onChange}
            error={fieldState.error?.message}
          />
        );
      }}
    />
  );
};

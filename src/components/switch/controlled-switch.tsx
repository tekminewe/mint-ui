"use client";

import { ISwitchProps, Switch } from "./switch";
import {
  FieldValues,
  Path,
  useController,
  useFormContext,
} from "react-hook-form";

interface ControlledSwitchProps<T extends FieldValues>
  extends Omit<ISwitchProps, "name"> {
  name: Path<T>;
}

export const ControlledSwitch = <T extends FieldValues>({
  name,
  ...props
}: ControlledSwitchProps<T>) => {
  const { control } = useFormContext<T>();
  const {
    fieldState: { error },
    field,
  } = useController<T>({ name, control });
  return (
    <Switch
      {...props}
      {...field}
      checked={field.value}
      onCheckedChange={field.onChange}
      error={error?.message}
    />
  );
};

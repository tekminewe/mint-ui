import {
  Switch as RadixSwitch,
  SwitchProps as RadixSwitchProps,
  Text,
} from "@radix-ui/themes";
import { FormLabel } from "../form";
import { forwardRef } from "react";
import { cn } from "../utils";

export interface SwitchProps extends RadixSwitchProps {
  error?: string;
  containerClassName?: string;
  labelClassName?: string;
  label?: string;
  description?: string;
}

export const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
  (
    {
      error,
      description,
      label,
      required,
      containerClassName,
      labelClassName,
      ...props
    },
    ref
  ) => {
    return (
      <label className={cn("flex flex-col w-full gap-1", containerClassName)}>
        <FormLabel
          className={labelClassName}
          label={label}
          required={required}
        />
        <RadixSwitch ref={ref} {...props} />
        {error && (
          <Text size="2" color="red">
            {error}
          </Text>
        )}
        {description && (
          <Text size="2" color="gray">
            {description}
          </Text>
        )}
      </label>
    );
  }
);

Switch.displayName = "Switch";

import {
  Flex,
  Switch as RadixSwitch,
  SwitchProps as RadixSwitchProps,
  Text,
} from "@radix-ui/themes";
import { FormLabel } from "../form";
import { forwardRef } from "react";

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
      <Flex
        asChild
        width="100%"
        direction="column"
        gap="1"
        className={containerClassName}
      >
        <label>
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
      </Flex>
    );
  }
);

Switch.displayName = "Switch";

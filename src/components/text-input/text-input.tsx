"use client";

import { forwardRef, useId } from "react";
import { Flex, TextField } from "@radix-ui/themes";
import { Text } from "../text";
import { FormLabel } from "../form";

export interface TextInputProps extends TextField.RootProps {
  icon?: React.ReactNode;
  label?: string;
  error?: string;
  description?: string;
  containerClassName?: string;
  labelClassName?: string;
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      containerClassName,
      labelClassName,
      error,
      label,
      icon,
      size = "2",
      placeholder = "Please enter the field",
      required,
      description,
      id,
      ...props
    },
    ref
  ) => {
    const customId = useId();
    const inputId = id ?? customId;
    const renderDescription = () => {
      if (error) {
        return (
          <Text size="2" color="red">
            {error}
          </Text>
        );
      }

      if (description) {
        return (
          <Text size="2" color="gray">
            {description}
          </Text>
        );
      }

      return null;
    };

    const renderTextField = () => {
      return (
        <TextField.Root
          id={inputId}
          ref={ref}
          required={required}
          size={size}
          placeholder={placeholder}
          {...props}
        >
          {icon && <TextField.Slot>{icon}</TextField.Slot>}
        </TextField.Root>
      );
    };
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
            htmlFor={inputId}
            label={label}
            size={size}
            required={required}
          />
          {renderTextField()}
          {renderDescription()}
        </label>
      </Flex>
    );
  }
);

TextInput.displayName = "TextInput";

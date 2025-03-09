"use client";

import { forwardRef, useId } from "react";
import { TextField } from "@radix-ui/themes";
import { Caption } from "../typography";
import { FormLabel } from "../form";
import { cn } from "../utils";

export interface TextInputProps extends Omit<TextField.RootProps, "type"> {
  icon?: React.ReactNode;
  label?: string;
  error?: string;
  description?: string;
  containerClassName?: string;
  labelClassName?: string;
  type?: TextField.RootProps["type"] | "currency";
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
      type,
      onChange,
      ...props
    },
    ref
  ) => {
    const customId = useId();
    const inputId = id ?? customId;
    const renderDescription = () => {
      if (error) {
        return <Caption className="text-error">{error}</Caption>;
      }

      if (description) {
        return <Caption>{description}</Caption>;
      }

      return null;
    };

    let inputType = type;
    if (type === "currency") {
      inputType = "number";
    }

    const renderTextField = () => {
      return (
        <TextField.Root
          id={inputId}
          ref={ref}
          required={required}
          size={size}
          placeholder={placeholder}
          onChange={(e) => {
            if (type === "currency") {
              e.target.value = e.target.value.replace(/(\.\d{2})\d+$/, "$1");
            }
            onChange?.(e);
          }}
          type={inputType as TextField.RootProps["type"]}
          {...props}
        >
          {icon && <TextField.Slot>{icon}</TextField.Slot>}
        </TextField.Root>
      );
    };
    return (
      <label className={cn("flex flex-col w-full gap-1", containerClassName)}>
        <FormLabel
          className={labelClassName}
          htmlFor={inputId}
          label={label}
          required={required}
        />
        {renderTextField()}
        {renderDescription()}
      </label>
    );
  }
);

TextInput.displayName = "TextInput";

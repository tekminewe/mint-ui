"use client";

import { forwardRef, useId, InputHTMLAttributes } from "react";
import { Caption } from "../typography";
import { FormLabel } from "../form";
import { cn } from "../utils";

export interface TextInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  /**
   * Icon to display inside the input
   */
  icon?: React.ReactNode;

  /**
   * Label for the input
   */
  label?: string;

  /**
   * Error message to display
   */
  error?: string;

  /**
   * Description text to display
   */
  description?: string;

  /**
   * Additional className for the container
   */
  containerClassName?: string;

  /**
   * Additional className for the label
   */
  labelClassName?: string;

  /**
   * Input type
   */
  type?: string;

  /**
   * Size of the input
   * @default "2"
   */
  size?: "1" | "2" | "3";
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
      // Get the appropriate size class based on the size prop
      const sizeClass =
        {
          "1": "text-sm py-1 px-2",
          "2": "py-2 px-3",
          "3": "text-lg py-3 px-4",
        }[size as "1" | "2" | "3"] || "py-2 px-3";

      return (
        <div className="relative w-full">
          <input
            id={inputId}
            ref={ref}
            required={required}
            placeholder={placeholder}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              if (type === "currency") {
                e.target.value = e.target.value.replace(/(\.\d{2})\d+$/, "$1");
              }
              onChange?.(e);
            }}
            type={inputType as string}
            className={cn(
              "w-full border border-neutral-300 rounded-md",
              "focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent",
              "dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-100",
              error && "border-error-500 focus:ring-error-500",
              sizeClass,
              icon && "pl-10"
            )}
            {...props}
          />
          {icon && (
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-neutral-500">
              {icon}
            </div>
          )}
        </div>
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

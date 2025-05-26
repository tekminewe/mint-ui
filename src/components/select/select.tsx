"use client";

import { Select as RadixSelect, Text } from "@radix-ui/themes";
import { forwardRef } from "react";
import { Cross1Icon } from "@radix-ui/react-icons";
import { FormLabel } from "../form";
import { cn } from "../utils";

export interface SelectProps {
  label?: string;
  value?: string;
  placeholder?: string;
  onChange?: (value?: string) => void;
  options?: { label: string; value: string }[];
  required?: boolean;
  size?: RadixSelect.RootProps["size"];
  error?: string;
  description?: string;
  clearable?: boolean;
  className?: string;
}

export const Select = forwardRef<HTMLDivElement, SelectProps>(
  (
    {
      error,
      required,
      size = "2",
      value,
      onChange,
      label,
      description,
      options,
      placeholder = "Please select an option",
      clearable = true,
      className,
    },
    ref
  ) => {
    const handleClear = (e: React.MouseEvent<SVGElement>) => {
      e.preventDefault();
      onChange?.(undefined);
    };

    const renderSelect = () => {
      return (
        <RadixSelect.Root
          value={value ?? ""}
          size={size}
          onValueChange={onChange}
        >
          <RadixSelect.Trigger
            placeholder={placeholder}
            className={cn(
              "w-full [&>span]:w-full",
              {
                "[&>*>*]:mr-[30px]": clearable,
              },
              className
            )}
          />
          <RadixSelect.Content ref={ref} position="popper">
            {options?.map((option) => (
              <RadixSelect.Item key={option.value} value={option.value}>
                {option.label}
              </RadixSelect.Item>
            ))}
          </RadixSelect.Content>
        </RadixSelect.Root>
      );
    };

    return (
      <label className="flex flex-col gap-1">
        <FormLabel label={label} required={required} />
        {description && (
          <Text size="2" color="gray">
            {description}
          </Text>
        )}
        <div className="flex items-center w-full relative">
          {renderSelect()}
          {clearable && value && (
            <Cross1Icon
              className="cursor-pointer absolute right-[40px]"
              onClick={handleClear}
            />
          )}
        </div>
        <Text size="2" color="red">
          {error}
        </Text>
      </label>
    );
  }
);

Select.displayName = "Select";

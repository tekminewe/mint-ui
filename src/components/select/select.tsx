import { Select as RadixSelect, Text } from "@radix-ui/themes";
import { Flex } from "../flex";
import { forwardRef } from "react";
import { Cross1Icon } from "@radix-ui/react-icons";
import { FormLabel } from "../form";

export interface ISelectProps {
  label?: string;
  value?: string;
  placeholder?: string;
  onChange?: (value?: string) => void;
  options?: { label: string; value: string }[];
  required?: boolean;
  size?: RadixSelect.RootProps["size"];
  error?: string;
  description?: string;
}

export const Select = forwardRef<HTMLDivElement, ISelectProps>(
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
    },
    ref
  ) => {
    const handleClear = () => {
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
            className="[&>*>*]:mr-[30px] w-full [&>span]:w-full"
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
      <Flex asChild direction="column" gap="1">
        <label>
          <FormLabel label={label} size={size} required={required} />
          {description && (
            <Text size="2" color="gray">
              {description}
            </Text>
          )}
          <Flex width="100%" align="center" className="relative">
            {renderSelect()}
            {value && (
              <Cross1Icon
                className="cursor-pointer absolute right-[40px]"
                onClick={handleClear}
              />
            )}
          </Flex>
          <Text size="2" color="red">
            {error}
          </Text>
        </label>
      </Flex>
    );
  }
);

Select.displayName = "Select";

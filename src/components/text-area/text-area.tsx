import { TextArea as RadixTextArea, TextAreaProps } from "@radix-ui/themes";
import { forwardRef } from "react";
import { Flex } from "../flex";
import { Text } from "../text";
import { FormLabel } from "../form";

export interface ITextAreaProps extends TextAreaProps {
  label?: string;
  error?: string;
  description?: string;
}

export const TextArea = forwardRef<HTMLTextAreaElement, ITextAreaProps>(
  (
    {
      size = "2",
      label,
      placeholder = "Please fill in the field",
      error,
      description,
      required,
      ...props
    },
    ref
  ) => {
    return (
      <Flex asChild direction="column" gap="1">
        <label>
          <FormLabel label={label} size={size} required={required} />
          {description && (
            <Text size="2" color="gray">
              {description}
            </Text>
          )}
          <RadixTextArea
            placeholder={placeholder}
            size={size}
            required={required}
            {...props}
            ref={ref}
          />
          <Text size="2" color="red">
            {error}
          </Text>
        </label>
      </Flex>
    );
  }
);

TextArea.displayName = "TextArea";

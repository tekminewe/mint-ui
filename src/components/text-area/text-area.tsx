import { TextArea as RadixTextArea, TextAreaProps } from "@radix-ui/themes";
import { forwardRef } from "react";
import { Flex } from "../flex";
import { Caption } from "../typography";
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
          <FormLabel label={label} required={required} />
          {description && <Caption>{description}</Caption>}
          <RadixTextArea
            placeholder={placeholder}
            size={size}
            required={required}
            {...props}
            ref={ref}
          />
          <Caption className="text-error">{error}</Caption>
        </label>
      </Flex>
    );
  }
);

TextArea.displayName = "TextArea";

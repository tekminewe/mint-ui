import { TextArea as RadixTextArea, TextAreaProps } from "@radix-ui/themes";
import { forwardRef } from "react";
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
      <label className="flex flex-col gap-1">
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
    );
  }
);

TextArea.displayName = "TextArea";

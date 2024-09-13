import { forwardRef, InputHTMLAttributes, useId } from "react";
import { Flex } from "../flex";
import { FormLabel } from "../form";
import { TextField } from "@radix-ui/themes";
import { Text } from "../text";

export interface ImageInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  /**
   * The label for the input.
   * @default undefined
   * @example "Upload Image"
   */
  label?: string;

  /**
   * Class name for the container element.
   * @default undefined
   * @example "border-b"
   */
  containerClassName?: string;

  /**
   * Class name for the label element.
   * @default undefined
   * @example "text-white"
   */
  labelClassName?: string;

  /**
   * The size of the input.
   * @default "2"
   * @example "1"
   */
  size?: TextField.RootProps["size"];

  /**
   * The error message to display.
   * @default undefined
   * @example "This field is required"
   */
  error?: string;

  /**
   * The description to display.
   * @default undefined
   * @example "Image must be less than 5MB"
   */
  description?: string;

  /**
   * The value (url) of the input.
   * @default undefined
   * @example "https://example.com/image.jpg"
   */
  value?: string;
}

export const ImageInput = forwardRef<HTMLInputElement, ImageInputProps>(
  (
    {
      containerClassName,
      labelClassName,
      required,
      label,
      size,
      error,
      description,
      id,
      accept = "image/*",
      value,
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
          <input
            type="file"
            accept={accept}
            id={inputId}
            ref={ref}
            className="hidden"
            {...props}
          />
          {value ? (
            <img
              src={value}
              alt="featured-image-upload"
              className="w-full aspect-auto"
            />
          ) : (
            <Flex
              justify="center"
              align="center"
              className="w-full cursor-pointer h-9 text-gray-8 bg-gray-2 border-dashed border rounded-2"
            >
              Upload an image
            </Flex>
          )}
          {renderDescription()}
        </label>
      </Flex>
    );
  }
);

ImageInput.displayName = "ImageInput";

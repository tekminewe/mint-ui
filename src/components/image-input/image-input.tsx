import { forwardRef, InputHTMLAttributes, useId } from 'react';
import { FormLabel } from '../form';
import { Caption } from '../typography';
import { cn } from '../utils';
import {
  SURFACE_COLORS,
  TEXT_COLORS,
  BORDER_COLORS,
} from '../utils/component-colors';

export interface ImageInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
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
   * @example "text-red-500"
   */
  labelClassName?: string;

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
      error,
      description,
      id,
      accept = 'image/*',
      value,
      ...props
    },
    ref,
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

    return (
      <label
        className={cn(
          'flex w-full flex-col',
          label && 'gap-1',
          containerClassName,
        )}
      >
        {label && (
          <FormLabel
            className={labelClassName}
            htmlFor={inputId}
            label={label}
            required={required}
          />
        )}
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
          <div
            className={cn(
              'flex justify-center items-center w-full cursor-pointer h-9 border-dashed border rounded-2',
              TEXT_COLORS.muted,
              SURFACE_COLORS.surfaceSubtle,
              BORDER_COLORS.default,
            )}
          >
            Upload an image
          </div>
        )}
        {renderDescription()}
      </label>
    );
  },
);

ImageInput.displayName = 'ImageInput';

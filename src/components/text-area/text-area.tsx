import { forwardRef, TextareaHTMLAttributes } from 'react';
import { Caption } from '../typography';
import { FormLabel } from '../form';
import { cn } from '../utils';

export interface ITextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  /**
   * The label for the text area.
   */
  label?: string;

  /**
   * Error message to display below the text area.
   */
  error?: string;

  /**
   * Description text to display below the label.
   */
  description?: string;
}

export const TextArea = forwardRef<HTMLTextAreaElement, ITextAreaProps>(
  (
    {
      label,
      placeholder = 'Please fill in the field',
      error,
      description,
      required,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <label className={cn('flex flex-col', label && 'gap-1')}>
        {label && <FormLabel label={label} required={required} />}
        {description && <Caption>{description}</Caption>}
        <textarea
          placeholder={placeholder}
          required={required}
          className={cn(
            'w-full p-2 rounded-md border border-neutral-300 focus:outline-none focus:ring-2 focus:border-transparent',
            error
              ? 'border-error-500 focus:ring-error-500'
              : 'focus:ring-primary-500',
            'dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-100',
            'min-h-[80px] resize-y',
            className,
          )}
          {...props}
          ref={ref}
        />
        {error && <Caption className="text-error">{error}</Caption>}
      </label>
    );
  },
);

TextArea.displayName = 'TextArea';

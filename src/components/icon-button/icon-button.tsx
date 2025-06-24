import * as React from 'react';
import { cn } from '../utils';

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The icon to display in the button.
   */
  children: React.ReactNode;

  /**
   * The size of the button.
   * @default "2"
   */
  size?: '1' | '2' | '3';

  /**
   * The variant of the button.
   * @default "ghost"
   */
  variant?: 'solid' | 'outline' | 'soft' | 'ghost';

  /**
   * The color of the button.
   * @default "gray"
   */
  color?: 'gray' | 'red' | 'green' | 'blue';

  /**
   * Additional CSS class names.
   */
  className?: string;
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      children,
      size = '2',
      variant = 'ghost',
      color = 'gray',
      className,
      ...props
    },
    ref,
  ) => {
    // Size classes
    const sizeClasses = {
      '1': 'h-6 w-6',
      '2': 'h-8 w-8',
      '3': 'h-10 w-10',
    }[size];

    // Variant and color classes
    const variantColorClasses = {
      solid: {
        gray: 'bg-neutral-900 text-neutral-50 hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200',
        red: 'bg-error-600 text-neutral-50 hover:bg-error-700 dark:bg-error-700 dark:hover:bg-error-600',
        green:
          'bg-success-600 text-neutral-50 hover:bg-success-700 dark:bg-success-700 dark:hover:bg-success-600',
        blue: 'bg-primary text-neutral-50 hover:bg-primary-700 dark:bg-primary-700 dark:hover:bg-primary-600',
      },
      outline: {
        gray: 'border border-neutral-300 text-neutral-700 hover:border-neutral-400 hover:bg-neutral-50 dark:border-neutral-700 dark:text-neutral-300 dark:hover:border-neutral-600 dark:hover:bg-neutral-800',
        red: 'border border-red-300 text-red-700 hover:border-red-400 hover:bg-red-50 dark:border-red-700 dark:text-red-300 dark:hover:border-red-600 dark:hover:bg-red-950',
        green:
          'border border-green-300 text-green-700 hover:border-green-400 hover:bg-green-50 dark:border-green-700 dark:text-green-300 dark:hover:border-green-600 dark:hover:bg-green-950',
        blue: 'border border-blue-300 text-blue-700 hover:border-blue-400 hover:bg-blue-50 dark:border-blue-700 dark:text-blue-300 dark:hover:border-blue-600 dark:hover:bg-blue-950',
      },
      soft: {
        gray: 'bg-neutral-100 text-neutral-900 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-700',
        red: 'bg-red-100 text-red-900 hover:bg-red-200 dark:bg-red-950 dark:text-red-100 dark:hover:bg-red-900',
        green:
          'bg-green-100 text-green-900 hover:bg-green-200 dark:bg-green-950 dark:text-green-100 dark:hover:bg-green-900',
        blue: 'bg-blue-100 text-blue-900 hover:bg-blue-200 dark:bg-blue-950 dark:text-blue-100 dark:hover:bg-blue-900',
      },
      ghost: {
        gray: 'text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800',
        red: 'text-red-700 hover:bg-red-100 dark:text-red-300 dark:hover:bg-red-950',
        green:
          'text-green-700 hover:bg-green-100 dark:text-green-300 dark:hover:bg-green-950',
        blue: 'text-blue-700 hover:bg-blue-100 dark:text-blue-300 dark:hover:bg-blue-950',
      },
    }[variant][color];

    return (
      <button
        ref={ref}
        type="button"
        className={cn(
          'inline-flex items-center justify-center rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-1 disabled:opacity-50 disabled:pointer-events-none',
          sizeClasses,
          variantColorClasses,
          className,
        )}
        {...props}
      >
        {children}
      </button>
    );
  },
);

IconButton.displayName = 'IconButton';

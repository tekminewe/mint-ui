"use client";

import { forwardRef } from "react";
import { cn } from "../utils";
import { Spinner } from "../spinner";

// Base styles that apply to all buttons
const baseStyles =
  "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-2 disabled:opacity-50 disabled:pointer-events-none";

// Size styles
const sizeStyles = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-5 py-2.5 text-lg",
};

// Color styles for each variant
const colorVariantStyles = {
  solid: {
    primary:
      "bg-primary-100 text-primary-700 hover:bg-primary-200 focus:ring-primary-400 dark:bg-primary-200 dark:text-primary-900 dark:hover:bg-primary-100",
    neutral:
      "bg-neutral-100 text-neutral-700 hover:bg-neutral-200 focus:ring-neutral-500 dark:bg-neutral-200 dark:text-neutral-900 dark:hover:bg-neutral-100",
    success:
      "bg-success-100 text-success-700 hover:bg-success-200 focus:ring-success-500 dark:bg-success-200 dark:text-success-900 dark:hover:bg-success-100",
    error:
      "bg-error-100 text-error-700 hover:bg-error-200 focus:ring-error-500 dark:bg-error-200 dark:text-error-900 dark:hover:bg-error-100",
    warning:
      "bg-warning-100 text-warning-700 hover:bg-warning-200 focus:ring-warning-500 dark:bg-warning-200 dark:text-warning-900 dark:hover:bg-warning-100",
    info: "bg-info-100 text-info-700 hover:bg-info-200 focus:ring-info-500 dark:bg-info-200 dark:text-info-900 dark:hover:bg-info-100",
  },
  soft: {
    primary:
      "bg-primary-50 text-primary-600 hover:bg-primary-100 focus:ring-primary-400 dark:bg-primary-100 dark:text-primary-700 dark:hover:bg-primary-200",
    neutral:
      "bg-neutral-50 text-neutral-600 hover:bg-neutral-100 focus:ring-neutral-500 dark:bg-neutral-100 dark:text-neutral-700 dark:hover:bg-neutral-200",
    success:
      "bg-success-50 text-success-600 hover:bg-success-100 focus:ring-success-500 dark:bg-success-100 dark:text-success-700 dark:hover:bg-success-200",
    error:
      "bg-error-50 text-error-600 hover:bg-error-100 focus:ring-error-500 dark:bg-error-100 dark:text-error-700 dark:hover:bg-error-200",
    warning:
      "bg-warning-50 text-warning-600 hover:bg-warning-100 focus:ring-warning-500 dark:bg-warning-100 dark:text-warning-700 dark:hover:bg-warning-200",
    info: "bg-info-50 text-info-600 hover:bg-info-100 focus:ring-info-500 dark:bg-info-100 dark:text-info-700 dark:hover:bg-info-200",
  },
  outline: {
    primary:
      "border-2 border-primary-600 text-primary-700 hover:bg-primary-100 focus:ring-primary-500 dark:border-primary-300 dark:text-primary-300 dark:hover:bg-primary-100",
    neutral:
      "border-2 border-neutral-600 text-neutral-700 hover:bg-neutral-100 focus:ring-neutral-500 dark:border-neutral-300 dark:text-neutral-300 dark:hover:bg-neutral-100",
    success:
      "border-2 border-success-600 text-success-700 hover:bg-success-100 focus:ring-success-500 dark:border-success-300 dark:text-success-300 dark:hover:bg-success-100",
    error:
      "border-2 border-error-600 text-error-700 hover:bg-error-100 focus:ring-error-500 dark:border-error-300 dark:text-error-300 dark:hover:bg-error-100",
    warning:
      "border-2 border-warning-600 text-warning-700 hover:bg-warning-100 focus:ring-warning-500 dark:border-warning-300 dark:text-warning-300 dark:hover:bg-warning-100",
    info: "border-2 border-info-600 text-info-700 hover:bg-info-100 focus:ring-info-500 dark:border-info-300 dark:text-info-300 dark:hover:bg-info-100",
  },
  ghost: {
    primary:
      "text-primary-700 hover:bg-primary-100 focus:ring-primary-500 dark:text-primary-300 dark:hover:bg-primary-100",
    neutral:
      "text-neutral-700 hover:bg-neutral-100 focus:ring-neutral-500 dark:text-neutral-300 dark:hover:bg-neutral-100",
    success:
      "text-success-700 hover:bg-success-100 focus:ring-success-500 dark:text-success-300 dark:hover:bg-success-100",
    error:
      "text-error-700 hover:bg-error-100 focus:ring-error-500 dark:text-error-300 dark:hover:bg-error-100",
    warning:
      "text-warning-700 hover:bg-warning-100 focus:ring-warning-500 dark:text-warning-300 dark:hover:bg-warning-100",
    info: "text-info-700 hover:bg-info-100 focus:ring-info-500 dark:text-info-300 dark:hover:bg-info-100",
  },
  link: {
    primary:
      "text-primary-700 hover:underline focus:ring-0 dark:text-primary-300 p-0 font-semibold",
    neutral:
      "text-neutral-700 hover:underline focus:ring-0 dark:text-neutral-300 p-0 font-semibold",
    success:
      "text-success-700 hover:underline focus:ring-0 dark:text-success-300 p-0 font-semibold",
    error:
      "text-error-700 hover:underline focus:ring-0 dark:text-error-300 p-0 font-semibold",
    warning:
      "text-warning-700 hover:underline focus:ring-0 dark:text-warning-300 p-0 font-semibold",
    info: "text-info-700 hover:underline focus:ring-0 dark:text-info-300 p-0 font-semibold",
  },
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The variant of the button.
   * @default "solid"
   * @example "solid"
   */
  variant?: "solid" | "soft" | "outline" | "ghost" | "link";

  /**
   * The color of the button.
   * @default "primary"
   * @example "primary"
   */
  color?: "primary" | "neutral" | "success" | "error" | "warning" | "info";

  /**
   * The size of the button.
   * @default "md"
   * @example "md"
   */
  size?: "sm" | "md" | "lg";

  /**
   * Whether the button is in a loading state.
   * @default false
   * @example false
   */
  loading?: boolean;

  /**
   * Whether the button is disabled.
   * @default false
   * @example false
   */
  disabled?: boolean;

  /**
   * The content of the button.
   */
  children: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "solid",
      color = "primary",
      size = "md",
      loading = false,
      disabled = false,
      children,
      className,
      type = "button",
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled || loading}
        className={cn(
          baseStyles,
          sizeStyles[size],
          colorVariantStyles[variant][color],
          className
        )}
        {...props}
      >
        {loading && <Spinner color={color} className="mr-2 h-4 w-4" />}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

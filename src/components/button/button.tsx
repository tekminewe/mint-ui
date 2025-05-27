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
      "bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-400 dark:focus:ring-primary-500 active:bg-primary-700 shadow-sm",
    neutral:
      "bg-neutral-600 text-white hover:bg-neutral-700 focus:ring-neutral-400 dark:focus:ring-neutral-500 active:bg-neutral-700 shadow-sm",
    success:
      "bg-success-500 text-white hover:bg-success-700 focus:ring-success-400 dark:focus:ring-success-500 active:bg-success-700 shadow-sm",
    error:
      "bg-error-500 text-white hover:bg-error-700 focus:ring-error-400 dark:focus:ring-error-500 active:bg-error-700 shadow-sm",
    warning:
      "bg-warning-500 text-white hover:bg-warning-700 focus:ring-warning-400 dark:focus:ring-warning-500 active:bg-warning-700 shadow-sm",
    info: "bg-info-500 text-white hover:bg-info-700 focus:ring-info-400 dark:focus:ring-info-500 active:bg-info-700 shadow-sm",
  },
  soft: {
    primary:
      "bg-primary-100 text-primary-700 hover:bg-primary-200 focus:ring-primary-400 dark:bg-primary-800 dark:text-primary-100 dark:hover:bg-primary-700",
    neutral:
      "bg-neutral-100 text-neutral-700 hover:bg-neutral-200 focus:ring-neutral-500 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-700",
    success:
      "bg-success-100 text-success-700 hover:bg-success-200 focus:ring-success-500 dark:bg-success-800 dark:text-success-100 dark:hover:bg-success-700",
    error:
      "bg-error-100 text-error-700 hover:bg-error-200 focus:ring-error-500 dark:bg-error-800 dark:text-error-100 dark:hover:bg-error-700",
    warning:
      "bg-warning-100 text-warning-700 hover:bg-warning-200 focus:ring-warning-500 dark:bg-warning-800 dark:text-warning-100 dark:hover:bg-warning-700",
    info: "bg-info-100 text-info-700 hover:bg-info-200 focus:ring-info-500 dark:bg-info-800 dark:text-info-100 dark:hover:bg-info-700",
  },
  outline: {
    primary:
      "border-2 border-primary-600 text-primary-700 hover:bg-primary-100 focus:ring-primary-500 dark:border-primary-400 dark:text-primary-400 dark:hover:bg-primary-900",
    neutral:
      "border-2 border-neutral-600 text-neutral-700 hover:bg-neutral-100 focus:ring-neutral-500 dark:border-neutral-400 dark:text-neutral-400 dark:hover:bg-neutral-900",
    success:
      "border-2 border-success-600 text-success-700 hover:bg-success-100 focus:ring-success-500 dark:border-success-400 dark:text-success-400 dark:hover:bg-success-900",
    error:
      "border-2 border-error-600 text-error-700 hover:bg-error-100 focus:ring-error-500 dark:border-error-400 dark:text-error-400 dark:hover:bg-error-900",
    warning:
      "border-2 border-warning-600 text-warning-700 hover:bg-warning-100 focus:ring-warning-500 dark:border-warning-400 dark:text-warning-400 dark:hover:bg-warning-900",
    info: "border-2 border-info-600 text-info-700 hover:bg-info-100 focus:ring-info-500 dark:border-info-400 dark:text-info-400 dark:hover:bg-info-900",
  },
  ghost: {
    primary:
      "text-primary-700 hover:bg-primary-100 focus:ring-primary-500 dark:text-primary-400 dark:hover:bg-primary-900",
    neutral:
      "text-neutral-700 hover:bg-neutral-100 focus:ring-neutral-500 dark:text-neutral-400 dark:hover:bg-neutral-900",
    success:
      "text-success-700 hover:bg-success-100 focus:ring-success-500 dark:text-success-400 dark:hover:bg-success-900",
    error:
      "text-error-700 hover:bg-error-100 focus:ring-error-500 dark:text-error-400 dark:hover:bg-error-900",
    warning:
      "text-warning-700 hover:bg-warning-100 focus:ring-warning-500 dark:text-warning-400 dark:hover:bg-warning-900",
    info: "text-info-700 hover:bg-info-100 focus:ring-info-500 dark:text-info-400 dark:hover:bg-info-900",
  },
  link: {
    primary:
      "text-primary-700 hover:underline focus:ring-0 dark:text-primary-400 p-0 font-semibold",
    neutral:
      "text-neutral-700 hover:underline focus:ring-0 dark:text-neutral-400 p-0 font-semibold",
    success:
      "text-success-700 hover:underline focus:ring-0 dark:text-success-400 p-0 font-semibold",
    error:
      "text-error-700 hover:underline focus:ring-0 dark:text-error-400 p-0 font-semibold",
    warning:
      "text-warning-700 hover:underline focus:ring-0 dark:text-warning-400 p-0 font-semibold",
    info: "text-info-700 hover:underline focus:ring-0 dark:text-info-400 p-0 font-semibold",
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
        {loading && <Spinner className="mr-2 h-4 w-4" />}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

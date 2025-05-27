"use client";

import { forwardRef } from "react";
import { cn } from "../utils";
import { Spinner } from "../spinner";

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
          "bg-primary-500 text-white hover:bg-primary-600 focus:ring-primary-300 dark:focus:ring-primary-700 active:bg-primary-700",
        neutral:
          "bg-neutral-500 text-white hover:bg-neutral-600 focus:ring-neutral-300 dark:focus:ring-neutral-700 active:bg-neutral-700",
        success:
          "bg-success-500 text-white hover:bg-success-600 focus:ring-success-300 dark:focus:ring-success-700 active:bg-success-700",
        error:
          "bg-error-500 text-white hover:bg-error-600 focus:ring-error-300 dark:focus:ring-error-700 active:bg-error-700",
        warning:
          "bg-warning-500 text-white hover:bg-warning-600 focus:ring-warning-300 dark:focus:ring-warning-700 active:bg-warning-700",
        info: "bg-info-500 text-white hover:bg-info-600 focus:ring-info-300 dark:focus:ring-info-700 active:bg-info-700",
      },
      soft: {
        primary:
          "bg-primary-100 text-primary-700 hover:bg-primary-200 focus:ring-primary-200 dark:bg-primary-800 dark:text-primary-100 dark:hover:bg-primary-700",
        neutral:
          "bg-neutral-100 text-neutral-700 hover:bg-neutral-200 focus:ring-neutral-200 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-700",
        success:
          "bg-success-100 text-success-700 hover:bg-success-200 focus:ring-success-200 dark:bg-success-700 dark:text-success-100 dark:hover:bg-success-600",
        error:
          "bg-error-100 text-error-700 hover:bg-error-200 focus:ring-error-200 dark:bg-error-700 dark:text-error-100 dark:hover:bg-error-600",
        warning:
          "bg-warning-100 text-warning-700 hover:bg-warning-200 focus:ring-warning-200 dark:bg-warning-700 dark:text-warning-100 dark:hover:bg-warning-600",
        info: "bg-info-100 text-info-700 hover:bg-info-200 focus:ring-info-200 dark:bg-info-700 dark:text-info-100 dark:hover:bg-info-600",
      },
      outline: {
        primary:
          "border border-primary-300 text-primary-700 hover:bg-primary-50 focus:ring-primary-300 dark:border-primary-600 dark:text-primary-300 dark:hover:bg-primary-900",
        neutral:
          "border border-neutral-300 text-neutral-700 hover:bg-neutral-50 focus:ring-neutral-300 dark:border-neutral-600 dark:text-neutral-300 dark:hover:bg-neutral-900",
        success:
          "border border-success-300 text-success-700 hover:bg-success-50 focus:ring-success-300 dark:border-success-600 dark:text-success-300 dark:hover:bg-success-900",
        error:
          "border border-error-300 text-error-700 hover:bg-error-50 focus:ring-error-300 dark:border-error-600 dark:text-error-300 dark:hover:bg-error-900",
        warning:
          "border border-warning-300 text-warning-700 hover:bg-warning-50 focus:ring-warning-300 dark:border-warning-600 dark:text-warning-300 dark:hover:bg-warning-900",
        info: "border border-info-300 text-info-700 hover:bg-info-50 focus:ring-info-300 dark:border-info-600 dark:text-info-300 dark:hover:bg-info-900",
      },
      ghost: {
        primary:
          "text-primary-700 hover:bg-primary-100 focus:ring-primary-300 dark:text-primary-300 dark:hover:bg-primary-900",
        neutral:
          "text-neutral-700 hover:bg-neutral-100 focus:ring-neutral-300 dark:text-neutral-300 dark:hover:bg-neutral-900",
        success:
          "text-success-700 hover:bg-success-100 focus:ring-success-300 dark:text-success-300 dark:hover:bg-success-900",
        error:
          "text-error-700 hover:bg-error-100 focus:ring-error-300 dark:text-error-300 dark:hover:bg-error-900",
        warning:
          "text-warning-700 hover:bg-warning-100 focus:ring-warning-300 dark:text-warning-300 dark:hover:bg-warning-900",
        info: "text-info-700 hover:bg-info-100 focus:ring-info-300 dark:text-info-300 dark:hover:bg-info-900",
      },
      link: {
        primary:
          "text-primary-700 hover:underline focus:ring-0 dark:text-primary-300 p-0",
        neutral:
          "text-neutral-700 hover:underline focus:ring-0 dark:text-neutral-300 p-0",
        success:
          "text-success-700 hover:underline focus:ring-0 dark:text-success-300 p-0",
        error:
          "text-error-700 hover:underline focus:ring-0 dark:text-error-300 p-0",
        warning:
          "text-warning-700 hover:underline focus:ring-0 dark:text-warning-300 p-0",
        info: "text-info-700 hover:underline focus:ring-0 dark:text-info-300 p-0",
      },
    };

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

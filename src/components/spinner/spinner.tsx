import React from "react";
import { cn } from "../utils";

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The size of the spinner.
   * @default "md"
   * @example "md"
   */
  size?: "sm" | "md" | "lg";

  /**
   * The color of the spinner.
   * @default "primary"
   * @example "primary"
   */
  color?: "primary" | "neutral" | "success" | "error" | "warning" | "info";
}

export const Spinner: React.FC<SpinnerProps> = ({
  size = "md",
  color = "primary",
  className,
  ...props
}) => {
  const sizeClasses = {
    sm: "h-4 w-4 border-2",
    md: "h-6 w-6 border-2",
    lg: "h-8 w-8 border-3",
  };

  const colorClasses = {
    primary: "border-primary-500 border-b-transparent",
    neutral: "border-neutral-500 border-b-transparent",
    success: "border-success-500 border-b-transparent",
    error: "border-error-500 border-b-transparent",
    warning: "border-warning-500 border-b-transparent",
    info: "border-info-500 border-b-transparent",
  };

  return (
    <div
      className={cn(
        "inline-block animate-spin rounded-full",
        sizeClasses[size],
        colorClasses[color],
        className
      )}
      {...props}
      role="status"
      aria-label="Loading"
    />
  );
};

import React from "react";
import { cn } from "../../utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * The visual color appearance of the badge.
   * @default "gray"
   * @example "green"
   */
  color?: "gray" | "green" | "red" | "blue" | "yellow";

  /**
   * The size of the badge.
   * @default "1"
   * @example "2"
   */
  size?: "1" | "2";

  /**
   * The variant of the badge.
   * @default "solid"
   * @example "outline"
   */
  variant?: "solid" | "outline" | "soft";
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    { color = "gray", size = "1", variant = "solid", className, ...props },
    ref
  ) => {
    const sizeClasses = size === "1" ? "text-xs px-2" : "text-sm px-3";

    const colorClasses = {
      solid: {
        gray: "bg-gray-9 text-gray-contrast",
        green: "bg-green-9 text-green-contrast",
        red: "bg-red-9 text-white",
        blue: "bg-blue-9 text-white",
        yellow: "bg-yellow-9 text-black",
      },
      soft: {
        gray: "bg-gray-a3 text-gray-12",
        green: "bg-green-a3 text-green-12",
        red: "bg-red-a3 text-red-12",
        blue: "bg-blue-a3 text-blue-12",
        yellow: "bg-yellow-a3 text-yellow-12",
      },
      outline: {
        gray: "border border-gray-a6 text-gray-12",
        green: "border border-green-a6 text-green-12",
        red: "border border-red-a6 text-red-12",
        blue: "border border-blue-a6 text-blue-12",
        yellow: "border border-yellow-a6 text-yellow-12",
      },
    };

    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-full font-medium py-1",
          sizeClasses,
          colorClasses[variant][color],
          className
        )}
        {...props}
      />
    );
  }
);

Badge.displayName = "Badge";

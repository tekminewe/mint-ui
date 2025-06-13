import { HTMLAttributes } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../utils";

export type CardShadow = "none" | "sm" | "md" | "lg" | "xl";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Use the children as the component.
   * @default false
   */
  asChild?: boolean;

  /**
   * The shadow size for the card.
   * @default "none"
   * @example "md"
   */
  shadow?: CardShadow;
}

export const Card = (props: CardProps) => {
  const { asChild, shadow = "none", ...rest } = props;
  const Comp = asChild ? Slot : "div";

  // Define shadow classes based on size
  const shadowClasses = {
    sm: "shadow-1",
    md: "shadow-2",
    lg: "shadow-3",
    xl: "shadow-4",
  };

  return (
    <Comp
      {...rest}
      className={cn(
        "rounded-4 p-4 bg-gray-surface", // Base classes always applied
        shadow === "none"
          ? "border border-neutral-100 dark:border-neutral-600" // Lighter border when no shadow
          : shadowClasses[shadow as Exclude<CardShadow, "none">], // Apply shadow when specified
        props.className
      )}
    />
  );
};

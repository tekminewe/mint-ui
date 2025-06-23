import { HTMLAttributes } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn, Radius } from "../utils";
import { Shadow, getShadowClass } from "../utils/shadow";
import { getStaticRadiusClass } from "../utils/get-radius-class";

export type CardShadow = Shadow;

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

  /**
   * The border radius for the card.
   * If not provided, uses the global default radius from RadiusProvider.
   * @default "md" (from global context)
   * @example "lg"
   */
  radius?: Radius;
}

export const Card = (props: CardProps) => {
  const { asChild, shadow = "none", radius, ...rest } = props;
  const Comp = asChild ? Slot : "div";
  const radiusClass = getStaticRadiusClass(radius);

  // Determine shadow or border styling
  const shadowOrBorderClass =
    shadow === "none"
      ? "border border-neutral-100 dark:border-neutral-600" // Lighter border when no shadow
      : getShadowClass(shadow); // Apply shadow using utility

  return (
    <Comp
      {...rest}
      className={cn(
        "p-4 bg-gray-surface", // Base classes always applied
        radiusClass, // Apply the effective radius
        shadowOrBorderClass, // Apply shadow or border
        props.className
      )}
    />
  );
};

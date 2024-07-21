import { Link, LinkProps } from "@radix-ui/themes";
import { forwardRef } from "react";
import { cn } from "../utils";

export type NavigationMenuVerticalItemProps = LinkProps;

export const NavigationMenuVerticalItem = forwardRef<
  HTMLAnchorElement,
  NavigationMenuVerticalItemProps
>(({ ...props }, ref) => {
  return (
    <Link
      ref={ref}
      {...props}
      className={cn(props.className, "p-2 px-4")}
      color={props.color ?? "gray"}
    />
  );
});

NavigationMenuVerticalItem.displayName = "NavigationMenuVerticalItem";

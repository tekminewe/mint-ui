import { AnchorHTMLAttributes, forwardRef } from "react";
import { cn } from "../utils";
import { Slot } from "@radix-ui/themes";

export interface NavigationMenuItemProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  asChild?: boolean;
}

export const NavigationMenuItem = forwardRef<
  HTMLAnchorElement,
  NavigationMenuItemProps
>(({ asChild, ...props }, ref) => {
  const Comp = asChild ? Slot : "a";
  return (
    <Comp
      ref={ref}
      {...props}
      className={cn("text-gray-11", props.className)}
    />
  );
});

NavigationMenuItem.displayName = "NavbarMenuItem";

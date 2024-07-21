import { Link, LinkProps } from "@radix-ui/themes";
import { forwardRef } from "react";

export type NavigationMenuItemProps = LinkProps;

export const NavigationMenuItem = forwardRef<
  HTMLAnchorElement,
  NavigationMenuItemProps
>(({ ...props }, ref) => {
  return <Link ref={ref} {...props} color={props.color ?? "gray"} />;
});

NavigationMenuItem.displayName = "NavbarMenuItem";

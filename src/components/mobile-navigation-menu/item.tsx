import { Link, LinkProps } from "@radix-ui/themes";
import { forwardRef } from "react";
import { cn } from "../utils";

export type MobileNavigationMenuItemProps = LinkProps;

export const MobileNavigationMenuItem = forwardRef<
  HTMLAnchorElement,
  MobileNavigationMenuItemProps
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

MobileNavigationMenuItem.displayName = "MobileNavigationMenuItem";

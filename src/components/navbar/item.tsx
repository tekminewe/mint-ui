import { Link, LinkProps } from "@radix-ui/themes";
import { forwardRef } from "react";

export interface NavbarItemProps extends LinkProps {}

export const NavbarItem = forwardRef<HTMLAnchorElement, NavbarItemProps>(
  ({ ...props }: NavbarItemProps) => {
    return <Link color={props.color ?? "gray"} {...props} />;
  }
);

NavbarItem.displayName = "NavbarItem";

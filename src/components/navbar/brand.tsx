import { Slot } from "@radix-ui/themes";
import { HTMLAttributes } from "react";
import { cn } from "../utils";

export interface NavbarBrandProps extends HTMLAttributes<HTMLElement> {}

export const NavbarBrand = ({ ...props }: NavbarBrandProps) => {
  return (
    <Slot
      {...props}
      className={cn(props.className, "md:ml-4", {
        "cursor-pointer": props.onClick,
      })}
    />
  );
};

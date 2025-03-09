import * as DropdownMenuPrimitives from "@radix-ui/react-dropdown-menu";
import { cn } from "../utils";
import { forwardRef } from "react";

export interface DropdownMenuItemProps
  extends DropdownMenuPrimitives.DropdownMenuItemProps {}

export const DropdownMenuItem = forwardRef<
  HTMLDivElement,
  DropdownMenuItemProps
>(({ className, ...props }, ref) => {
  return (
    <DropdownMenuPrimitives.Item
      ref={ref}
      {...props}
      className={cn("dropdown-menu-item", className)}
    ></DropdownMenuPrimitives.Item>
  );
});

DropdownMenuItem.displayName = "DropdownMenuItem";

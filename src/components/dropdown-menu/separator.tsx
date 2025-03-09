import * as DropdownMenuPrimitives from "@radix-ui/react-dropdown-menu";
import { cn } from "../utils";
import { forwardRef } from "react";

export interface DropdownMenuSeparatorProps
  extends DropdownMenuPrimitives.DropdownMenuSeparatorProps {}

export const DropdownMenuSeparator = forwardRef<
  HTMLDivElement,
  DropdownMenuSeparatorProps
>(({ className, ...props }, ref) => {
  return (
    <DropdownMenuPrimitives.Separator
      ref={ref}
      {...props}
      className={cn("dropdown-menu-separator", className)}
    ></DropdownMenuPrimitives.Separator>
  );
});

DropdownMenuSeparator.displayName = "DropdownMenuSeparator";

import * as DropdownMenuPrimitives from "@radix-ui/react-dropdown-menu";
import { cn } from "../utils";
import { forwardRef } from "react";

export const DropdownMenuRoot = DropdownMenuPrimitives.Root;

export interface DropdownMenuProps
  extends DropdownMenuPrimitives.DropdownMenuPortalProps,
    DropdownMenuPrimitives.DropdownMenuSubContentProps {}

export const DropdownMenu = forwardRef<HTMLDivElement, DropdownMenuProps>(
  ({ forceMount, container, className, ...props }, ref) => {
    return (
      <DropdownMenuPrimitives.Portal
        forceMount={forceMount}
        container={container}
      >
        <DropdownMenuPrimitives.Content
          ref={ref}
          {...props}
          className={cn("dropdown-menu-content", className)}
        ></DropdownMenuPrimitives.Content>
      </DropdownMenuPrimitives.Portal>
    );
  }
);

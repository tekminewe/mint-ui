import { forwardRef, HTMLAttributes } from "react";
import { cn } from "../utils";

export interface SidebarMenuItemProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Whether the menu item is selected.
   * @default false
   * @example true
   */
  selected?: boolean;
}

export const SidebarMenuItem = forwardRef<HTMLDivElement, SidebarMenuItemProps>(
  ({ children, selected, ...props }, ref) => {
    return (
      <div
        {...props}
        data-selected={selected}
        className={cn("sidebar-menu-item", props.className)}
        ref={ref}
      >
        {children}
      </div>
    );
  }
);

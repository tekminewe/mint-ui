import { AnchorHTMLAttributes, forwardRef } from "react";
import { cn } from "../utils";

export interface SubMenuItemProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * If `true`, the item will be selected.
   */
  selected?: boolean;
}

export const SubMenuItem = forwardRef<HTMLAnchorElement, SubMenuItemProps>(
  ({ selected, ...props }, ref) => {
    return (
      <a
        ref={ref}
        {...props}
        data-selected={selected}
        className={cn(
          "text-gray-11 flex items-center gap-2 p-2 hover:bg-accent-9 hover:text-accent-contrast cursor-pointer rounded-3",
          "data-[selected='true']:bg-accent-9 data-[selected='true']:text-accent-contrast",
          props.className
        )}
      />
    );
  }
);

SubMenuItem.displayName = "SubMenuItem";

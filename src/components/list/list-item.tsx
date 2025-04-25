import { forwardRef } from "react";
import { cn } from "../utils";

export interface ListItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  /**
   * If true, the item will be selected.
   * @default false
   * @example true
   */
  selected?: boolean;
}

export const ListItem = forwardRef<HTMLLIElement, ListItemProps>(
  ({ className, selected, ...props }, ref) => {
    return (
      <li
        ref={ref}
        {...props}
        className={cn("list-item-row", className)}
        data-selected={selected}
      />
    );
  }
);

ListItem.displayName = "ListItem";

import { forwardRef, HTMLAttributes } from "react";
import { cn } from "../utils";

export interface SubMenuProps extends HTMLAttributes<HTMLDivElement> {}

export const SubMenu = forwardRef<HTMLDivElement, SubMenuProps>(
  ({ ...props }, ref) => {
    return (
      <aside
        ref={ref}
        {...props}
        className={cn("shadow-3 rounded-3 p-2 space-y-2", props.className)}
      />
    );
  }
);

SubMenu.displayName = "SubMenu";

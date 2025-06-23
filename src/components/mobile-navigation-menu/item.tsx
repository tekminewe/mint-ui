import { AnchorHTMLAttributes, forwardRef } from "react";
import { cn } from "../utils";

export interface MobileNavigationMenuItemProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  color?: "gray" | "primary";
  disabled?: boolean;
}

export const MobileNavigationMenuItem = forwardRef<
  HTMLAnchorElement,
  MobileNavigationMenuItemProps
>(({ color = "gray", className, disabled, onClick, ...props }, ref) => {
  return (
    <a
      ref={ref}
      {...props}
      className={cn(
        "p-2 px-4 inline-flex items-center text-base font-normal no-underline rounded transition-colors",
        {
          "text-gray-700 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800": color === "gray" && !disabled,
          "text-primary-600 hover:text-primary-700 hover:bg-primary-50 dark:text-primary-500 dark:hover:text-primary-400 dark:hover:bg-primary-900/30": color === "primary" && !disabled,
          "opacity-50 cursor-not-allowed pointer-events-none text-gray-400 dark:text-gray-500": disabled,
        },
        className
      )}
      onClick={disabled ? (e) => e.preventDefault() : onClick}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : undefined}
    />
  );
});

MobileNavigationMenuItem.displayName = "MobileNavigationMenuItem";

MobileNavigationMenuItem.displayName = "MobileNavigationMenuItem";

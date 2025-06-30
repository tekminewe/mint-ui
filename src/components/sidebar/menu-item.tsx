import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '../utils';

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
        className={cn(
          'p-3 rounded-md cursor-pointer font-medium flex items-center gap-3',
          'hover:bg-primary-600 hover:text-neutral-50',
          'transition-colors duration-150',
          'mt-1 first:mt-0',
          selected && 'bg-primary-600 text-neutral-50',
          props.className,
        )}
        ref={ref}
      >
        {children}
      </div>
    );
  },
);

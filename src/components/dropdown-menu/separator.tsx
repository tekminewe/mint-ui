import * as DropdownMenuPrimitives from '@radix-ui/react-dropdown-menu';
import { cn } from '../utils';
import { forwardRef } from 'react';

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
      className={cn(
        'h-[1px] bg-neutral-200 dark:bg-neutral-300 my-2 mx-1',
        className,
      )}
    ></DropdownMenuPrimitives.Separator>
  );
});

DropdownMenuSeparator.displayName = 'DropdownMenuSeparator';

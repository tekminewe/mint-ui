import * as DropdownMenuPrimitives from '@radix-ui/react-dropdown-menu';
import { cn } from '../utils';
import { forwardRef } from 'react';

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
          className={cn(
            'shadow-lg rounded-md overflow-hidden p-1 mt-1',
            'bg-neutral-50 dark:bg-neutral-200',
            'text-neutral-900 dark:text-neutral-900',
            'border border-neutral-200 dark:border-neutral-300',
            className,
          )}
        ></DropdownMenuPrimitives.Content>
      </DropdownMenuPrimitives.Portal>
    );
  },
);

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import { cn } from "../utils";

export interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  /**
   * The label for the checkbox
   */
  label?: string;
}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, label, ...props }, ref) => (
  <div className="flex items-center gap-2">
    <CheckboxPrimitive.Root
      ref={ref}
      className={cn(
        "peer h-4 w-4 shrink-0 rounded-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
        "data-[state=checked]:bg-primary data-[state=checked]:border-primary",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "dark:border-gray-600 dark:focus:ring-primary dark:data-[state=checked]:bg-primary",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        className={cn("flex items-center justify-center text-white")}
      >
        <CheckIcon className="h-3 w-3" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
    {label && (
      <label
        className={cn(
          "text-sm font-medium text-gray-900 dark:text-gray-100",
          "peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
        )}
      >
        {label}
      </label>
    )}
  </div>
));

Checkbox.displayName = "Checkbox";

export { Checkbox };

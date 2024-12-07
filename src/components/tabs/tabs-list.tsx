import * as RadixTabs from "@radix-ui/react-tabs";
import { forwardRef } from "react";
import { cn } from "../utils";

export type TabsListProps = RadixTabs.TabsListProps;

export const TabsList = forwardRef<HTMLDivElement, TabsListProps>(
  ({ ...props }, ref) => {
    return (
      <RadixTabs.TabsList
        {...props}
        className={cn("border-b", props.className)}
        ref={ref}
      />
    );
  }
);

TabsList.displayName = "TabsList";

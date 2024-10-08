"use client";

import { Flex, FlexProps } from "@radix-ui/themes";
import { forwardRef } from "react";
import { cn } from "../utils";

export type NavigationMenuProps = Omit<FlexProps, "as">;

export const NavigationMenu = forwardRef<HTMLDivElement, NavigationMenuProps>(
  ({ ...props }, ref) => {
    return (
      <Flex
        asChild
        {...props}
        className={cn("mt-navMenu flex-1", props.className)}
        justify={props.justify ?? "end"}
        gap={props.gap ?? "6"}
      >
        <nav ref={ref} {...props} />
      </Flex>
    );
  }
);

NavigationMenu.displayName = "NavigationMenu";

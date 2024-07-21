"use client";

import { Flex, FlexProps } from "@radix-ui/themes";
import { forwardRef, useContext } from "react";
import { cn } from "../utils";
import { NavbarContext } from "../navbar/context";
import { NavigationMenuItem } from "./item";

export type NavigationMenuProps = Omit<FlexProps, "as">;

export const NavigationMenu = Object.assign(
  forwardRef<HTMLDivElement, NavigationMenuProps>(({ ...props }, ref) => {
    const { hideOnMobileClassName } = useContext(NavbarContext);
    return (
      <Flex
        asChild
        {...props}
        className={cn(props.className, hideOnMobileClassName, "flex-1")}
        justify={props.justify ?? "end"}
        gap={props.gap ?? "6"}
      >
        <nav ref={ref} {...props} />
      </Flex>
    );
  }),
  {
    Item: NavigationMenuItem,
  }
);

NavigationMenu.displayName = "NavigationMenu";

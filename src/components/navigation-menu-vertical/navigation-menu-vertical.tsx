"use client";

import { Flex, FlexProps } from "@radix-ui/themes";
import { forwardRef } from "react";
import { NavigationMenuVerticalItem } from "./item";

export type NavigationMenuVerticalProps = Omit<FlexProps, "as">;

export const NavigationMenuVertical = Object.assign(
  forwardRef<HTMLDivElement, NavigationMenuVerticalProps>(
    ({ ...props }, ref) => {
      return (
        <Flex
          asChild
          {...props}
          direction="column"
          justify={props.justify ?? "end"}
          gap={props.gap ?? "2"}
        >
          <nav ref={ref} {...props} />
        </Flex>
      );
    }
  ),
  {
    Item: NavigationMenuVerticalItem,
  }
);

NavigationMenuVertical.displayName = "NavigationMenuVertical";

"use client";

import { Flex, FlexProps } from "@radix-ui/themes";
import { forwardRef } from "react";
import { Drawer, DrawerRoot, DrawerRootProps, DrawerTrigger } from "../drawer";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

export type MobileNavigationMenuProps = Omit<FlexProps, "as"> &
  Pick<DrawerRootProps, "open" | "onOpenChange">;

export const MobileNavigationMenu = forwardRef<
  HTMLDivElement,
  MobileNavigationMenuProps
>(({ open, onOpenChange, ...props }, ref) => {
  return (
    <DrawerRoot open={open} onOpenChange={onOpenChange}>
      <DrawerTrigger className="mt-mobileNavMenu">
        <HamburgerMenuIcon width={28} height={28} />
      </DrawerTrigger>
      <Drawer className="bg-accent-1 text-gray-11 fixed top-0 bottom-0 h-screen w-80">
        <Flex
          asChild
          {...props}
          direction="column"
          justify={props.justify ?? "end"}
          gap={props.gap ?? "2"}
        >
          <nav ref={ref} {...props} />
        </Flex>
      </Drawer>
    </DrawerRoot>
  );
});

MobileNavigationMenu.displayName = "MobileNavigationMenu";

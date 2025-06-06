"use client";

import { forwardRef } from "react";
import { Drawer, DrawerRoot, DrawerRootProps, DrawerTrigger } from "../drawer";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { cn } from "../utils";

export type MobileNavigationMenuProps = {
  /**
   * Children to render
   */
  children?: React.ReactNode;

  /**
   * Additional class names
   */
  className?: string;
} & Pick<DrawerRootProps, "open" | "onOpenChange">;

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
        <nav
          ref={ref}
          {...props}
          className={cn("flex flex-col gap-2", props.className)}
        />
      </Drawer>
    </DrawerRoot>
  );
});

MobileNavigationMenu.displayName = "MobileNavigationMenu";

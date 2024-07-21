"use client";

import { HTMLAttributes, ReactNode } from "react";
import { Drawer } from "../drawer";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { cn } from "../utils";
import { Flex } from "../flex";
import { Container } from "../container";
import { NavbarContext } from "./context";

export interface NavbarProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The content of the navbar.
   */
  drawerContent?: ReactNode;

  /**
   * The breakpoint at which the navbar should switch to a mobile layout.
   * @default "md"
   */
  mobileBreakpoint?: "xl" | "lg" | "md" | "sm" | "xs";
}

const hideOnMobileClassName = (
  mobileBreakpoint: NavbarProps["mobileBreakpoint"]
) => {
  switch (mobileBreakpoint) {
    case "xl":
      return "hidden xl:flex";
    case "lg":
      return "hidden lg:flex";
    case "md":
      return "hidden md:flex";
    case "sm":
      return "hidden sm:flex";
    case "xs":
      return "hidden xs:flex";
  }
};

const showOnMobileClassName = (
  mobileBreakpoint: NavbarProps["mobileBreakpoint"]
) => {
  switch (mobileBreakpoint) {
    case "xl":
      return "xl:hidden";
    case "lg":
      return "lg:hidden";
    case "md":
      return "md:hidden";
    case "sm":
      return "sm:hidden";
    case "xs":
      return "xs:hidden";
  }
};

export const Navbar = ({
  children,
  className,
  drawerContent,
  mobileBreakpoint = "md",
  ...props
}: NavbarProps) => {
  return (
    <NavbarContext.Provider
      value={{ hideOnMobileClassName: hideOnMobileClassName(mobileBreakpoint) }}
    >
      <Flex
        align="center"
        px="4"
        width="100%"
        height="4rem"
        {...props}
        className={cn(className, "border-b")}
      >
        <Drawer.Root>
          <Drawer.Trigger className={showOnMobileClassName(mobileBreakpoint)}>
            <HamburgerMenuIcon width={28} height={28} />
          </Drawer.Trigger>
          <Drawer className="bg-accent-1 text-gray-11 fixed top-0 bottom-0 h-screen w-80">
            {drawerContent}
          </Drawer>
        </Drawer.Root>
        <Container>
          <Flex align="center">{children}</Flex>
        </Container>
      </Flex>
    </NavbarContext.Provider>
  );
};

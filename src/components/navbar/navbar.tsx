"use client";

import { forwardRef, HTMLAttributes } from "react";
import { cn } from "../utils";
import { Flex } from "../flex";
import { Container } from "../container";
import { NavbarBreakpoint } from "./types";

export interface NavbarProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The breakpoint at which the navbar should switch to a mobile layout.
   * @default "md"
   */
  breakpoint?: NavbarBreakpoint;

  /**
   * Class name for the container element.
   * @default undefined
   * @example "border-b"
   */
  containerClassName?: string;
}

export const Navbar = forwardRef<HTMLDivElement, NavbarProps>(
  (
    { children, className, breakpoint = "md", containerClassName, ...props },
    ref
  ) => {
    return (
      <Flex
        ref={ref}
        align="center"
        px="4"
        width="100%"
        height="4rem"
        className={cn("mt-navbar", "border-b", containerClassName)}
        data-breakpoint={breakpoint}
        {...props}
      >
        <Container>
          <Flex align="center" className={className}>
            {children}
          </Flex>
        </Container>
      </Flex>
    );
  }
);

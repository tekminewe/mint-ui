"use client";

import { Button as RadixButton } from "@radix-ui/themes";
import type { ButtonProps as RadixButtonProps } from "@radix-ui/themes";
import { forwardRef } from "react";

export type ButtonProps = RadixButtonProps;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ size = "2", loading, disabled, children, ...props }, ref) => (
    <RadixButton
      ref={ref}
      size={size}
      {...props}
      loading={loading}
      disabled={loading || disabled}
    >
      {children}
    </RadixButton>
  )
);
Button.displayName = "Button";

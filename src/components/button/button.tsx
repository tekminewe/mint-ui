"use client";

import { Button as RadixButton } from "@radix-ui/themes";
import type { ButtonProps } from "@radix-ui/themes";
import { forwardRef } from "react";

type IButtonProps = ButtonProps;

export const Button = forwardRef<HTMLButtonElement, IButtonProps>(
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

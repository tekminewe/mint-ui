"use client";

import { Drawer as Vaul } from "vaul";
import { DrawerRoot } from "./drawer-root";
import { cn } from "../utils";
import { CSSProperties } from "react";

export interface IDrawerProps {
  children: React.ReactNode;
  className?: string;
  style?: CSSProperties;
  container?: HTMLElement | null;
  showOverlay?: boolean;
}

export const Drawer = ({
  children,
  container,
  className,
  style,
  showOverlay = true,
}: IDrawerProps) => {
  return (
    <Vaul.Portal container={container}>
      {showOverlay && <Vaul.Overlay className="fixed inset-0 bg-black/40" />}
      <Vaul.Content
        style={style}
        className={cn("bg-white flex flex-col", className)}
      >
        {children}
      </Vaul.Content>
    </Vaul.Portal>
  );
};

Drawer.Root = DrawerRoot;
Drawer.Trigger = Vaul.Trigger;
Drawer.Title = Vaul.Title;

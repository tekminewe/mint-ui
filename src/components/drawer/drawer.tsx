"use client";

import { Drawer as Vaul } from "vaul";
import { cn } from "../utils";
import { CSSProperties } from "react";

export interface DrawerProps {
  /**
   * Content of the drawer
   * @default undefined
   * @example "Drawer Content"
   */
  children?: React.ReactNode;

  /**
   * Custom class name
   * @default undefined
   * @example "text-white"
   */
  className?: string;

  /**
   * Custom style
   * @default undefined
   * @example { maxWidth: "80%" }
   */
  style?: CSSProperties;

  /**
   * Container to render the drawer
   * @default document.body
   * @example document.querySelector("#drawer-container")
   */
  container?: HTMLElement | null;

  /**
   * Show overlay
   * @default true
   * @example false
   */
  showOverlay?: boolean;
}

export const Drawer: React.FC<DrawerProps> = ({
  children,
  container,
  className,
  style,
  showOverlay = true,
}: DrawerProps) => {
  return (
    <Vaul.Portal container={container}>
      {showOverlay && (
        <Vaul.Overlay className="fixed inset-0 bg-[var(--black-a6)]" />
      )}
      <Vaul.Content
        style={style}
        className={cn(
          "bg-gray-1 flex flex-col w-drawer fixed outline-none p-4",
          className
        )}
      >
        {children}
      </Vaul.Content>
    </Vaul.Portal>
  );
};

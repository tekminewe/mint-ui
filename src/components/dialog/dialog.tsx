"use client";

import * as RadixDialog from "@radix-ui/react-dialog";
import { LuX } from "react-icons/lu";
import { cn } from "../utils";

export const DialogRoot = RadixDialog.Root;
export const DialogTrigger = RadixDialog.Trigger;
export const DialogClose = RadixDialog.Close;

export interface DialogProps {
  /**
   * The title of the dialog.
   * @type string
   * @required true
   * @default undefined
   */
  title: string;
  /**
   * The description of the dialog.
   * @default undefined
   * @type string
   * @required false
   */
  description?: string;
  /**
   * Whether to show the close button.
   * @default false
   * @type boolean
   * @required false
   */
  showCloseButton?: boolean;
  /**
   * The children of the dialog
   * @default undefined
   * @type React.ReactNode
   * @required false
   */
  children?: React.ReactNode;

  /**
   * Container to render the drawer
   * @default document.body
   * @example document.querySelector("#drawer-container")
   */
  container?: HTMLElement | null;

  /**
   * Additional class name
   * @default undefined
   * @type string
   * @required false
   */
  className?: string;

  /**
   * Hide title
   * @default true
   * @type boolean
   */
  showTitle?: boolean;
}

export const Dialog = ({
  title,
  showCloseButton = false,
  description,
  children,
  container,
  className,
  showTitle = true,
}: DialogProps) => {
  return (
    <RadixDialog.DialogPortal container={container}>
      <RadixDialog.Overlay className="dialog-overlay" />
      <RadixDialog.Content className={cn("dialog-content", className)}>
        <div
          className={cn("flex items-center justify-between", {
            "mb-4": !description,
          })}
        >
          <RadixDialog.Title
            className={cn("font-semibold text-lg", {
              invisible: !showTitle,
            })}
          >
            {title}
          </RadixDialog.Title>
          {showCloseButton && (
            <RadixDialog.Close>
              <LuX />
            </RadixDialog.Close>
          )}
        </div>
        {description && (
          <RadixDialog.Description className="caption mb-4">
            {description}
          </RadixDialog.Description>
        )}
        {children}
      </RadixDialog.Content>
    </RadixDialog.DialogPortal>
  );
};

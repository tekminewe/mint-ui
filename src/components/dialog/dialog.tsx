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
}

export const Dialog = ({
  title,
  showCloseButton = false,
  description,
  children,
  container,
  className,
}: DialogProps) => {
  return (
    <RadixDialog.DialogPortal container={container}>
      <RadixDialog.Overlay className="dialog-overlay bg-gray-a8 fixed top-0 left-0 right-0 bottom-0" />
      <RadixDialog.Content
        className={cn(
          "dialog-content rounded-4 bg-gray-1 p-4 fixed focus:outline-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-[600px] shadow-3",
          className
        )}
      >
        <RadixDialog.Title
          className={cn("font-semibold text-lg", {
            "mb-4": !description,
          })}
        >
          {title}
        </RadixDialog.Title>
        {description && (
          <RadixDialog.Description className="caption mb-4">
            {description}
          </RadixDialog.Description>
        )}
        {showCloseButton && (
          <RadixDialog.Close>
            <LuX />
          </RadixDialog.Close>
        )}
        {children}
      </RadixDialog.Content>
    </RadixDialog.DialogPortal>
  );
};

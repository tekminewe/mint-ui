"use client";

import { Command } from "cmdk";
import { ReactNode, useContext } from "react";
import { SearchContext } from "./search-input-root";

export interface SearchDialogProps {
  /**
   * The children of the `SearchInputDialog` component.
   * @type {ReactNode}
   * @example <div />
   * @default undefined
   */
  children?: ReactNode;

  /**
   * The container element for the dialog. This is where the dialog will be rendered.
   * @type {HTMLElement}
   * @example document.getElementById('my-container')
   * @default undefined
   */
  container?: HTMLElement | null;

  /**
   * Placeholder text for the search input within the dialog.
   * @type {string}
   * @example "Search..."
   * @default "Search..."
   */
  searchInputPlaceholder?: string;
}

export const SearchDialog = ({
  children,
  container,
  searchInputPlaceholder = "Search...",
}: SearchDialogProps) => {
  const { isOpen, onOpenChange } = useContext(SearchContext);
  return (
    <Command.Dialog
      container={container ?? undefined}
      open={isOpen}
      onOpenChange={onOpenChange}
      className="dialog-content"
      overlayClassName="dialog-overlay"
    >
      <Command.Input
        className="search-result-input"
        placeholder={searchInputPlaceholder}
      ></Command.Input>
      {children}
    </Command.Dialog>
  );
};

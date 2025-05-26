"use client";

import { Command } from "cmdk";
import { forwardRef, ReactNode, useContext, useEffect, useState } from "react";
import { SearchContext } from "./search-root";
import { useDebouncedCallback } from "use-debounce";
import { cn } from "../utils";

export interface SearchDialogProps
  extends Pick<React.HTMLAttributes<HTMLDivElement>, "className"> {
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

  /**
   * Callback function that is called when the search query changes.
   * @param query The search query string.
   * @returns
   */
  onQueryChange?: (query: string) => Promise<void> | void;
}

export const SearchDialog = forwardRef<HTMLDivElement, SearchDialogProps>(
  (
    {
      children,
      container,
      searchInputPlaceholder = "Search...",
      onQueryChange = () => {},
      className,
    },
    ref
  ) => {
    const { isOpen, onOpenChange } = useContext(SearchContext);
    const [query, setQuery] = useState("");
    const debounceQueryChange = useDebouncedCallback(onQueryChange, 300);

    useEffect(() => {
      debounceQueryChange?.(query);
    }, [query, debounceQueryChange]);

    return (
      <Command.Dialog
        ref={ref}
        shouldFilter={false}
        container={container ?? undefined}
        open={isOpen}
        onOpenChange={onOpenChange}
        className={cn("dialog-content search-dialog", className)}
        overlayClassName="overlay"
      >
        <Command.Input
          className="search-result-input"
          placeholder={searchInputPlaceholder}
          value={query}
          onValueChange={setQuery}
        />
        {children}
      </Command.Dialog>
    );
  }
);

SearchDialog.displayName = "SearchDialog";

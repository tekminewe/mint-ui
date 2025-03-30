import { Command } from "cmdk";
import { ReactNode } from "react";

export interface SearchResultListProps {
  /**
   * The text to display when there are no results found in the search list.
   * @type string
   * @example "No results found."
   * @default "Sorry, no results found."
   */
  emptyText?: string;

  /**
   * The children of the `SearchInputDialog` component.
   * @type {ReactNode}
   * @example <div />
   * @default undefined
   */
  children?: ReactNode;
}

export const SearchResultList = ({
  emptyText,
  children,
}: SearchResultListProps) => {
  return (
    <Command.List className="search-result-list">
      <Command.Empty>{emptyText}</Command.Empty>
      {children}
    </Command.List>
  );
};

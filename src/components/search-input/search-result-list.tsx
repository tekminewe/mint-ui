import { Command } from "cmdk";
import { ReactNode } from "react";
import { SearchResultListItemSkeleton } from "./search-result-list-item-skeleton";

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

  /**
   * Indicates whether the search result list is currently loading.
   * This can be used to show a loading state while search results are being fetched.
   * @type boolean
   * @example true
   * @default false
   */
  isLoading?: boolean;
}

export const SearchResultList = ({
  emptyText,
  children,
  isLoading = false,
}: SearchResultListProps) => {
  return (
    <Command.List
      data-state={isLoading ? "loading" : "loaded"}
      className="search-result-list"
    >
      <Command.Empty>{emptyText}</Command.Empty>
      {isLoading ? (
        <div className="search-result-list-skeleton">
          <SearchResultListItemSkeleton />
          <SearchResultListItemSkeleton />
          <SearchResultListItemSkeleton />
        </div>
      ) : (
        children
      )}
    </Command.List>
  );
};

import { forwardRef } from "react";

export const SearchResultListItemSkeleton = forwardRef<HTMLDivElement, unknown>(
  (_, ref) => {
    return <div ref={ref} className="search-result-list-item-skeleton"></div>;
  }
);

SearchResultListItemSkeleton.displayName = "SearchResultListItemSkeleton";

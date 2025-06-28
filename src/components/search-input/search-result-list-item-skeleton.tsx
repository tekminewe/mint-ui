import { forwardRef } from 'react';

export const SearchResultListItemSkeleton = forwardRef<HTMLDivElement, unknown>(
  (_, ref) => {
    return (
      <div
        ref={ref}
        className="animate-pulse h-6 w-full bg-neutral-200 rounded-md mb-2"
      ></div>
    );
  },
);

SearchResultListItemSkeleton.displayName = 'SearchResultListItemSkeleton';

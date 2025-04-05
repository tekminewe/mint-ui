"use client";

import { Command } from "cmdk";
import { forwardRef, ReactNode } from "react";
import { cn } from "../utils";

export interface SearchResultListItemProps
  extends Omit<
    React.HTMLAttributes<HTMLDivElement>,
    "title" | "onSelect" | "disabled" | "value"
  > {
  /**
   * The URL of the image to display in the search result item.
   * @type string
   * @example "https://example.com/image.png"
   * @default undefined
   */
  imageUrl?: string;

  /**
   * The subtitle to display in the search result item.
   * @type ReactNode
   * @example "This is a subtitle"
   * @default undefined
   */
  subtitle?: ReactNode;

  /**
   * The title to display in the search result item.
   * @type string
   * @example "This is a title"
   * @default undefined
   */
  title: string;

  /**
   * The callback function when the item is clicked.
   * @returns
   */
  onItemClick?: () => void;
}
export const SearchResultListItem = forwardRef<
  HTMLDivElement,
  SearchResultListItemProps
>(({ title, subtitle, imageUrl, className, onItemClick, ...props }, ref) => {
  return (
    <Command.Item
      ref={ref}
      {...props}
      onSelect={onItemClick}
      className={cn("search-result-list-item group", className)}
    >
      {imageUrl && (
        <div className="search-result-list-item-image-container">
          <img
            src={imageUrl}
            alt={title}
            className="search-result-list-item-image"
          />
        </div>
      )}
      <div>
        <div className="search-result-list-item-title">{title}</div>
        {subtitle && (
          <div className="search-result-list-item-subtitle">{subtitle}</div>
        )}
      </div>
    </Command.Item>
  );
});

SearchResultListItem.displayName = "SearchResultListItem";

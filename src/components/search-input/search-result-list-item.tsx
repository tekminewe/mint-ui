import { Command } from "cmdk";
import { ReactNode } from "react";

export interface SearchResultListItemProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
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
}
export const SearchResultListItem = ({
  title,
  subtitle,
  imageUrl,
}: SearchResultListItemProps) => {
  return (
    <Command.Item className="search-result-list-item group">
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className="search-result-list-item-image"
        />
      )}
      <div className="search-result-list-item-content">
        <div className="search-result-list-item-title">{title}</div>
        {subtitle && (
          <div className="search-result-list-item-subtitle">{subtitle}</div>
        )}
      </div>
    </Command.Item>
  );
};

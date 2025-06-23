import * as React from "react";
import { cn } from "../utils";
import { Caption, Text } from "../typography";

export interface ProductItemProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The title of the product.
   * @example "Product Title"
   */
  title?: string;

  /**
   * The caption of the product.
   * @example "Product Caption"
   */
  caption?: string;

  /**
   * The image URL of the product.
   * @example "https://via.placeholder.com/375x140"
   */
  imageUrl?: string;

  /**
   * The price of the product.
   * @example "£1000.00"
   */
  price?: string;

  /**
   * The maximum width of the product item.
   * @default "375px"
   */
  maxWidth?: string | number;
}

export const ProductItem = React.forwardRef<HTMLDivElement, ProductItemProps>(
  (
    {
      title,
      caption,
      imageUrl,
      price,
      maxWidth = "375px",
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "cursor-pointer transition-all hover:scale-[1.01]",
          className
        )}
        style={{ maxWidth }}
        {...props}
      >
        <div className="h-full rounded-md border border-neutral-200 bg-white overflow-hidden shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
          <div className="w-full overflow-hidden">
            <img
              src={imageUrl}
              alt={title}
              className="block object-cover w-full h-[140px] bg-neutral-100 dark:bg-neutral-800"
            />
          </div>
          <div className="p-4">
            <div className="flex">
              <div className="flex-1">
                <Text>{title}</Text>
                <Caption>{caption}</Caption>
              </div>
              <div>
                <Text className="font-medium">{price}</Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

ProductItem.displayName = "ProductItem";

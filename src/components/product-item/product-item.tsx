import { Box, BoxProps, Card, Inset } from "@radix-ui/themes";
import { Flex } from "../flex";
import { cn } from "../utils";
import { Caption, Text } from "../typography";

export type ProductItemProps = {
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
} & BoxProps;

export const ProductItem = ({
  title,
  caption,
  imageUrl,
  price,
  ...props
}: ProductItemProps) => {
  return (
    <Box
      maxWidth={props.maxWidth ?? "375px"}
      className={cn(
        props.className,
        "cursor-pointer transition-all hover:scale-[1.01]"
      )}
      {...props}
    >
      <Card size="2" className="h-full">
        <Inset clip="padding-box" side="top" pb="current">
          <img
            src={imageUrl}
            alt={title}
            className="block object-cover w-full h-140 bg-[var(--gray-5)]"
          />
        </Inset>
        <Flex>
          <Box className="flex-1">
            <Text>{title}</Text>
            <Caption>{caption}</Caption>
          </Box>
          <Box>
            <Text>{price}</Text>
          </Box>
        </Flex>
      </Card>
    </Box>
  );
};

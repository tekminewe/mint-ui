import { Box } from "@radix-ui/themes";
import { Caption } from "../caption";
import { Flex } from "../flex";
import { Text } from "../text";
import { forwardRef } from "react";
import { cn } from "../utils";

export interface PostItemProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The title of the blog post.
   */
  title: string;

  /**
   * A summary of the blog post.
   */
  summary: string;

  /**
   * The URL of the image to display for the blog post.
   */
  imageUrl: string;

  /**
   * The date the blog post was published.
   */
  date: string;
}

export const PostItem = forwardRef<HTMLDivElement, PostItemProps>(
  ({ title, summary, imageUrl, date, ...props }, ref) => {
    return (
      <div
        {...props}
        className={cn(props.className, "cursor-pointer")}
        ref={ref}
      >
        <Flex gap="4" className="relative md:static">
          <Box className="relative flex-shrink-0 w-full aspect-[1] md:w-[256px] overflow-hidden rounded-2 border">
            <img
              src={imageUrl}
              alt={title}
              className="object-cover w-full h-full"
            />
            <div className="absolute md:hidden top-0 bottom-0 left-0 right-0 bg-[linear-gradient(to_bottom,transparent_0%,black_100%)]" />
          </Box>
          <div className="absolute bottom-0 p-4 md:p-0 md:static">
            <Caption className="text-gray-contrast md:text-[unset]">
              {date}
            </Caption>
            <Text
              size="5"
              weight="bold"
              my="4"
              className="text-gray-contrast md:text-[unset]"
            >
              {title}
            </Text>
            <Text className="hidden md:block">{summary}</Text>
          </div>
        </Flex>
      </div>
    );
  }
);

PostItem.displayName = "PostItem";

import { Box } from "@radix-ui/themes";
import { Text, Caption, Title } from "../typography";
import { forwardRef } from "react";
import { cn } from "../utils";
import { Badge } from "../badge";

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

  /**
   * Any tags associated with the blog post.
   * @default []
   * @example ["react", "vue", "angular"]
   */
  tags?: string[];
}

export const PostItem = forwardRef<HTMLDivElement, PostItemProps>(
  ({ title, summary, imageUrl, date, tags = [], ...props }, ref) => {
    return (
      <div
        {...props}
        className={cn(props.className, "cursor-pointer")}
        ref={ref}
      >
        <div className="flex gap-4 relative md:static">
          <Box className="relative flex-shrink-0 w-full aspect-[1] md:w-[256px] overflow-hidden rounded-2 border">
            <img
              src={imageUrl}
              alt={title}
              className="object-cover w-full h-full"
            />
            <div className="absolute md:hidden top-0 bottom-0 left-0 right-0 bg-[linear-gradient(to_bottom,transparent_0%,black_100%)]" />
          </Box>
          <div className="absolute bottom-0 p-4 md:p-0 md:static">
            {tags.length > 0 && (
              <div className="flex gap-2 mb-2">
                {tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
            )}
            <Title className="text-gray-contrast md:text-[unset] my-1">
              {title}
            </Title>
            <Caption className="text-gray-contrast md:text-[unset]">
              {date}
            </Caption>
            <Text className="hidden md:block mt-4">{summary}</Text>
          </div>
        </div>
      </div>
    );
  }
);

PostItem.displayName = "PostItem";

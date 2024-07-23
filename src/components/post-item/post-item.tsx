import { Box } from "@radix-ui/themes";
import { Caption } from "../caption";
import { Flex } from "../flex";
import { Text } from "../text";

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

export const PostItem = ({
  title,
  summary,
  imageUrl,
  date,
  ...props
}: PostItemProps) => {
  return (
    <div {...props}>
      <Flex gap="4">
        <Box className="flex-shrink-0" height="256px" width="256px">
          <img
            src={imageUrl}
            alt={title}
            width="100%"
            height="100%"
            className="object-cover w-full h-full rounded-lg border"
          />
        </Box>
        <div>
          <Caption>{date}</Caption>
          <Text size="5" weight="bold" my="4">
            {title}
          </Text>
          <Text>{summary}</Text>
        </div>
      </Flex>
    </div>
  );
};

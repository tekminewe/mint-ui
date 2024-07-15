import { Heading } from "@radix-ui/themes";
import type { HeadingProps } from "@radix-ui/themes";

type TitleProps = Omit<HeadingProps, "size">;

export const Title = ({ as = "h1", ...props }: TitleProps) => {
  return <Heading as={as} size="8" {...props} />;
};

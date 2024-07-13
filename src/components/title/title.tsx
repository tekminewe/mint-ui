import { Heading } from "@radix-ui/themes";
import type { HeadingProps } from "@radix-ui/themes";

type TitleProps = HeadingProps;

export const Title = ({ as = "h1", size = "8", ...props }: TitleProps) => {
  return <Heading as={as} size={size} {...props} />;
};

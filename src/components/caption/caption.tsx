import { Text } from "@radix-ui/themes";
import { TextProps } from "@radix-ui/themes";

export type CaptionProps = TextProps;

export const Caption = ({
  size = "2",
  color = "gray",
  ...props
}: CaptionProps) => {
  return <Text as={props.as ?? "span"} size={size} color={color} {...props} />;
};

import { Text } from "@radix-ui/themes";
import { TextProps } from "@radix-ui/themes";

export type CaptionProps = TextProps;

export const Caption = ({
  size = "2",
  color = "gray",
  ...props
}: CaptionProps) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return <Text {...props} as={props.as ?? "span"} size={size} color={color} />;
};

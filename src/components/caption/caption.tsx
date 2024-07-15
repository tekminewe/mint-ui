import { Text } from "@radix-ui/themes";
import type { TextProps } from "@radix-ui/themes";

export interface ICaptionProps extends Omit<TextProps, "size"> {}

export const Caption = ({ as = "span", ...props }: ICaptionProps) => {
  // TODO: Fix this type error
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return <Text as={as} size="2" color="gray" {...props} />;
};

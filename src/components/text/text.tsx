import { Text as RadixText, TextProps } from "@radix-ui/themes";
import { forwardRef } from "react";

export const Text = forwardRef<HTMLSpanElement, TextProps>((props, ref) => {
  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <RadixText ref={ref} {...props} as={props.as ?? "p"} />
  );
});

Text.displayName = "Text";

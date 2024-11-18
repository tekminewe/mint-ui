import { Heading as RadixHeading, TextProps } from "@radix-ui/themes";
import { forwardRef } from "react";

export const Heading = forwardRef<HTMLHeadingElement, TextProps>(
  (props, ref) => {
    return (
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      <RadixHeading ref={ref} {...props} as={props.as} />
    );
  }
);

Heading.displayName = "Heading";

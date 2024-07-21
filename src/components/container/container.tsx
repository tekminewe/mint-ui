import {
  ContainerProps as RadixContainerProps,
  Container as RadixContainer,
} from "@radix-ui/themes";
import { forwardRef } from "react";

export interface ContainerProps extends RadixContainerProps {}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  (props, ref) => {
    return <RadixContainer {...props} ref={ref} />;
  }
);

Container.displayName = "Container";

import { ContainerProps, Container as RadixContainer } from "@radix-ui/themes";
import { forwardRef } from "react";

export interface IContainerProps extends ContainerProps {}

export const Container = forwardRef<HTMLDivElement, IContainerProps>(
  (props, ref) => {
    return <RadixContainer {...props} ref={ref} />;
  }
);

Container.displayName = "Container";

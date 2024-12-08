import { HTMLAttributes } from "react";
import { Slot } from "@radix-ui/themes";
import { cn } from "../utils";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
}

export const Card = (props: CardProps) => {
  const Comp = props.asChild ? Slot : "div";
  return <Comp {...props} className={cn("card", props.className)} />;
};

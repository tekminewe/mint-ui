import { CardProps, Card as RadixCard } from "@radix-ui/themes";
import { cn } from "../utils";

export const Card = (props: CardProps) => {
  return <RadixCard {...props} className={cn("shadow-3", props.className)} />;
};

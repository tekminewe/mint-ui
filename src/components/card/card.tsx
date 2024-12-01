import { HTMLAttributes } from "react";
import { cn } from "../utils";

export const Card = (props: HTMLAttributes<HTMLDivElement>) => {
  return <div {...props} className={cn("card", props.className)} />;
};

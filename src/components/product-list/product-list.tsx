import { Grid } from "../grid";
import { GridProps } from "@radix-ui/themes";
import { cn } from "../utils";

export type ProductListProps = GridProps;

export const ProductList = ({
  columns = {
    initial: "1",
    sm: "2",
    md: "3",
    lg: "4",
  },
  gap = "4",
  ...props
}: ProductListProps) => {
  return (
    <Grid
      gap={gap}
      columns={columns}
      className={cn("justify-items-center grid-flow-row", props.className)}
      {...props}
    />
  );
};

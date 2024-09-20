import { BoxProps } from "@radix-ui/themes";
import { Box } from "../box";

export type NavbarBrandProps = BoxProps;

export const NavbarBrand = ({ ml, ...props }: BoxProps) => {
  return (
    <Box
      asChild
      ml={
        ml ?? {
          initial: "4",
          xl: "0",
        }
      }
      {...props}
    />
  );
};

import { Drawer as Vaul } from "vaul";
import { cn } from "../utils";
import { Flex } from "../flex";

export interface DrawerTitleProps {
  children?: React.ReactNode;
}

export const DrawerTitle = ({ children }: DrawerTitleProps) => {
  return (
    <Flex mb="4" align="center" gap="1" asChild>
      <Vaul.Title
        className={cn("font-semibold", {
          hidden: !children,
        })}
      >
        {children}
      </Vaul.Title>
    </Flex>
  );
};

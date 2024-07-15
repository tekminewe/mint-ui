import { HTMLAttributes, ReactNode } from "react";
import { Drawer } from "../drawer";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { cn } from "../utils";
import { Flex } from "../flex";

export interface INavbarProps extends HTMLAttributes<HTMLDivElement> {
  drawerContent?: ReactNode;
}

export const Navbar = ({
  children,
  className,
  drawerContent,
  ...props
}: INavbarProps) => {
  return (
    <Flex
      align="center"
      px="4"
      width="100%"
      height="4rem"
      {...props}
      className={cn(className, "border-b")}
    >
      <Drawer.Root>
        <Drawer.Trigger className="xl:hidden">
          <HamburgerMenuIcon width={28} height={28} />
        </Drawer.Trigger>
        <Drawer className="bg-blue-950 text-neutral-300 fixed top-0 bottom-0 h-screen w-80">
          {drawerContent}
        </Drawer>
      </Drawer.Root>
      {children}
    </Flex>
  );
};

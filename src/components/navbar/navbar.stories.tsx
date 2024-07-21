import { Meta, StoryObj } from "@storybook/react";
import { Navbar } from "./navbar";
import { Box } from "../box";
import { NavigationMenu } from "../navigation-menu/navigation-menu";
import { NavigationMenuVertical } from "../navigation-menu-vertical";

const meta = {
  title: "Navbar",
  component: Navbar,
  tags: ["autodocs"],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    drawerContent: (
      <NavigationMenuVertical>
        <NavigationMenuVertical.Item href="/">Home</NavigationMenuVertical.Item>
        <NavigationMenuVertical.Item href="/blog">
          Blog
        </NavigationMenuVertical.Item>
        <NavigationMenuVertical.Item href="/about">
          About
        </NavigationMenuVertical.Item>
      </NavigationMenuVertical>
    ),
    children: (
      <>
        <Box
          asChild
          ml={{
            initial: "2",
            xl: "0",
          }}
        >
          <img
            src="../assets/logo.webp"
            alt="tekminewe.com"
            width={150}
            height={150}
          />
        </Box>
        <NavigationMenu>
          <NavigationMenu.Item href="/">Home</NavigationMenu.Item>
          <NavigationMenu.Item href="/blog">Blog</NavigationMenu.Item>
          <NavigationMenu.Item href="/about">About</NavigationMenu.Item>
        </NavigationMenu>
      </>
    ),
  },
};

import { Meta, StoryObj } from "@storybook/react";
import { Navbar } from "./navbar";
import { Box } from "../box";
import { NavigationMenu } from "../navigation-menu/navigation-menu";
import { MobileNavigationMenu } from "../mobile-navigation-menu";

const meta = {
  title: "Common / Navbar",
  component: Navbar,
  tags: ["autodocs"],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: (
      <>
        <MobileNavigationMenu>
          <MobileNavigationMenu.Item href="/">Home</MobileNavigationMenu.Item>
          <MobileNavigationMenu.Item href="/blog">
            Blog
          </MobileNavigationMenu.Item>
          <MobileNavigationMenu.Item href="/about">
            About
          </MobileNavigationMenu.Item>
        </MobileNavigationMenu>
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

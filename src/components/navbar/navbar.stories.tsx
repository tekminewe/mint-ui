import { Meta, StoryObj } from "@storybook/react";
import { Navbar } from "./navbar";
import { NavigationMenu } from "../navigation-menu/navigation-menu";
import { NavigationMenuItem } from "../navigation-menu/item";
import { MobileNavigationMenu } from "../mobile-navigation-menu";
import { MobileNavigationMenuItem } from "../mobile-navigation-menu/item";
import { NavbarBrand } from "./brand";

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
          <MobileNavigationMenuItem href="/">Home</MobileNavigationMenuItem>
          <MobileNavigationMenuItem href="/blog">Blog</MobileNavigationMenuItem>
          <MobileNavigationMenuItem href="/about">
            About
          </MobileNavigationMenuItem>
        </MobileNavigationMenu>
        <NavbarBrand>
          <img
            src="../assets/logo.webp"
            alt="tekminewe.com"
            width={150}
            height={150}
          />
        </NavbarBrand>
        <NavigationMenu>
          <NavigationMenuItem href="/">Home</NavigationMenuItem>
          <NavigationMenuItem href="/blog">Blog</NavigationMenuItem>
          <NavigationMenuItem href="/about">About</NavigationMenuItem>
        </NavigationMenu>
      </>
    ),
  },
};

import { Meta, StoryObj } from "@storybook/react";
import {
  LuBuilding,
  LuChartLine,
  LuCog,
  LuTarget,
  LuUser,
} from "react-icons/lu";
import { AdminLayout } from "./admin-layout";
import {
  Sidebar,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuGroup,
  SidebarMenuItem,
} from "../sidebar";
import { AdminNavbar } from "../admin-navbar/admin-navbar";
import { NavigationMenu } from "../navigation-menu";
import { Avatar } from "../avatar";
import { AdminContent } from "../admin-content";

const meta = {
  title: "Admin / Layout",
  component: AdminLayout,
  tags: ["autodocs"],
  render: () => {
    return (
      <AdminLayout>
        <Sidebar>
          <SidebarHeader>
            <img src="./assets/logo.webp" alt="Logo" />
            MintUI
          </SidebarHeader>
          <SidebarMenu>
            <SidebarMenuGroup>
              <SidebarMenuItem selected>
                <LuChartLine />
                Dashboard
              </SidebarMenuItem>
              <SidebarMenuItem>
                <LuUser />
                Users
              </SidebarMenuItem>
              <SidebarMenuItem>
                <LuTarget />
                Campaign
              </SidebarMenuItem>
            </SidebarMenuGroup>
            <SidebarMenuGroup title="Settings">
              <SidebarMenuItem>
                <LuBuilding />
                Company
              </SidebarMenuItem>
              <SidebarMenuItem>
                <LuCog />
                Site
              </SidebarMenuItem>
            </SidebarMenuGroup>
          </SidebarMenu>
        </Sidebar>
        <AdminNavbar>
          <NavigationMenu>
            <Avatar
              src="../assets/avatar.webp"
              fallback="../assets/avatar.webp"
              alt="John Doe"
            />
          </NavigationMenu>
        </AdminNavbar>
        <AdminContent>
          <h1>Dashboard</h1>
        </AdminContent>
      </AdminLayout>
    );
  },
} satisfies Meta<typeof AdminLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

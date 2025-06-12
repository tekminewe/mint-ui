import { Meta, StoryObj } from "@storybook/react-vite";
import { Sidebar } from "./sidebar";
import { SidebarHeader } from "./header";
import { SidebarMenu } from "./menu";
import { SidebarMenuGroup } from "./menu-group";
import { SidebarMenuItem } from "./menu-item";
import {
  LuBuilding,
  LuChartLine,
  LuCog,
  LuTarget,
  LuUser,
} from "react-icons/lu";

const meta = {
  title: "Admin / Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
  render: () => {
    return (
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
    );
  },
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

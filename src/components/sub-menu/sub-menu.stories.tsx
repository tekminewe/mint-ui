import { Meta, StoryObj } from "@storybook/react-vite";
import { SubMenu } from "./sub-menu";
import { SubMenuItem } from "./sub-menu-item";
import { LuAward, LuLayoutDashboard, LuSettings } from "react-icons/lu";

const meta = {
  title: "Navigation / SubMenu",
  tags: ["autodocs"],
  render: () => {
    return (
      <SubMenu>
        <SubMenuItem selected>
          <LuLayoutDashboard size={20} />
          Dashboard
        </SubMenuItem>
        <SubMenuItem>
          <LuAward size={20} />
          My Rewards
        </SubMenuItem>
        <SubMenuItem>
          <LuSettings size={20} />
          Settings
        </SubMenuItem>
      </SubMenu>
    );
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

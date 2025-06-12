import { Meta, StoryObj } from "@storybook/react-vite";
import { IconButton } from "./icon-button";
import { LuShare } from "react-icons/lu";

const meta = {
  title: "Common / IconButton",
  component: IconButton,
  tags: ["autodocs"],
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <LuShare />,
  },
};

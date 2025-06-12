import { Meta, StoryObj } from "@storybook/react-vite";
import { Switch } from "./switch";

const meta = {
  title: "Form / Switch",
  component: Switch,
  tags: ["autodocs"],
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Active",
    description: "Switch to activate awesomeness",
  },
};

export const Active: Story = {
  args: {
    ...Default.args,
    checked: true,
  },
};

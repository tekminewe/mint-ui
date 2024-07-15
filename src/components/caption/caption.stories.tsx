import { Meta, StoryObj } from "@storybook/react";
import { Caption } from "./caption";

const meta = {
  title: "Typography / Caption",
  component: Caption,
  tags: ["autodocs"],
} satisfies Meta<typeof Caption>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "This is a caption",
  },
};

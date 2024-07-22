import { Meta, StoryObj } from "@storybook/react";
import { PostItem } from "./post-item";

const meta = {
  title: "Blog / PostItem",
  component: PostItem,
  tags: ["autodocs"],
} satisfies Meta<typeof PostItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "10 benefits of using MintUI",
    summary:
      "MintUI is a great library for building user interfaces. Here are 10 benefits of using it. MintUI is a great library for building user interfaces. Here are 10 benefits of using it.",
    imageUrl: "https://via.placeholder.com/256",
    date: "July 13, 2021",
  },
};

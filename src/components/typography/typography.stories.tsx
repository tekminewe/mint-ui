import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Typography",
  tags: ["autodocs"],
  render: () => {
    return (
      <div>
        <h1 className="section-title">Section Title</h1>
        <span className="caption">Caption</span>
      </div>
    );
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

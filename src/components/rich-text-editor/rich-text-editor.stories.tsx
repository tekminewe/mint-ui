import { Meta, StoryObj } from "@storybook/react";
import { RichTextEditor } from "./rich-text-editor";

const meta = {
  title: "Smart Component / Rich Text Editor",
  component: RichTextEditor,
  tags: ["autodocs"],
} satisfies Meta<typeof RichTextEditor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

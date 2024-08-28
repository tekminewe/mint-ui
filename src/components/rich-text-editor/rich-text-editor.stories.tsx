import { Meta, StoryObj } from "@storybook/react";
import { RichTextEditor } from "./rich-text-editor.v2";

const meta = {
  title: "Form / Rich Text Editor",
  component: RichTextEditor,
  tags: ["autodocs"],
} satisfies Meta<typeof RichTextEditor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    onImageUpload: async (file: File) => {
      return { src: URL.createObjectURL(file) };
    },
    onChange: ({ content }) => console.log(content),
  },
};

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
    content: {
      type: "doc",
      content: [
        {
          type: "heading",
          attrs: {
            level: 2,
          },
          content: [
            {
              type: "text",
              text: "This is Heading 1",
            },
          ],
        },
        {
          type: "heading",
          attrs: {
            level: 3,
          },
          content: [
            {
              type: "text",
              text: "This is heading 2",
            },
          ],
        },
        {
          type: "heading",
          attrs: {
            level: 4,
          },
          content: [
            {
              type: "text",
              text: "This is heading 3",
            },
          ],
        },
        {
          type: "paragraph",
          content: [
            {
              type: "text",
              text: "Lorem ipsum dolor sit amet, ",
            },
            {
              type: "text",
              marks: [
                {
                  type: "bold",
                },
              ],
              text: "consectetur",
            },
            {
              type: "text",
              text: " adipiscing elit. Vestibulum cursus fermentum justo eget congue. Fusce lorem elit, pharetra at mauris sed, tempus pellentesque odio. Etiam ullamcorper enim vitae nulla egestas faucibus. Nam lacinia, magna sed pharetra condimentum, nunc tellus tincidunt libero, quis venenatis tortor sem quis quam. Phasellus vitae risus vitae arcu ullamcorper tincidunt. Suspendisse efficitur ullamcorper lectus, quis imperdiet sem volutpat nec. Donec blandit, dolor at semper ultrices, nunc nisi venenatis lorem, et aliquet justo risus id leo. Integer dictum lorem in metus interdum facilisis. In tristique sed leo vel tincidunt.",
            },
          ],
        },
        {
          type: "codeBlock",
          attrs: {
            language: "jsx",
          },
          content: [
            {
              type: "text",
              text: "import React from 'react';\n\nexport const RichTextEditor = () => {\n  return (\n    <div>This is a rich text editor</div>\n  );\n};\n\nexport default RichTextEditor;",
            },
          ],
        },
        {
          type: "figure",
          attrs: {
            src: "blob:http://localhost:6006/b853d58b-7308-40dd-a2ca-16387eb2cc2e",
            alt: null,
            title: null,
          },
        },
      ],
    },
    onImageUpload: async (file: File) => {
      return { src: URL.createObjectURL(file) };
    },
    onChange: ({ content }) => console.log(content),
  },
};

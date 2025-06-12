import { Meta, StoryObj } from "@storybook/react-vite";
import { ImageInput } from "./image-input";

const meta = {
  title: "Form / Image Input",
  component: ImageInput,
  tags: ["autodocs"],
} satisfies Meta<typeof ImageInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Featured Image",
    value: "https://media.tekminewe.com/bastion-host.webp",
    description: "Image must be less than 5MB",
  },
};

export const Error: Story = {
  args: {
    label: "Featured Image",
    error: "This field is required",
  },
};

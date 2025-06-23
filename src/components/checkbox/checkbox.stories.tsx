import type { Meta, StoryObj } from "@storybook/react-vite";
import { Checkbox } from "./checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Form / Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    checked: {
      control: "boolean",
      description: "Whether the checkbox is checked",
    },
    label: {
      control: "text",
      description: "The label for the checkbox",
    },
    disabled: {
      control: "boolean",
      description: "Whether the checkbox is disabled",
    },
  },
  args: {
    label: "Accept terms and conditions",
  },
  decorators: [
    (Story) => (
      <div className="p-4 max-w-md">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Checked: Story = {
  args: {
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const CheckedAndDisabled: Story = {
  args: {
    checked: true,
    disabled: true,
  },
};

export const DarkMode: Story = {
  args: {},
  parameters: {
    backgrounds: { default: "dark" },
    themes: { themeOverride: "dark" },
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="grid gap-6">
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Light Mode</h3>
        <div className="space-y-2">
          <Checkbox label="Unchecked" />
          <Checkbox label="Checked" checked />
          <Checkbox label="Disabled" disabled />
          <Checkbox label="Checked and Disabled" checked disabled />
        </div>
      </div>

      <div className="space-y-4 p-4 bg-gray-900 text-white rounded-lg">
        <h3 className="text-lg font-medium">Dark Mode</h3>
        <div className="space-y-2">
          <Checkbox label="Unchecked" />
          <Checkbox label="Checked" checked />
          <Checkbox label="Disabled" disabled />
          <Checkbox label="Checked and Disabled" checked disabled />
        </div>
      </div>
    </div>
  ),
};

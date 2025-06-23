import type { Meta, StoryObj } from "@storybook/react-vite";
import { Callout } from "./callout";

const meta: Meta<typeof Callout> = {
  title: "Feedback/Callout",
  component: Callout,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Callout>;

export const Info: Story = {
  args: {
    type: "info",
    children: "This is an informational callout with important details.",
  },
};

export const Warning: Story = {
  args: {
    type: "warning",
    children: "This is a warning callout. Proceed with caution.",
  },
};

export const Error: Story = {
  args: {
    type: "error",
    children: "This is an error callout. Something went wrong.",
  },
};

export const Success: Story = {
  args: {
    type: "success",
    children: "This is a success callout. Operation completed successfully.",
  },
};

export const WithCustomClass: Story = {
  args: {
    type: "info",
    className: "border-2",
    children: "This is a callout with custom class (thicker border).",
  },
};

export const DarkMode: Story = {
  parameters: {
    backgrounds: { default: "dark" },
  },
  render: () => (
    <div className="flex flex-col gap-4 dark p-4 bg-neutral-900 max-w-md">
      <Callout type="info">
        This is an informational callout in dark mode.
      </Callout>
      <Callout type="warning">This is a warning callout in dark mode.</Callout>
      <Callout type="error">This is an error callout in dark mode.</Callout>
      <Callout type="success">This is a success callout in dark mode.</Callout>
    </div>
  ),
};

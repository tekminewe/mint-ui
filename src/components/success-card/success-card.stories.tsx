import type { Meta, StoryObj } from "@storybook/react-vite";
import { SuccessCard } from "./success-card";

const meta: Meta<typeof SuccessCard> = {
  title: "Feedback/SuccessCard",
  component: SuccessCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SuccessCard>;

export const Default: Story = {
  args: {
    title: "Success!",
    message: "Your operation was completed successfully.",
  },
};

export const WithCustomClass: Story = {
  args: {
    title: "Custom Style",
    message: "This card has custom styling applied.",
    className:
      "border-green-300 dark:border-green-700 bg-green-50 dark:bg-green-950",
  },
};

export const DarkMode: Story = {
  parameters: {
    backgrounds: { default: "dark" },
  },
  render: () => (
    <div className="dark p-4 bg-neutral-900">
      <SuccessCard
        title="Dark Mode Success"
        message="Your operation was completed successfully in dark mode."
      />
    </div>
  ),
};

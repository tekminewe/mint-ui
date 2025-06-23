import type { Meta, StoryObj } from "@storybook/react-vite";
import { InfoCard } from "./info-card";

const meta: Meta<typeof InfoCard> = {
  title: "Feedback/InfoCard",
  component: InfoCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof InfoCard>;

export const Default: Story = {
  args: {
    title: "Information",
    message:
      "This is an informational message that provides guidance to the user.",
  },
};

export const WithCustomClass: Story = {
  args: {
    title: "Custom Style",
    message: "This card has custom styling applied.",
    className:
      "border-blue-300 dark:border-blue-700 bg-blue-50 dark:bg-blue-950",
  },
};

export const DarkMode: Story = {
  parameters: {
    backgrounds: { default: "dark" },
  },
  render: () => (
    <div className="dark p-4 bg-neutral-900">
      <InfoCard
        title="Dark Mode Information"
        message="This is an info card displayed in dark mode."
      />
    </div>
  ),
};

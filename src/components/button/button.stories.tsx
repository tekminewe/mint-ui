import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["solid", "soft", "outline", "ghost", "link"],
      description: "The visual style of the button",
    },
    color: {
      control: "select",
      options: ["primary", "neutral", "success", "error", "warning", "info"],
      description: "The color scheme of the button",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "The size of the button",
    },
    loading: {
      control: "boolean",
      description: "Whether the button is in a loading state",
    },
    disabled: {
      control: "boolean",
      description: "Whether the button is disabled",
    },
    children: {
      control: "text",
      description: "The content of the button",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// Base Button
export const Default: Story = {
  args: {
    children: "Button",
    variant: "solid",
    color: "primary",
    size: "md",
  },
};

// Variants
export const Solid: Story = {
  args: {
    children: "Solid Button",
    variant: "solid",
  },
};

export const Soft: Story = {
  args: {
    children: "Soft Button",
    variant: "soft",
  },
};

export const Outline: Story = {
  args: {
    children: "Outline Button",
    variant: "outline",
  },
};

export const Ghost: Story = {
  args: {
    children: "Ghost Button",
    variant: "ghost",
  },
};

export const Link: Story = {
  args: {
    children: "Link Button",
    variant: "link",
  },
};

// Colors
export const Primary: Story = {
  args: {
    children: "Primary Button",
    color: "primary",
  },
};

export const Neutral: Story = {
  args: {
    children: "Neutral Button",
    color: "neutral",
  },
};

export const Success: Story = {
  args: {
    children: "Success Button",
    color: "success",
  },
};

export const Error: Story = {
  args: {
    children: "Error Button",
    color: "error",
  },
};

export const Warning: Story = {
  args: {
    children: "Warning Button",
    color: "warning",
  },
};

export const Info: Story = {
  args: {
    children: "Info Button",
    color: "info",
  },
};

// Sizes
export const Small: Story = {
  args: {
    children: "Small Button",
    size: "sm",
  },
};

export const Medium: Story = {
  args: {
    children: "Medium Button",
    size: "md",
  },
};

export const Large: Story = {
  args: {
    children: "Large Button",
    size: "lg",
  },
};

// States
export const Loading: Story = {
  args: {
    children: "Loading Button",
    loading: true,
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled Button",
    disabled: true,
  },
};

// All Variants and Colors Grid
export const AllVariantsAndColors: Story = {
  render: () => (
    <div className="grid grid-cols-6 gap-4">
      <div></div>
      <div className="font-bold text-center">Primary</div>
      <div className="font-bold text-center">Neutral</div>
      <div className="font-bold text-center">Success</div>
      <div className="font-bold text-center">Error</div>
      <div className="font-bold text-center">Warning</div>
      <div className="font-bold text-center">Info</div>

      <div className="font-bold">Solid</div>
      <Button variant="solid" color="primary">
        Primary
      </Button>
      <Button variant="solid" color="neutral">
        Neutral
      </Button>
      <Button variant="solid" color="success">
        Success
      </Button>
      <Button variant="solid" color="error">
        Error
      </Button>
      <Button variant="solid" color="warning">
        Warning
      </Button>
      <Button variant="solid" color="info">
        Info
      </Button>

      <div className="font-bold">Soft</div>
      <Button variant="soft" color="primary">
        Primary
      </Button>
      <Button variant="soft" color="neutral">
        Neutral
      </Button>
      <Button variant="soft" color="success">
        Success
      </Button>
      <Button variant="soft" color="error">
        Error
      </Button>
      <Button variant="soft" color="warning">
        Warning
      </Button>
      <Button variant="soft" color="info">
        Info
      </Button>

      <div className="font-bold">Outline</div>
      <Button variant="outline" color="primary">
        Primary
      </Button>
      <Button variant="outline" color="neutral">
        Neutral
      </Button>
      <Button variant="outline" color="success">
        Success
      </Button>
      <Button variant="outline" color="error">
        Error
      </Button>
      <Button variant="outline" color="warning">
        Warning
      </Button>
      <Button variant="outline" color="info">
        Info
      </Button>

      <div className="font-bold">Ghost</div>
      <Button variant="ghost" color="primary">
        Primary
      </Button>
      <Button variant="ghost" color="neutral">
        Neutral
      </Button>
      <Button variant="ghost" color="success">
        Success
      </Button>
      <Button variant="ghost" color="error">
        Error
      </Button>
      <Button variant="ghost" color="warning">
        Warning
      </Button>
      <Button variant="ghost" color="info">
        Info
      </Button>

      <div className="font-bold">Link</div>
      <Button variant="link" color="primary">
        Primary
      </Button>
      <Button variant="link" color="neutral">
        Neutral
      </Button>
      <Button variant="link" color="success">
        Success
      </Button>
      <Button variant="link" color="error">
        Error
      </Button>
      <Button variant="link" color="warning">
        Warning
      </Button>
      <Button variant="link" color="info">
        Info
      </Button>
    </div>
  ),
};

// With Icon Example
export const WithIcon: Story = {
  render: () => (
    <Button>
      <svg
        className="w-4 h-4 mr-2"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
        />
      </svg>
      Upload
    </Button>
  ),
};

// Accessibility Example
export const AccessibilityFocus: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <p className="mb-2 font-medium">Tab to focus buttons below:</p>
        <div className="flex gap-2">
          <Button>Default Focus</Button>
          <Button variant="outline">Outline Focus</Button>
          <Button variant="ghost">Ghost Focus</Button>
        </div>
      </div>
      <div>
        <p className="mb-2 font-medium">High contrast examples:</p>
        <div className="flex gap-2 p-4 bg-primary-900 text-white rounded-2">
          <Button variant="solid" color="primary">
            Solid
          </Button>
          <Button variant="soft" color="primary">
            Soft
          </Button>
          <Button variant="outline" color="primary">
            Outline
          </Button>
          <Button variant="ghost" color="primary">
            Ghost
          </Button>
          <Button variant="link" color="primary">
            Link
          </Button>
        </div>
      </div>
    </div>
  ),
};

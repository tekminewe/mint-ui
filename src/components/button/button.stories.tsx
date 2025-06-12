import type { Meta, StoryObj } from "@storybook/react-vite";
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

// All Variants and Colors Grid
export const AllVariantsAndColors: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="grid grid-cols-7 gap-4">
        <div></div>
        <div className="font-bold text-center">Info</div>
        <div className="font-bold text-center">Primary</div>
        <div className="font-bold text-center">Neutral</div>
        <div className="font-bold text-center">Success</div>
        <div className="font-bold text-center">Error</div>
        <div className="font-bold text-center">Warning</div>

        <div className="font-bold">Solid</div>
        <Button variant="solid" color="info">
          Info
        </Button>
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

        <div className="font-bold">Soft</div>
        <Button variant="soft" color="info">
          Info
        </Button>
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

        <div className="font-bold">Outline</div>
        <Button variant="outline" color="info">
          Info
        </Button>
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

        <div className="font-bold">Ghost</div>
        <Button variant="ghost" color="info">
          Info
        </Button>
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

        <div className="font-bold">Link</div>
        <Button variant="link" color="info">
          Info
        </Button>
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
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">States</h3>
        
        <div className="grid grid-cols-7 gap-4">
          <div></div>
          <div className="font-bold text-center">Info</div>
          <div className="font-bold text-center">Primary</div>
          <div className="font-bold text-center">Neutral</div>
          <div className="font-bold text-center">Success</div>
          <div className="font-bold text-center">Error</div>
          <div className="font-bold text-center">Warning</div>

          <div className="font-bold">Loading</div>
          <Button variant="solid" color="info" loading>
            Info
          </Button>
          <Button variant="solid" color="primary" loading>
            Primary
          </Button>
          <Button variant="solid" color="neutral" loading>
            Neutral
          </Button>
          <Button variant="solid" color="success" loading>
            Success
          </Button>
          <Button variant="solid" color="error" loading>
            Error
          </Button>
          <Button variant="solid" color="warning" loading>
            Warning
          </Button>

          <div className="font-bold">Disabled</div>
          <Button variant="solid" color="info" disabled>
            Info
          </Button>
          <Button variant="solid" color="primary" disabled>
            Primary
          </Button>
          <Button variant="solid" color="neutral" disabled>
            Neutral
          </Button>
          <Button variant="solid" color="success" disabled>
            Success
          </Button>
          <Button variant="solid" color="error" disabled>
            Error
          </Button>
          <Button variant="solid" color="warning" disabled>
            Warning
          </Button>
        </div>
      </div>
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

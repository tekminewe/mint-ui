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

// Combined Light and Dark Theme Comparison
export const LightAndDarkComparison: Story = {
  render: () => (
    <div className="space-y-8">
      {/* Light Theme Section */}
      <div className="p-8 bg-white border rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-neutral-900">
          Light Theme
        </h2>
        <div className="grid grid-cols-7 gap-4">
          <div className="font-bold text-neutral-700">Variant</div>
          <div className="font-bold text-center text-neutral-700">Primary</div>
          <div className="font-bold text-center text-neutral-700">Neutral</div>
          <div className="font-bold text-center text-neutral-700">Success</div>
          <div className="font-bold text-center text-neutral-700">Error</div>
          <div className="font-bold text-center text-neutral-700">Warning</div>
          <div className="font-bold text-center text-neutral-700">Info</div>

          <div className="font-bold text-neutral-700">Solid</div>
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

          <div className="font-bold text-neutral-700">Outline</div>
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

          <div className="font-bold text-neutral-700">Soft</div>
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

          <div className="font-bold text-neutral-700">Ghost</div>
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

          <div className="font-bold text-neutral-700">Link</div>
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
      </div>

      {/* Dark Theme Section */}
      <div className="dark">
        <div className="p-8 bg-neutral-100 border border-neutral-700 rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-neutral-100">
            Dark Theme
          </h2>
          <div className="grid grid-cols-7 gap-4">
            <div className="font-bold text-neutral-300">Variant</div>
            <div className="font-bold text-center text-neutral-300">
              Primary
            </div>
            <div className="font-bold text-center text-neutral-300">
              Neutral
            </div>
            <div className="font-bold text-center text-neutral-300">
              Success
            </div>
            <div className="font-bold text-center text-neutral-300">Error</div>
            <div className="font-bold text-center text-neutral-300">
              Warning
            </div>
            <div className="font-bold text-center text-neutral-300">Info</div>

            <div className="font-bold text-neutral-300">Solid</div>
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

            <div className="font-bold text-neutral-300">Outline</div>
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

            <div className="font-bold text-neutral-300">Ghost</div>
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

            <div className="font-bold text-neutral-300">Soft</div>
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

            <div className="font-bold text-neutral-300">Link</div>
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
        </div>
      </div>
    </div>
  ),
};

// All Variants in Disabled State
export const AllVariantsDisabled: Story = {
  render: () => (
    <div className="space-y-8">
      {/* Light Theme Section */}
      <div className="p-8 bg-white border rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-neutral-900">
          Disabled State - Light Theme
        </h2>
        <div className="grid grid-cols-7 gap-4">
          <div className="font-bold text-neutral-700">Variant</div>
          <div className="font-bold text-center text-neutral-700">Primary</div>
          <div className="font-bold text-center text-neutral-700">Neutral</div>
          <div className="font-bold text-center text-neutral-700">Success</div>
          <div className="font-bold text-center text-neutral-700">Error</div>
          <div className="font-bold text-center text-neutral-700">Warning</div>
          <div className="font-bold text-center text-neutral-700">Info</div>

          <div className="font-bold text-neutral-700">Solid</div>
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
          <Button variant="solid" color="info" disabled>
            Info
          </Button>

          <div className="font-bold text-neutral-700">Outline</div>
          <Button variant="outline" color="primary" disabled>
            Primary
          </Button>
          <Button variant="outline" color="neutral" disabled>
            Neutral
          </Button>
          <Button variant="outline" color="success" disabled>
            Success
          </Button>
          <Button variant="outline" color="error" disabled>
            Error
          </Button>
          <Button variant="outline" color="warning" disabled>
            Warning
          </Button>
          <Button variant="outline" color="info" disabled>
            Info
          </Button>

          <div className="font-bold text-neutral-700">Soft</div>
          <Button variant="soft" color="primary" disabled>
            Primary
          </Button>
          <Button variant="soft" color="neutral" disabled>
            Neutral
          </Button>
          <Button variant="soft" color="success" disabled>
            Success
          </Button>
          <Button variant="soft" color="error" disabled>
            Error
          </Button>
          <Button variant="soft" color="warning" disabled>
            Warning
          </Button>
          <Button variant="soft" color="info" disabled>
            Info
          </Button>

          <div className="font-bold text-neutral-700">Ghost</div>
          <Button variant="ghost" color="primary" disabled>
            Primary
          </Button>
          <Button variant="ghost" color="neutral" disabled>
            Neutral
          </Button>
          <Button variant="ghost" color="success" disabled>
            Success
          </Button>
          <Button variant="ghost" color="error" disabled>
            Error
          </Button>
          <Button variant="ghost" color="warning" disabled>
            Warning
          </Button>
          <Button variant="ghost" color="info" disabled>
            Info
          </Button>

          <div className="font-bold text-neutral-700">Link</div>
          <Button variant="link" color="primary" disabled>
            Primary
          </Button>
          <Button variant="link" color="neutral" disabled>
            Neutral
          </Button>
          <Button variant="link" color="success" disabled>
            Success
          </Button>
          <Button variant="link" color="error" disabled>
            Error
          </Button>
          <Button variant="link" color="warning" disabled>
            Warning
          </Button>
          <Button variant="link" color="info" disabled>
            Info
          </Button>
        </div>
      </div>

      {/* Dark Theme Section */}
      <div className="dark">
        <div className="p-8 bg-neutral-100 border border-neutral-700 rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-neutral-100">
            Disabled State - Dark Theme
          </h2>
          <div className="grid grid-cols-7 gap-4">
            <div className="font-bold text-neutral-300">Variant</div>
            <div className="font-bold text-center text-neutral-300">
              Primary
            </div>
            <div className="font-bold text-center text-neutral-300">
              Neutral
            </div>
            <div className="font-bold text-center text-neutral-300">
              Success
            </div>
            <div className="font-bold text-center text-neutral-300">Error</div>
            <div className="font-bold text-center text-neutral-300">
              Warning
            </div>
            <div className="font-bold text-center text-neutral-300">Info</div>

            <div className="font-bold text-neutral-300">Solid</div>
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
            <Button variant="solid" color="info" disabled>
              Info
            </Button>

            <div className="font-bold text-neutral-300">Outline</div>
            <Button variant="outline" color="primary" disabled>
              Primary
            </Button>
            <Button variant="outline" color="neutral" disabled>
              Neutral
            </Button>
            <Button variant="outline" color="success" disabled>
              Success
            </Button>
            <Button variant="outline" color="error" disabled>
              Error
            </Button>
            <Button variant="outline" color="warning" disabled>
              Warning
            </Button>
            <Button variant="outline" color="info" disabled>
              Info
            </Button>

            <div className="font-bold text-neutral-300">Soft</div>
            <Button variant="soft" color="primary" disabled>
              Primary
            </Button>
            <Button variant="soft" color="neutral" disabled>
              Neutral
            </Button>
            <Button variant="soft" color="success" disabled>
              Success
            </Button>
            <Button variant="soft" color="error" disabled>
              Error
            </Button>
            <Button variant="soft" color="warning" disabled>
              Warning
            </Button>
            <Button variant="soft" color="info" disabled>
              Info
            </Button>

            <div className="font-bold text-neutral-300">Ghost</div>
            <Button variant="ghost" color="primary" disabled>
              Primary
            </Button>
            <Button variant="ghost" color="neutral" disabled>
              Neutral
            </Button>
            <Button variant="ghost" color="success" disabled>
              Success
            </Button>
            <Button variant="ghost" color="error" disabled>
              Error
            </Button>
            <Button variant="ghost" color="warning" disabled>
              Warning
            </Button>
            <Button variant="ghost" color="info" disabled>
              Info
            </Button>

            <div className="font-bold text-neutral-300">Link</div>
            <Button variant="link" color="primary" disabled>
              Primary
            </Button>
            <Button variant="link" color="neutral" disabled>
              Neutral
            </Button>
            <Button variant="link" color="success" disabled>
              Success
            </Button>
            <Button variant="link" color="error" disabled>
              Error
            </Button>
            <Button variant="link" color="warning" disabled>
              Warning
            </Button>
            <Button variant="link" color="info" disabled>
              Info
            </Button>
          </div>
        </div>
      </div>
    </div>
  ),
};

// All Variants in Loading State
export const AllVariantsLoading: Story = {
  render: () => (
    <div className="space-y-8">
      {/* Light Theme Section */}
      <div className="p-8 bg-white border rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-neutral-900">
          Loading State - Light Theme
        </h2>
        <div className="grid grid-cols-7 gap-4">
          <div className="font-bold text-neutral-700">Variant</div>
          <div className="font-bold text-center text-neutral-700">Primary</div>
          <div className="font-bold text-center text-neutral-700">Neutral</div>
          <div className="font-bold text-center text-neutral-700">Success</div>
          <div className="font-bold text-center text-neutral-700">Error</div>
          <div className="font-bold text-center text-neutral-700">Warning</div>
          <div className="font-bold text-center text-neutral-700">Info</div>

          <div className="font-bold text-neutral-700">Solid</div>
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
          <Button variant="solid" color="info" loading>
            Info
          </Button>

          <div className="font-bold text-neutral-700">Outline</div>
          <Button variant="outline" color="primary" loading>
            Primary
          </Button>
          <Button variant="outline" color="neutral" loading>
            Neutral
          </Button>
          <Button variant="outline" color="success" loading>
            Success
          </Button>
          <Button variant="outline" color="error" loading>
            Error
          </Button>
          <Button variant="outline" color="warning" loading>
            Warning
          </Button>
          <Button variant="outline" color="info" loading>
            Info
          </Button>

          <div className="font-bold text-neutral-700">Soft</div>
          <Button variant="soft" color="primary" loading>
            Primary
          </Button>
          <Button variant="soft" color="neutral" loading>
            Neutral
          </Button>
          <Button variant="soft" color="success" loading>
            Success
          </Button>
          <Button variant="soft" color="error" loading>
            Error
          </Button>
          <Button variant="soft" color="warning" loading>
            Warning
          </Button>
          <Button variant="soft" color="info" loading>
            Info
          </Button>

          <div className="font-bold text-neutral-700">Ghost</div>
          <Button variant="ghost" color="primary" loading>
            Primary
          </Button>
          <Button variant="ghost" color="neutral" loading>
            Neutral
          </Button>
          <Button variant="ghost" color="success" loading>
            Success
          </Button>
          <Button variant="ghost" color="error" loading>
            Error
          </Button>
          <Button variant="ghost" color="warning" loading>
            Warning
          </Button>
          <Button variant="ghost" color="info" loading>
            Info
          </Button>

          <div className="font-bold text-neutral-700">Link</div>
          <Button variant="link" color="primary" loading>
            Primary
          </Button>
          <Button variant="link" color="neutral" loading>
            Neutral
          </Button>
          <Button variant="link" color="success" loading>
            Success
          </Button>
          <Button variant="link" color="error" loading>
            Error
          </Button>
          <Button variant="link" color="warning" loading>
            Warning
          </Button>
          <Button variant="link" color="info" loading>
            Info
          </Button>
        </div>
      </div>

      {/* Dark Theme Section */}
      <div className="dark">
        <div className="p-8 bg-neutral-100 border border-neutral-700 rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-neutral-100">
            Loading State - Dark Theme
          </h2>
          <div className="grid grid-cols-7 gap-4">
            <div className="font-bold text-neutral-300">Variant</div>
            <div className="font-bold text-center text-neutral-300">
              Primary
            </div>
            <div className="font-bold text-center text-neutral-300">
              Neutral
            </div>
            <div className="font-bold text-center text-neutral-300">
              Success
            </div>
            <div className="font-bold text-center text-neutral-300">Error</div>
            <div className="font-bold text-center text-neutral-300">
              Warning
            </div>
            <div className="font-bold text-center text-neutral-300">Info</div>

            <div className="font-bold text-neutral-300">Solid</div>
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
            <Button variant="solid" color="info" loading>
              Info
            </Button>

            <div className="font-bold text-neutral-300">Outline</div>
            <Button variant="outline" color="primary" loading>
              Primary
            </Button>
            <Button variant="outline" color="neutral" loading>
              Neutral
            </Button>
            <Button variant="outline" color="success" loading>
              Success
            </Button>
            <Button variant="outline" color="error" loading>
              Error
            </Button>
            <Button variant="outline" color="warning" loading>
              Warning
            </Button>
            <Button variant="outline" color="info" loading>
              Info
            </Button>

            <div className="font-bold text-neutral-300">Soft</div>
            <Button variant="soft" color="primary" loading>
              Primary
            </Button>
            <Button variant="soft" color="neutral" loading>
              Neutral
            </Button>
            <Button variant="soft" color="success" loading>
              Success
            </Button>
            <Button variant="soft" color="error" loading>
              Error
            </Button>
            <Button variant="soft" color="warning" loading>
              Warning
            </Button>
            <Button variant="soft" color="info" loading>
              Info
            </Button>

            <div className="font-bold text-neutral-300">Ghost</div>
            <Button variant="ghost" color="primary" loading>
              Primary
            </Button>
            <Button variant="ghost" color="neutral" loading>
              Neutral
            </Button>
            <Button variant="ghost" color="success" loading>
              Success
            </Button>
            <Button variant="ghost" color="error" loading>
              Error
            </Button>
            <Button variant="ghost" color="warning" loading>
              Warning
            </Button>
            <Button variant="ghost" color="info" loading>
              Info
            </Button>

            <div className="font-bold text-neutral-300">Link</div>
            <Button variant="link" color="primary" loading>
              Primary
            </Button>
            <Button variant="link" color="neutral" loading>
              Neutral
            </Button>
            <Button variant="link" color="success" loading>
              Success
            </Button>
            <Button variant="link" color="error" loading>
              Error
            </Button>
            <Button variant="link" color="warning" loading>
              Warning
            </Button>
            <Button variant="link" color="info" loading>
              Info
            </Button>
          </div>
        </div>
      </div>
    </div>
  ),
};

import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./button";

// Define modes directly since Storybook will use the global modes configuration
const modes = {
  light: {
    backgrounds: { value: "#ffffff" },
    theme: "light",
  },
  dark: {
    backgrounds: { value: "#0c0a09" },
    theme: "dark",
  },
  "light desktop": {
    backgrounds: { value: "#ffffff" },
    theme: "light",
    viewport: "responsive",
  },
  "dark desktop": {
    backgrounds: { value: "#0c0a09" },
    theme: "dark",
    viewport: "responsive",
  },
};

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "fullscreen",
    chromatic: {
      // Single comprehensive story for both light and dark themes
      modes: {
        light: modes.light,
        dark: modes.dark,
      },
    },
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

/**
 * Comprehensive button showcase - all variants, colors, sizes, and states
 * This single story will be tested in both light and dark modes by Chromatic
 */
export const AllVariations: Story = {
  render: () => (
    <div className="p-8 space-y-6 max-w-7xl mx-auto">
      {/* Variants Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Variants
        </h2>
        <div className="flex flex-wrap gap-4">
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
      </section>

      {/* Colors Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Colors
        </h2>
        <div className="space-y-4">
          {(["solid", "soft", "outline", "ghost"] as const).map((variant) => (
            <div key={variant} className="space-y-2">
              <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 capitalize">
                {variant}
              </h3>
              <div className="flex flex-wrap gap-3">
                <Button variant={variant} color="primary">
                  Primary
                </Button>
                <Button variant={variant} color="neutral">
                  Neutral
                </Button>
                <Button variant={variant} color="success">
                  Success
                </Button>
                <Button variant={variant} color="error">
                  Error
                </Button>
                <Button variant={variant} color="warning">
                  Warning
                </Button>
                <Button variant={variant} color="info">
                  Info
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sizes Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Sizes
        </h2>
        <div className="flex flex-wrap items-center gap-4">
          <Button size="sm" variant="solid" color="primary">
            Small
          </Button>
          <Button size="md" variant="solid" color="primary">
            Medium
          </Button>
          <Button size="lg" variant="solid" color="primary">
            Large
          </Button>
        </div>
      </section>

      {/* States Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          States
        </h2>
        <div className="space-y-4">
          {(["solid", "outline", "soft"] as const).map((variant) => (
            <div key={variant} className="space-y-2">
              <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 capitalize">
                {variant} States
              </h3>
              <div className="flex flex-wrap gap-3">
                <Button variant={variant} color="primary">
                  Normal
                </Button>
                <Button variant={variant} color="primary" loading>
                  Loading
                </Button>
                <Button variant={variant} color="primary" disabled>
                  Disabled
                </Button>
                <Button variant={variant} color="primary" loading disabled>
                  Loading Disabled
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Size Combinations */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Size Combinations
        </h2>
        <div className="space-y-4">
          {(["sm", "md", "lg"] as const).map((size) => (
            <div key={size} className="space-y-2">
              <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                Size: {size}
              </h3>
              <div className="flex flex-wrap gap-3">
                <Button size={size} variant="solid" color="primary">
                  Solid
                </Button>
                <Button size={size} variant="outline" color="success">
                  Outline
                </Button>
                <Button size={size} variant="soft" color="warning">
                  Soft
                </Button>
                <Button size={size} variant="ghost" color="info">
                  Ghost
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  ),
};

/**
 * Interactive playground for controls - not tested by Chromatic
 */
export const Playground: Story = {
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  args: {
    children: "Button",
    variant: "solid",
    color: "primary",
    size: "md",
    loading: false,
    disabled: false,
  },
};

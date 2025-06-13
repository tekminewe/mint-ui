/* eslint-disable @typescript-eslint/no-explicit-any */
import { Meta, StoryObj } from "@storybook/react-vite";
import { Card } from "./card";

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
};

const meta = {
  title: "Common/Card",
  component: Card,
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
    shadow: {
      control: "select",
      options: ["none", "sm", "md", "lg", "xl"],
      description: "Shadow size for the card",
      table: {
        defaultValue: { summary: "none" },
      },
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Comprehensive card showcase - all shadow variations and use cases
 * This single story will be tested in both light and dark modes by Chromatic
 */
export const AllVariations: Story = {
  render: () => (
    <div className="p-8 space-y-6  max-w-7xl mx-auto">
      {/* Shadow Variations Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Shadow Variations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(["none", "sm", "md", "lg", "xl"] as const).map((shadow) => (
            <Card key={shadow} shadow={shadow} className="p-6">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  {shadow === "none"
                    ? "No Shadow (Border)"
                    : `${shadow.toUpperCase()} Shadow`}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {shadow === "none"
                    ? "Card with no shadow displays with a subtle border for definition."
                    : `Card with ${shadow} shadow for ${
                        shadow === "sm"
                          ? "subtle"
                          : shadow === "md"
                          ? "moderate"
                          : shadow === "lg"
                          ? "prominent"
                          : "dramatic"
                      } elevation.`}
                </p>
                <div className="text-sm text-gray-500 dark:text-gray-500">
                  shadow="{shadow}"
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Content Examples Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Content Examples
        </h2>

        {/* Simple Content Card */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            Simple Content
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card shadow="md" className="p-6">
              <h4 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
                Basic Card
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                A simple card with basic content and medium shadow for standard
                use cases.
              </p>
            </Card>
            <Card shadow="lg" className="p-6">
              <h4 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
                Elevated Card
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                An elevated card with large shadow for important content that
                needs attention.
              </p>
            </Card>
          </div>
        </div>

        {/* Complex Content Card */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            Complex Content
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card shadow="md" className="p-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">A</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                      Article Card
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Published 2 hours ago
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  This is an example of a more complex card with avatar, title,
                  metadata, and content. Perfect for article previews or user
                  profiles.
                </p>
                <div className="flex space-x-2">
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded">
                    Tag 1
                  </span>
                  <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded">
                    Tag 2
                  </span>
                </div>
              </div>
            </Card>

            <Card shadow="lg" className="p-6">
              <div className="space-y-4">
                <h4 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                  Feature Card
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300">
                      Feature A included
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300">
                      Feature B included
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300">
                      Feature C coming soon
                    </span>
                  </div>
                </div>
                <button className="w-full mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors">
                  Learn More
                </button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Interactive Cards Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Interactive Cards
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card
            shadow="sm"
            className="p-6 cursor-pointer hover:shadow-md transition-shadow duration-200"
          >
            <h4 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
              Hover Effect
            </h4>
            <p className="text-gray-600 dark:text-gray-400">
              This card has a hover effect that increases shadow on interaction.
            </p>
          </Card>

          <Card shadow="md" className="p-6">
            <h4 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
              Static Card
            </h4>
            <p className="text-gray-600 dark:text-gray-400">
              This card maintains consistent shadow without hover effects.
            </p>
          </Card>

          <Card
            shadow="lg"
            className="p-6 border-2 border-blue-200 dark:border-blue-800"
          >
            <h4 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
              Highlighted Card
            </h4>
            <p className="text-gray-600 dark:text-gray-400">
              This card combines shadow with a colored border for emphasis.
            </p>
          </Card>
        </div>
      </section>

      {/* Layout Examples Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Layout Examples
        </h2>

        {/* Card Grid */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            Card Grid
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {Array.from({ length: 4 }, (_, i) => (
              <Card key={i} shadow="sm" className="p-4">
                <h5 className="font-medium text-gray-900 dark:text-gray-100 mb-1">
                  Card {i + 1}
                </h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Small card in a grid layout.
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Nested Cards */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            Nested Cards
          </h3>
          <Card shadow="lg" className="p-6">
            <h4 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">
              Parent Card
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card shadow="sm" className="p-4">
                <h5 className="font-medium text-gray-900 dark:text-gray-100 mb-2">
                  Child Card 1
                </h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Nested card with smaller shadow.
                </p>
              </Card>
              <Card shadow="sm" className="p-4">
                <h5 className="font-medium text-gray-900 dark:text-gray-100 mb-2">
                  Child Card 2
                </h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Another nested card for comparison.
                </p>
              </Card>
            </div>
          </Card>
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
  render: (args: any) => (
    <div className="p-8">
      <Card {...args} className="p-6 max-w-md">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
          Interactive Card
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          Use the controls to experiment with different shadow sizes and see how
          they affect the card's appearance.
        </p>
      </Card>
    </div>
  ),
  args: {
    shadow: "md",
  },
};

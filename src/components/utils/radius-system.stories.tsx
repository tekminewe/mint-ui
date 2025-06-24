import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../button';
import { Card } from '../card';
import { RadiusProvider } from '../utils/radius-provider';
import { allModes } from '../../storybook-modes';

const meta: Meta<typeof RadiusProvider> = {
  title: 'Design System/Radius System',
  component: RadiusProvider,
  parameters: {
    layout: 'fullscreen',
    chromatic: {
      modes: {
        'light desktop': allModes['light desktop'],
        'dark desktop': allModes['dark desktop'],
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    defaultRadius: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl', 'full'],
      description: 'Global default radius for all components',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof RadiusProvider>;

/**
 * Demonstrates how the radius system works across components
 */
export const RadiusSystemDemo: Story = {
  render: () => (
    <div className="p-8 space-y-8 max-w-7xl mx-auto">
      <section className="space-y-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          Radius System Overview
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          The radius system provides consistent border radius across all
          components. It can be controlled globally via RadiusProvider or per
          component via the radius prop.
        </p>
      </section>

      {/* Default Radius (Global Context) */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Default Radius (md)
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Components without a radius prop use the global default from
          RadiusProvider (md):
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card shadow="md" className="p-6">
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
              Default Card
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              This card uses the global default radius.
            </p>
            <Button variant="solid" color="primary">
              Default Button
            </Button>
          </Card>
        </div>
      </section>

      {/* Global Radius Changes */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Global Radius Control
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          RadiusProvider allows you to change the global default for all
          components:
        </p>

        <div className="space-y-8">
          {(['none', 'sm', 'lg', 'xl'] as const).map((globalRadius) => (
            <div key={globalRadius} className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                Global Radius:{' '}
                {globalRadius === 'none'
                  ? 'Square'
                  : globalRadius.toUpperCase()}
              </h3>
              <RadiusProvider defaultRadius={globalRadius}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card shadow="md" className="p-6">
                    <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
                      Card with Global {globalRadius}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      This card inherits the global radius setting.
                    </p>
                    <div className="flex gap-2">
                      <Button variant="solid" color="primary">
                        Button 1
                      </Button>
                      <Button variant="outline" color="primary">
                        Button 2
                      </Button>
                    </div>
                  </Card>
                  <Card shadow="md" className="p-6">
                    <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
                      Component Override
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      This card overrides with radius="full".
                    </p>
                    <div className="flex gap-2">
                      <Button variant="solid" color="success" radius="full">
                        Pill Button
                      </Button>
                      <Button variant="outline" color="success" radius="none">
                        Square Button
                      </Button>
                    </div>
                  </Card>
                </div>
              </RadiusProvider>
            </div>
          ))}
        </div>
      </section>

      {/* Radius Scale */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Complete Radius Scale
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          All available radius values from none to full:
        </p>

        <div className="space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {(['none', 'sm', 'md', 'lg', 'xl', 'full'] as const).map(
              (radius) => (
                <div key={radius} className="space-y-3">
                  <h4 className="text-center font-medium text-gray-700 dark:text-gray-300">
                    {radius === 'none'
                      ? 'Square'
                      : radius === 'full'
                      ? 'Pill'
                      : radius.toUpperCase()}
                  </h4>
                  <Card
                    radius={radius}
                    shadow="md"
                    className="h-20 flex items-center justify-center"
                  >
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {radius}
                    </span>
                  </Card>
                  <Button
                    variant="solid"
                    color="primary"
                    radius={radius}
                    className="w-full"
                  >
                    Button
                  </Button>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Mixed Usage */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Mixed Radius Usage
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Example showing different radius values used together strategically:
        </p>

        <Card radius="lg" shadow="md" className="p-6">
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
            Product Card (Large Radius)
          </h3>
          <div className="space-y-4">
            <Card
              radius="md"
              shadow="sm"
              className="p-4 bg-gray-50 dark:bg-gray-800"
            >
              <p className="text-gray-600 dark:text-gray-400">
                Nested card with medium radius for content organization.
              </p>
            </Card>
            <div className="flex gap-3">
              <Button variant="solid" color="primary" radius="sm">
                Small Radius
              </Button>
              <Button variant="outline" color="primary" radius="md">
                Medium Radius
              </Button>
              <Button variant="soft" color="primary" radius="full">
                Pill Button
              </Button>
            </div>
          </div>
        </Card>
      </section>

      {/* Implementation Guide */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Implementation Guide
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card radius="md" shadow="md" className="p-6">
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">
              Global Setup
            </h3>
            <div className="space-y-2 text-sm">
              <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded font-mono">
                &lt;RadiusProvider defaultRadius="lg"&gt;
                <br />
                &nbsp;&nbsp;&lt;App /&gt;
                <br />
                &lt;/RadiusProvider&gt;
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Wrap your app to set global default radius.
              </p>
            </div>
          </Card>

          <Card radius="md" shadow="md" className="p-6">
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">
              Component Override
            </h3>
            <div className="space-y-2 text-sm">
              <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded font-mono">
                &lt;Button radius="full"&gt;Pill&lt;/Button&gt;
                <br />
                &lt;Card radius="none"&gt;Square&lt;/Card&gt;
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Override global default per component as needed.
              </p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  ),
};

/**
 * Interactive example for testing different global radius values
 */
export const InteractiveGlobalRadius: Story = {
  args: {
    defaultRadius: 'md',
  },
  render: (args) => (
    <RadiusProvider defaultRadius={args.defaultRadius}>
      <div className="p-8 space-y-6 max-w-4xl mx-auto">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Interactive Global Radius
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Change the defaultRadius control to see how it affects all
            components globally.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card shadow="md" className="p-6">
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">
              Global Radius Card
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              This card uses the global default radius setting.
            </p>
            <div className="flex gap-2">
              <Button variant="solid" color="primary">
                Global Default
              </Button>
              <Button variant="outline" color="primary">
                Also Global
              </Button>
            </div>
          </Card>

          <Card shadow="md" radius="full" className="p-6">
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">
              Override Card
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              This card has radius="full" override.
            </p>
            <div className="flex gap-2">
              <Button variant="solid" color="success" radius="none">
                Square Override
              </Button>
              <Button variant="outline" color="success">
                Uses Global
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </RadiusProvider>
  ),
};

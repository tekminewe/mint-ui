import { Meta, StoryObj } from '@storybook/react-vite';
import { Select } from './select';
import { useState } from 'react';

const defaultOptions = [
  {
    label: 'React',
    value: 'react',
  },
  {
    label: 'Vue',
    value: 'vue',
  },
  {
    label: 'Angular',
    value: 'angular',
  },
  {
    label: 'Svelte',
    value: 'svelte',
  },
  {
    label: 'Ember',
    value: 'ember',
  },
  {
    label: 'Next.js',
    value: 'nextjs',
  },
  {
    label: 'Nuxt.js',
    value: 'nuxtjs',
  },
  {
    label: 'Remix',
    value: 'remix',
  },
  {
    label: 'SvelteKit',
    value: 'sveltekit',
  },
];

const meta = {
  title: 'Form / Select',
  component: Select,
  tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllVariants: Story = {
  render: () => {
    const [basicValue, setBasicValue] = useState<string>();
    const [requiredValue, setRequiredValue] = useState<string>('react');
    const [notClearableValue, setNotClearableValue] = useState<string>('vue');
    const [errorValue, setErrorValue] = useState<string>();
    const [smallValue, setSmallValue] = useState<string>();
    const [largeValue, setLargeValue] = useState<string>();

    const handleRequiredChange = (value?: string) => {
      if (value) setRequiredValue(value);
    };

    const handleNotClearableChange = (value?: string) => {
      if (value) setNotClearableValue(value);
    };

    return (
      <div className="space-y-12 p-6">
        <div className="space-y-6">
          <h2 className="text-lg font-semibold text-neutral-900">
            Select Component Variants
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Basic Select */}
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-neutral-700">
                Basic Select
              </h3>
              <Select
                options={defaultOptions}
                value={basicValue}
                onChange={setBasicValue}
                placeholder="Choose a framework"
              />
            </div>

            {/* With Label */}
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-neutral-700">
                With Label
              </h3>
              <Select
                label="Framework"
                options={defaultOptions}
                value={basicValue}
                onChange={setBasicValue}
                placeholder="Select your preferred framework"
              />
            </div>

            {/* Required */}
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-neutral-700">
                Required Select
              </h3>
              <Select
                label="Required Framework"
                required
                value={requiredValue}
                onChange={handleRequiredChange}
                options={defaultOptions}
              />
            </div>

            {/* Not Clearable */}
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-neutral-700">
                Not Clearable
              </h3>
              <Select
                label="Framework (Fixed)"
                required
                value={notClearableValue}
                onChange={handleNotClearableChange}
                clearable={false}
                options={defaultOptions}
              />
            </div>

            {/* With Description */}
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-neutral-700">
                With Description
              </h3>
              <Select
                label="Framework Choice"
                description="Choose the framework you're most comfortable with"
                options={defaultOptions}
                value={basicValue}
                onChange={setBasicValue}
              />
            </div>

            {/* With Error */}
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-neutral-700">
                With Error
              </h3>
              <Select
                label="Framework"
                placeholder="This select has an error"
                error="Please select a valid framework"
                description="This field is required for your application"
                options={defaultOptions}
                value={errorValue}
                onChange={setErrorValue}
              />
            </div>

            {/* Selected State with Tick Icon */}
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-neutral-700">
                Selected State (Tick Icon)
              </h3>
              <Select
                label="Framework with Selection"
                description="Shows tick icon on the left of selected option in dropdown"
                options={defaultOptions}
                value={requiredValue}
                onChange={handleRequiredChange}
              />
            </div>
          </div>

          {/* Size Variants */}
          <div className="space-y-4">
            <h3 className="text-md font-medium text-neutral-800">
              Size Variants
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <h4 className="text-sm text-neutral-600">Small</h4>
                <Select
                  size="sm"
                  label="Small Select"
                  options={defaultOptions}
                  value={smallValue}
                  onChange={setSmallValue}
                  placeholder="Small size"
                />
              </div>
              <div className="space-y-2">
                <h4 className="text-sm text-neutral-600">Medium (Default)</h4>
                <Select
                  size="md"
                  label="Medium Select"
                  options={defaultOptions}
                  value={basicValue}
                  onChange={setBasicValue}
                  placeholder="Medium size"
                />
              </div>
              <div className="space-y-2">
                <h4 className="text-sm text-neutral-600">Large</h4>
                <Select
                  size="lg"
                  label="Large Select"
                  options={defaultOptions}
                  value={largeValue}
                  onChange={setLargeValue}
                  placeholder="Large size"
                />
              </div>
            </div>
          </div>

          {/* Special Cases */}
          <div className="space-y-4">
            <h3 className="text-md font-medium text-neutral-800">
              Special Cases
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="text-sm text-neutral-600">Empty Options</h4>
                <Select
                  label="No Options Available"
                  options={[]}
                  placeholder="No options to select"
                />
              </div>
              <div className="space-y-2">
                <h4 className="text-sm text-neutral-600">Long Option Names</h4>
                <Select
                  label="Long Options"
                  options={[
                    {
                      label: 'Very Long Framework Name That Might Overflow',
                      value: 'long1',
                    },
                    {
                      label: 'Another Extremely Long Option Name For Testing',
                      value: 'long2',
                    },
                    { label: 'Short', value: 'short' },
                  ]}
                  placeholder="Select long option"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
};

export const OpenByDefault: Story = {
  render: () => {
    const [selectedValue, setSelectedValue] = useState<string>('react');

    return (
      <div className="space-y-6 p-6">
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-neutral-900">
            Select with Dropdown Open by Default
          </h2>
          <p className="text-sm text-neutral-600">
            This story demonstrates the Select dropdown in its open state,
            showing the tick icon on the left of the selected option and proper
            text alignment for all options.
          </p>

          <div className="max-w-md">
            {' '}
            <Select
              label="Framework Selection"
              description="Select your preferred frontend framework"
              options={defaultOptions}
              value={selectedValue}
              onChange={(value) => setSelectedValue(value || '')}
              defaultOpen={true}
            />
          </div>

          <div className="mt-8 p-4 bg-neutral-50 rounded-lg">
            <h3 className="text-sm font-medium text-neutral-700 mb-2">
              Features Demonstrated:
            </h3>
            <ul className="text-sm text-neutral-600 space-y-1">
              <li>• Tick icon (✓) on the left of the selected option</li>
              <li>• Consistent text alignment across all options</li>
              <li>• Proper hover and focus states</li>
              <li>• Fixed-width icon container for alignment</li>
            </ul>
          </div>
        </div>
      </div>
    );
  },
};

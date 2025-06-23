import type { Meta, StoryObj } from '@storybook/react-vite';
import { Callout } from './callout';

const meta: Meta<typeof Callout> = {
  title: 'Feedback/Callout',
  component: Callout,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Callout>;

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4 max-w-2xl">
      <Callout type="info">
        This is an informational callout with important details.
      </Callout>
      <Callout type="warning">
        This is a warning callout. Proceed with caution.
      </Callout>
      <Callout type="error">
        This is an error callout. Something went wrong.
      </Callout>
      <Callout type="success">
        This is a success callout. Operation completed successfully.
      </Callout>
      <Callout type="info" className="border-2">
        This is a callout with custom class (thicker border).
      </Callout>
    </div>
  ),
};

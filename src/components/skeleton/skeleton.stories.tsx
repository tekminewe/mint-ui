import type { Meta, StoryObj } from '@storybook/react-vite';
import { Skeleton } from './skeleton';
import { TEXT_COLORS } from '../utils/component-colors';

const meta: Meta<typeof Skeleton> = {
  title: 'Components/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-medium">Text</h3>
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
        <Skeleton className="h-4 w-[150px]" />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-medium">Card</h3>
        <div className="rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
          <div className="flex items-center gap-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[200px]" />
              <Skeleton className="h-4 w-[150px]" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-medium">Avatar</h3>
        <Skeleton className="h-12 w-12 rounded-full" />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-medium">Custom Dimensions</h3>
        <Skeleton width={100} height={100} />
      </div>
    </div>
  ),
};

export const DarkMode: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
  render: () => (
    <div className="flex flex-col gap-4 dark">
      <div className="flex flex-col gap-2">
        <h3 className={`text-lg font-medium ${TEXT_COLORS.primary}`}>Text</h3>
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
        <Skeleton className="h-4 w-[150px]" />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className={`text-lg font-medium ${TEXT_COLORS.primary}`}>Card</h3>
        <div className="rounded-lg border border-neutral-800 p-4">
          <div className="flex items-center gap-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[200px]" />
              <Skeleton className="h-4 w-[150px]" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className={`text-lg font-medium ${TEXT_COLORS.primary}`}>Avatar</h3>
        <Skeleton className="h-12 w-12 rounded-full" />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className={`text-lg font-medium ${TEXT_COLORS.primary}`}>
          Custom Dimensions
        </h3>
        <Skeleton width={100} height={100} />
      </div>
    </div>
  ),
};

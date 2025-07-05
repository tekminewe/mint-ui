import { Meta, StoryObj } from '@storybook/react-vite';
import { Dialog, DialogRoot, DialogTrigger, DialogClose } from './dialog';
import { useCallback, useState } from 'react';
import { TextInput } from '../text-input';
import { Button } from '../button';
import { DialogFooter } from './dialog-footer';

const meta = {
  title: 'Common / Dialog',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Dialog
export const Basic: Story = {
  render: () => {
    const [ref, setRef] = useState<HTMLDivElement | null>(null);
    const callbackRef = useCallback((node: HTMLDivElement) => {
      if (node) {
        setRef(node);
      }
    }, []);

    return (
      <div ref={callbackRef}>
        <DialogRoot open>
          <Dialog
            title="Basic Dialog"
            container={ref}
            description="This is a basic dialog with title and description."
          >
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Simple dialog content goes here.
            </p>
          </Dialog>
        </DialogRoot>
      </div>
    );
  },
};

// Dialog with Form
export const WithForm: Story = {
  render: () => {
    const [ref, setRef] = useState<HTMLDivElement | null>(null);
    const callbackRef = useCallback((node: HTMLDivElement) => {
      if (node) {
        setRef(node);
      }
    }, []);

    return (
      <div ref={callbackRef}>
        <DialogRoot open>
          <Dialog
            title="Reset Password"
            container={ref}
            description="Resetting your password will result in logging out all sessions."
          >
            <form className="space-y-4">
              <TextInput label="Current Password" type="password" />
              <TextInput label="New Password" type="password" />
              <TextInput label="Confirm New Password" type="password" />
              <DialogFooter>
                <Button variant="ghost">Cancel</Button>
                <Button>Change Password</Button>
              </DialogFooter>
            </form>
          </Dialog>
        </DialogRoot>
      </div>
    );
  },
};

// Dialog with Close Button
export const WithCloseButton: Story = {
  render: () => {
    const [ref, setRef] = useState<HTMLDivElement | null>(null);
    const callbackRef = useCallback((node: HTMLDivElement) => {
      if (node) {
        setRef(node);
      }
    }, []);

    return (
      <div ref={callbackRef}>
        <DialogRoot open>
          <Dialog
            title="Settings"
            container={ref}
            description="Configure your application settings."
            showCloseButton={true}
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span>Dark Mode</span>
                <Button variant="ghost" size="sm">
                  Toggle
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <span>Notifications</span>
                <Button variant="ghost" size="sm">
                  Configure
                </Button>
              </div>
              <DialogFooter>
                <Button variant="ghost">Cancel</Button>
                <Button>Save Changes</Button>
              </DialogFooter>
            </div>
          </Dialog>
        </DialogRoot>
      </div>
    );
  },
};

// Dialog without Description
export const WithoutDescription: Story = {
  render: () => {
    const [ref, setRef] = useState<HTMLDivElement | null>(null);
    const callbackRef = useCallback((node: HTMLDivElement) => {
      if (node) {
        setRef(node);
      }
    }, []);

    return (
      <div ref={callbackRef}>
        <DialogRoot open>
          <Dialog title="Quick Action" container={ref}>
            <div className="space-y-3">
              <p className="text-sm">Choose an action to perform:</p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  Option 1
                </Button>
                <Button variant="outline" size="sm">
                  Option 2
                </Button>
                <Button variant="outline" size="sm">
                  Option 3
                </Button>
              </div>
              <DialogFooter>
                <Button variant="ghost">Cancel</Button>
              </DialogFooter>
            </div>
          </Dialog>
        </DialogRoot>
      </div>
    );
  },
};

// Dialog with Hidden Title
export const WithHiddenTitle: Story = {
  render: () => {
    const [ref, setRef] = useState<HTMLDivElement | null>(null);
    const callbackRef = useCallback((node: HTMLDivElement) => {
      if (node) {
        setRef(node);
      }
    }, []);

    return (
      <div ref={callbackRef}>
        <DialogRoot open>
          <Dialog
            title="Hidden Title"
            container={ref}
            description="This dialog has a hidden title for accessibility but custom content layout."
            showTitle={false}
            showCloseButton={true}
          >
            <div className="text-center space-y-4">
              <div className="text-2xl">🎉</div>
              <h4 className="text-lg font-semibold">Congratulations!</h4>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Your action was completed successfully.
              </p>
              <DialogFooter className="justify-center">
                <Button>Continue</Button>
              </DialogFooter>
            </div>
          </Dialog>
        </DialogRoot>
      </div>
    );
  },
};

// Dialog with Custom Styling
export const WithCustomStyling: Story = {
  render: () => {
    const [ref, setRef] = useState<HTMLDivElement | null>(null);
    const callbackRef = useCallback((node: HTMLDivElement) => {
      if (node) {
        setRef(node);
      }
    }, []);

    return (
      <div ref={callbackRef}>
        <DialogRoot open>
          <Dialog
            title="Custom Styled Dialog"
            container={ref}
            description="This dialog demonstrates custom styling capabilities."
            className="max-w-lg"
            showCloseButton={true}
          >
            <div className="bg-primary-50 dark:bg-primary-900 p-4 rounded-lg mb-4">
              <p className="text-sm text-primary-700 dark:text-primary-300">
                This is a highlighted section with custom background styling.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <TextInput label="First Name" />
              <TextInput label="Last Name" />
            </div>
            <DialogFooter>
              <Button variant="ghost">Cancel</Button>
              <Button>Save</Button>
            </DialogFooter>
          </Dialog>
        </DialogRoot>
      </div>
    );
  },
};

// Interactive Dialog with Trigger
export const Interactive: Story = {
  render: () => {
    const [ref, setRef] = useState<HTMLDivElement | null>(null);
    const callbackRef = useCallback((node: HTMLDivElement) => {
      if (node) {
        setRef(node);
      }
    }, []);

    return (
      <div ref={callbackRef}>
        <DialogRoot>
          <DialogTrigger asChild>
            <Button>Open Dialog</Button>
          </DialogTrigger>
          <Dialog
            title="Interactive Dialog"
            container={ref}
            description="This dialog can be opened and closed interactively."
            showCloseButton={true}
          >
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
              Click the close button or outside the dialog to close it.
            </p>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="ghost">Close</Button>
              </DialogClose>
              <DialogClose asChild>
                <Button>Confirm</Button>
              </DialogClose>
            </DialogFooter>
          </Dialog>
        </DialogRoot>
      </div>
    );
  },
};

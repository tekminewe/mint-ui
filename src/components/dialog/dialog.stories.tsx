import { Meta, StoryObj } from "@storybook/react";
import { Dialog, DialogRoot } from "./dialog";
import { useCallback, useState } from "react";
import { TextInput } from "../text-input";
import { Button } from "../button";

const meta = {
  title: "Common / Dialog",
  tags: ["autodocs"],
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
            description="Resetting your password will result in logging out all session."
          >
            <form className="space-y-4">
              <TextInput label="Current Password" type="password" />
              <TextInput label="New Password" type="password" />
              <Button>Change password</Button>
            </form>
          </Dialog>
        </DialogRoot>
      </div>
    );
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

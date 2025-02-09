import { Meta, StoryObj } from "@storybook/react";

import { DropdownMenu, DropdownMenuRoot } from "./dropdown-menu";
import { Button } from "../button";
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { useCallback, useState } from "react";
import { DropdownMenuItem } from "./item";
import { DropdownMenuTrigger } from "./trigger";

const meta = {
  title: "Common / DropdownMenu",
  component: DropdownMenuRoot,
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
        <DropdownMenuRoot open>
          <DropdownMenuTrigger>
            <Button>Open Menu</Button>
          </DropdownMenuTrigger>
          <DropdownMenu container={ref}>
            <DropdownMenuItem>
              <FaXTwitter /> Share on X
            </DropdownMenuItem>
            <DropdownMenuItem>
              <FaLinkedinIn />
              Share on Linkedin
            </DropdownMenuItem>
          </DropdownMenu>
        </DropdownMenuRoot>
      </div>
    );
  },
} satisfies Meta<typeof DropdownMenuRoot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

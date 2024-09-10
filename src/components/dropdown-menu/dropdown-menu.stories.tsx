import { Meta, StoryObj } from "@storybook/react";

import {
  DropdownMenuItem,
  DropdownMenuRoot,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "./dropdown-menu";
import { Button } from "../button";
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { useCallback, useState } from "react";

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
          <DropdownMenuContent container={ref}>
            <DropdownMenuItem>
              <FaXTwitter /> Share on X
            </DropdownMenuItem>
            <DropdownMenuItem>
              <FaLinkedinIn />
              Share on Linkedin
            </DropdownMenuItem>
          </DropdownMenuContent>
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

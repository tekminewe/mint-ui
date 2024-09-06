import { Meta, StoryObj } from "@storybook/react";
import { Drawer } from "./drawer";
import { DrawerRoot } from "./drawer-root";
import { DrawerTrigger } from "./drawer-trigger";
import { Button } from "../button";
import { useCallback, useState } from "react";
import { TextInput } from "../text-input";
import { DrawerTitle } from "./drawer-title";

const meta = {
  title: "Common / Drawer",
  component: Drawer,
  tags: ["autodocs"],
  render: (args) => {
    const [ref, setRef] = useState<HTMLDivElement | null>(null);
    const callbackRef = useCallback((node: HTMLDivElement) => {
      if (node) {
        setRef(node);
      }
    }, []);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { direction, open, title, ...drawerProps } = args;

    return (
      <div ref={callbackRef}>
        <DrawerRoot open={open} direction={direction}>
          <DrawerTrigger asChild>
            <Button>Show Drawer</Button>
          </DrawerTrigger>
          <Drawer container={ref} {...drawerProps}>
            <DrawerTitle>{title}</DrawerTitle>
            <TextInput label="Name" placeholder="Please enter the name" />
          </Drawer>
        </DrawerRoot>
      </div>
    );
  },
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RightDrawer: Story = {
  args: {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    title: "Right Drawer",
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    direction: "right",
    open: true,
  },
};

export const LeftDrawer: Story = {
  args: {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    title: "Left Drawer",
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    direction: "left",
    open: true,
  },
};

export const BottomDrawer: Story = {
  args: {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    title: "Bottom Drawer",
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    direction: "bottom",
    open: true,
  },
};

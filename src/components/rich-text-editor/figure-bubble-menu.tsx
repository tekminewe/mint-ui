"use client";

import { BubbleMenu, Editor } from "@tiptap/react";
import { Button } from "../button";
import { Dialog } from "@radix-ui/themes";
import { TextInput } from "../text-input";
import { Flex } from "../flex";

interface FigureBubbleMenuProps {
  editor: Editor;
}

export const FigureBubbleMenu = ({ editor }: FigureBubbleMenuProps) => {
  return (
    <>
      <BubbleMenu
        editor={editor}
        tippyOptions={{ duration: 100 }}
        shouldShow={({ editor }) => {
          return editor.isActive("figure");
        }}
      >
        <Dialog.Root>
          <div className="bg-panel-solid shadow-5 p-1 space-x-1 rounded-2">
            <Dialog.Trigger>
              <Button variant="soft">Details</Button>
            </Dialog.Trigger>
          </div>
          <Dialog.Content className="space-y-4" maxWidth="450px">
            <Dialog.Title>Image Details</Dialog.Title>
            <Dialog.Description>
              Update the details of the image.
            </Dialog.Description>
            <img src={editor.getAttributes("figure").src} />
            <TextInput
              label="Title"
              value={editor.getAttributes("figure").title}
              onChange={(e) => {
                editor.commands.updateAttributes("figure", {
                  title: e.target.value,
                });
              }}
            />
            <TextInput
              label="Alt text"
              value={editor.getAttributes("figure").alt}
              onChange={(e) => {
                editor.commands.updateAttributes("figure", {
                  alt: e.target.value,
                });
              }}
            />
            <Flex justify="end">
              <Dialog.Close>
                <Button variant="soft">Close</Button>
              </Dialog.Close>
            </Flex>
          </Dialog.Content>
        </Dialog.Root>
      </BubbleMenu>
    </>
  );
};

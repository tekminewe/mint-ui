import { BubbleMenu, Editor } from "@tiptap/react";
import * as ToggleGroup from "@radix-ui/react-toggle-group";

interface LinkBubbleMenuProps {
  editor: Editor;
}

export const LinkBubbleMenu = ({ editor }: LinkBubbleMenuProps) => {
  return (
    <BubbleMenu
      editor={editor}
      tippyOptions={{ duration: 100 }}
      shouldShow={({ editor }) => {
        return editor.isActive("link");
      }}
    >
      <ToggleGroup.Root
        className="ToggleGroup"
        type="multiple"
        value={editor.getAttributes("link").rel?.split(" ") ?? []}
        aria-label="Link rel options"
        onValueChange={(values) => {
          editor
            .chain()
            .extendMarkRange("link")
            .updateAttributes("link", {
              rel: values.join(" "),
            })
            .run();
        }}
      >
        <ToggleGroup.Item
          className="ToggleGroupItem"
          value="nofollow"
          aria-label="nofollow"
        >
          nofollow
        </ToggleGroup.Item>
        <ToggleGroup.Item
          className="ToggleGroupItem"
          value="noreferrer"
          aria-label="noreferrer"
        >
          noreferrer
        </ToggleGroup.Item>
        <ToggleGroup.Item
          className="ToggleGroupItem"
          value="noopener"
          aria-label="noopener"
        >
          noopener
        </ToggleGroup.Item>
      </ToggleGroup.Root>
    </BubbleMenu>
  );
};

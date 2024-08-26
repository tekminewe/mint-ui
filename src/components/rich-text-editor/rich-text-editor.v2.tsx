"use client";

import {
  FloatingMenu,
  // BubbleMenu,
  AnyExtension,
  JSONContent,
  useEditor,
  EditorContent,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import "./rich-text-editor.module.scss";
import { NodeCommand, OnItemClickHandler } from "./node-command";

export interface RichTextEditorProps {
  /**
   * The content of the editor.
   * @example { type: "doc", content: [{ type: "paragraph", content: [{ type: "text", text: "Hello!" }] }] }
   */
  content?: JSONContent;

  /**
   * The placeholder text to show when the editor is empty.
   * @default "Write something..."
   * @example "Write a blog post..."
   */
  placeholder?: string;
}

export const RichTextEditor = ({
  content,
  placeholder = "Write something...",
}: RichTextEditorProps) => {
  const editor = useEditor({
    extensions: [
      StarterKit as AnyExtension,
      Placeholder.configure({
        placeholder: ({ node }) => {
          if (node.type.name === "heading") {
            return `Heading ${node.attrs.level - 1}`;
          }

          return placeholder;
        },
      }) as AnyExtension,
    ],
    content,
  });

  const handleItemClick: OnItemClickHandler = ({ id }) => {
    if (!editor) {
      return;
    }
    switch (id) {
      case "heading-1":
        editor.chain().focus().toggleHeading({ level: 2 }).run();
        break;
      case "heading-2":
        editor.chain().focus().toggleHeading({ level: 3 }).run();
        break;
      case "heading-3":
        editor.chain().focus().toggleHeading({ level: 4 }).run();
        break;
    }
  };

  return (
    <div className="p-8">
      <EditorContent className="prose" editor={editor} />
      <FloatingMenu
        shouldShow={({ editor }) => editor.isActive("paragraph")}
        editor={editor}
        tippyOptions={{ duration: 250, placement: "top-start" }}
      >
        <NodeCommand onItemClick={handleItemClick} />
      </FloatingMenu>
      {/* <BubbleMenu editor={null}>This is the bubble menu</BubbleMenu> */}
    </div>
  );
};

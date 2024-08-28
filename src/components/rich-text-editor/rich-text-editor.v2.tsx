"use client";

import {
  FloatingMenu,
  // BubbleMenu,
  AnyExtension,
  JSONContent,
  useEditor,
  EditorContent,
  Editor,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import CodeBlock from "@tiptap/extension-code-block-lowlight";
import "./rich-text-editor.module.scss";
import { NodeCommand, OnItemClickHandler } from "./node-command";
import { Figure } from "./figure-extensions";
import { useDebouncedCallback } from "use-debounce";
import { all, createLowlight } from "lowlight";

export type OnChangeHandler = (params: { content: JSONContent }) => void;

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

  /**
   * Callback function that is called when the editor content changes.
   * @example ({ content }) => console.log(content)
   */
  onChange?: OnChangeHandler;

  /**
   * The time to wait in miliseconds before updating the editor content
   * @default 2000
   * @example 5000
   */
  debounceTime?: number;

  /**
   * The maximum time to wait in miliseconds before updating the editor content
   * @example 5000
   * @default 10000
   */
  maxWait?: number;

  /**
   * Callback function that is called when an image is uploaded.
   * @param file
   * @returns
   */
  onImageUpload?: (file: File) => Promise<{ src: string; caption?: string }>;
}

const lowlight = createLowlight(all);

export const RichTextEditor = ({
  onChange,
  maxWait = 5000,
  debounceTime = 2000,
  content,
  placeholder = "Write something...",
  onImageUpload,
}: RichTextEditorProps) => {
  const debouncedUpdates = useDebouncedCallback(
    async ({ editor }: { editor: Editor }) => {
      const content = editor.getJSON();
      onChange?.({ content });
    },
    debounceTime,
    { maxWait: maxWait }
  );

  const editor = useEditor({
    onUpdate: debouncedUpdates,
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
      Figure as AnyExtension,
      CodeBlock.configure({
        lowlight,
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
      case "image": {
        const input = document.createElement("input");
        input.type = "file";
        input.accept = "image/*";
        input.onchange = async () => {
          if (input.files?.length) {
            const file = input.files[0];
            try {
              const { src } = (await onImageUpload?.(file)) ?? {
                src: undefined,
              };
              if (!src) {
                return;
              }
              editor.chain().focus().setFigure({ src, caption: "" }).run();
            } catch (e) {
              console.error(e);
              // Silent error
            }
          }
        };
        input.click();
        break;
      }
      case "code-block":
        editor.chain().focus().toggleCodeBlock().run();
        break;
    }
  };

  return (
    <div className="p-8">
      <EditorContent
        className="prose prose-figcaption:text-center"
        editor={editor}
      />
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

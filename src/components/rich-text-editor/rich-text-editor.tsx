"use client";

import {
  EditorCommand,
  EditorCommandEmpty,
  EditorCommandItem,
  EditorCommandList,
  EditorContent,
  EditorInstance,
  EditorRoot,
  JSONContent,
} from "novel";
import { handleCommandNavigation } from "novel/extensions";
import { defaultExtensions } from "./extension";
import { slashCommand, suggestionItems } from "./suggestion";
import { useDebouncedCallback } from "use-debounce";

export interface RichTextEditorProps {
  onChange?: (params: { content: JSONContent }) => void;

  /**
   * The time to wait in miliseconds before updating the editor content
   * @default 3000
   * @example 5000
   */
  debounceTime?: number;

  /**
   * The maximum time to wait in miliseconds before updating the editor content
   * @example 10000
   * @default 10000
   */
  maxWait?: number;
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const extensions = [...defaultExtensions, slashCommand];

export const RichTextEditor = ({
  onChange,
  debounceTime = 3000,
  maxWait = 10000,
}: RichTextEditorProps) => {
  const debouncedUpdates = useDebouncedCallback(
    async (editor: EditorInstance) => {
      const content = editor.getJSON();
      onChange?.({ content });
    },
    debounceTime,
    { maxWait: maxWait }
  );
  return (
    <EditorRoot>
      <EditorContent
        className="p-2"
        extensions={extensions}
        onUpdate={({ editor }) => debouncedUpdates(editor)}
        editorProps={{
          handleDOMEvents: {
            keydown: (_view, event) => handleCommandNavigation(event),
          },
          attributes: {
            class: `prose prose-headings:font-title font-default focus:outline-none max-w-full`,
          },
        }}
      ></EditorContent>
      <EditorCommand className="z-50 h-auto max-h-[330px] w-72 overflow-y-auto rounded-md border border-muted bg-background px-1 py-2 shadow-md transition-all">
        <EditorCommandEmpty className="px-2 text-muted-foreground">
          No results
        </EditorCommandEmpty>
        <EditorCommandList>
          {suggestionItems.map((item) => (
            <EditorCommandItem
              value={item.title}
              onCommand={(val) => item.command?.(val)}
              className={`flex w-full items-center space-x-2 rounded-md px-2 py-1 text-left text-sm hover:bg-accent aria-selected:bg-accent `}
              key={item.title}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-md border border-muted bg-background">
                {item.icon}
              </div>
              <div>
                <p className="font-medium">{item.title}</p>
                <p className="text-xs text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </EditorCommandItem>
          ))}
        </EditorCommandList>
      </EditorCommand>
    </EditorRoot>
  );
};

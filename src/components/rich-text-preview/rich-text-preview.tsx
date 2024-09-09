"use client";

import { JSONContent } from "@tiptap/core";
import { useMemo } from "react";
import { useExtensions } from "../rich-text-editor/use-extensions";
import "../rich-text-editor/rich-text-editor.module.scss";
import { generateHTML } from "@tiptap/html";

export interface RichTextPreviewProps {
  content: JSONContent;
}

export const RichTextPreview = ({ content }: RichTextPreviewProps) => {
  const extensions = useExtensions({ defaultPlaceholder: "" });
  const output = useMemo(() => {
    return generateHTML(content, extensions);
  }, [content, extensions]);

  return (
    <div
      className="prose prose-figcaption:text-center"
      dangerouslySetInnerHTML={{ __html: output }}
    />
  );
  return;
};

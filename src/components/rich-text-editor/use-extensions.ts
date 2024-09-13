"use client";

import Placeholder from "@tiptap/extension-placeholder";
import { AnyExtension } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useMemo } from "react";
import { Figure } from "./figure-extensions";
import CodeBlock from "@tiptap/extension-code-block-lowlight";
import { all, createLowlight } from "lowlight";
import Link from "@tiptap/extension-link";

const lowlight = createLowlight(all);

export const useExtensions = ({
  defaultPlaceholder,
}: {
  defaultPlaceholder: string;
}) => {
  return useMemo(
    () => [
      StarterKit.configure({
        codeBlock: false,
      }) as AnyExtension,
      Placeholder.configure({
        placeholder: ({ node }) => {
          if (node.type.name === "heading") {
            return `Heading ${node.attrs.level - 1}`;
          }

          return defaultPlaceholder;
        },
      }) as AnyExtension,
      Figure as AnyExtension,
      CodeBlock.configure({
        lowlight,
      }) as AnyExtension,
      Link.configure({
        openOnClick: false,
        autolink: true,
        defaultProtocol: "https",
        protocols: [
          "mailto",
          {
            scheme: "tel",
            optionalSlashes: true,
          },
        ],
      }),
    ],
    [defaultPlaceholder]
  );
};

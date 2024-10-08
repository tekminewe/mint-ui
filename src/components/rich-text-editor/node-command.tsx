import { Command } from "cmdk";
import { Heading1, Heading2, Heading3, Image } from "lucide-react";
import { NodeCommandItem } from "./node-command-item";

export type ItemType =
  | "heading-1"
  | "heading-2"
  | "heading-3"
  | "image"
  | "code-block";
export type OnItemClickHandler = ({ id }: { id: ItemType }) => void;

interface NodeCommandProps {
  onItemClick?: OnItemClickHandler;
}

export const NodeCommand = ({ onItemClick }: NodeCommandProps) => {
  return (
    <Command className="border rounded-2">
      <Command.List>
        <Command.Group>
          <NodeCommandItem
            icon={<Heading1 size={24} />}
            title="Heading 1"
            description="Big section heading"
            onClick={() => onItemClick?.({ id: "heading-1" })}
          />
          <NodeCommandItem
            icon={<Heading2 size={24} />}
            title="Heading 2"
            description="Medium section heading"
            onClick={() => onItemClick?.({ id: "heading-2" })}
          />
          <NodeCommandItem
            icon={<Heading3 size={24} />}
            title="Heading 3"
            description="Small section heading"
            onClick={() => onItemClick?.({ id: "heading-3" })}
          />
          <NodeCommandItem
            icon={<Image size={24} />}
            title="Image"
            description="Upload an image"
            onClick={() => onItemClick?.({ id: "image" })}
          />
          <NodeCommandItem
            icon={<Image size={24} />}
            title="Code Block"
            description="Insert a code snippet"
            onClick={() => onItemClick?.({ id: "code-block" })}
          />
        </Command.Group>
      </Command.List>
    </Command>
  );
};

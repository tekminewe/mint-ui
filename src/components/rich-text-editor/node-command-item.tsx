import { Command } from "cmdk";
import { MouseEventHandler, ReactNode } from "react";

interface NodeCommandItemProps {
  icon: ReactNode;
  title: string;
  description: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

export const NodeCommandItem = ({
  icon,
  title,
  description,
  onClick,
}: NodeCommandItemProps) => {
  return (
    <Command.Item>
      <div
        onClick={onClick}
        className="flex items-center gap-2 cursor-pointer hover:bg-gray-4 bg-gray-1 px-2 py-2"
      >
        {icon}
        <div>
          <p className="text-sm">{title}</p>
          <p className="text-xs text-gray-9">{description}</p>
        </div>
      </div>
    </Command.Item>
  );
};

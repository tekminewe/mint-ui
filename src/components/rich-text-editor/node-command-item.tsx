import { Command } from "cmdk";
import { Flex } from "../flex";
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
      <Flex
        onClick={onClick}
        gap="2"
        align="center"
        px="2"
        py="2"
        className="cursor-pointer hover:bg-gray-4 bg-gray-1"
      >
        {icon}
        <div>
          <p className="text-sm">{title}</p>
          <p className="text-xs text-gray-9">{description}</p>
        </div>
      </Flex>
    </Command.Item>
  );
};

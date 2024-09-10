import { DropdownMenu } from "@radix-ui/themes";

export interface DropdownMenuRootProps extends DropdownMenu.RootProps {}
export interface DropdownMenuTriggerProps extends DropdownMenu.TriggerProps {}
export interface DropdownMenuContentProps extends DropdownMenu.ContentProps {}
export interface DropdownMenuItemProps extends DropdownMenu.ItemProps {}

export const DropdownMenuRoot = DropdownMenu.Root;
export const DropdownMenuTrigger = DropdownMenu.Trigger;
export const DropdownMenuContent = DropdownMenu.Content;
export const DropdownMenuItem = DropdownMenu.Item;

"use client";

import { TextInput, TextInputProps } from "../text-input";
import { cn } from "../utils";

export interface SearchInputProps extends Omit<TextInputProps, "readOnly"> {}

export const SearchInput = ({
  placeholder = "Search...",
  className,
  ...props
}: SearchInputProps) => {
  return (
    <TextInput
      readOnly
      placeholder={placeholder}
      className={cn("search-input", className)}
      {...props}
    />
  );
};

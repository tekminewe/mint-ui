"use client";

import { useContext } from "react";
import { TextInput, TextInputProps } from "../text-input";
import { cn } from "../utils";
import { SearchContext } from "./search-root";

export interface SearchInputProps extends Omit<TextInputProps, "readOnly"> {}

export const SearchInput = ({
  placeholder = "Search...",
  className,
  ...props
}: SearchInputProps) => {
  const { onOpenChange } = useContext(SearchContext);

  const handleClick = () => {
    if (onOpenChange) {
      onOpenChange(true);
    }
  };

  return (
    <TextInput
      readOnly
      placeholder={placeholder}
      className={cn("search-input", className)}
      onClick={handleClick}
      {...props}
    />
  );
};

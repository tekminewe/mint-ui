"use client";

import { Checkbox, Flex, Popover } from "@radix-ui/themes";
import { forwardRef, useState } from "react";
import { FormLabel } from "../form";
import { cn } from "../utils";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { Command } from "../command";
import { Badge } from "../badge";
import { SearchIcon, XIcon } from "lucide-react";
import { Spinner } from "../spinner";
import { useDebouncedCallback } from "use-debounce";

export type MultiSelectOption = { label: string; value: string };

export interface MultiSelectProps {
  /**
   * The label of the select
   * @default ""
   */
  label?: string;

  /**
   * The maximum number of items to display in the select
   * @default undefined
   * @example 5
   */
  maxDisplay?: number;

  /**
   * The placeholder of the select
   * @default "Please select an option"
   * @example "Please select an option"
   */
  placeholder?: string;

  /**
   * The options of the select
   * @default []
   * @example [{ label: "Option 1", value: "option1" }, { label: "Option 2", value: "option2" }]
   */
  options?: MultiSelectOption[];

  /**
   * The value of the select
   * @default []
   * @example ["option1", "option2"]
   */
  value?: string[];

  /**
   * The callback function when the value changes
   * @default undefined
   * @example (value) => console.log(value)
   */
  onChange?: (value: string[]) => void;

  /**
   * The callback function when the search value changes when using `async` mode
   * @default undefined
   * @example (value) => console.log(value)
   */
  onSearchValueChange?: (value: string) => void;

  /**
   * Whether the select is in loading state
   * @default false
   * @example true
   */
  isSearching?: boolean;

  /**
   * Whether the select is open
   * @default undefined
   * @example true
   */
  open?: boolean;

  /**
   * The callback function when the select is open
   * @param open
   * @returns
   */
  onOpenChange?: (open: boolean) => void;

  /**
   * Whether to allow creating a new option
   * @default false
   * @example true
   */
  allowCreate?: boolean;

  /**
   * The time to delay in miliseconds before callback for updating the search value
   * @default 200
   * @example 300
   */
  searchChangeDelay?: number;
}

export const MultiSelect = forwardRef<HTMLDivElement, MultiSelectProps>(
  (
    {
      label,
      maxDisplay,
      placeholder = "Please select an option",
      options = [],
      value = [],
      onChange,
      onSearchValueChange = () => {},
      isSearching = false,
      open,
      onOpenChange,
      allowCreate = false,
      searchChangeDelay = 200,
    },
    ref
  ) => {
    const [searchValue, setSearchValue] = useState<string>("");
    const [selectedValues, setSelectedValues] = useState<MultiSelectOption[]>(
      options.filter((o) => value.includes(o.value))
    );
    const handleChange = (checked: boolean, optionValue: string) => {
      let newValues: string[];
      if (checked) {
        newValues = [...value, optionValue];
        setSelectedValues((prev) => [
          ...prev,
          options.find((o) => o.value === optionValue)!,
        ]);
      } else {
        newValues = value.filter((v) => v !== optionValue);
        setSelectedValues((prev) =>
          prev.filter((o) => o.value !== optionValue)
        );
      }

      onChange?.(newValues);
    };

    const debouncedHandleSearchChange = useDebouncedCallback(
      onSearchValueChange,
      searchChangeDelay
    );

    const handleSearchValueChange = (value: string) => {
      setSearchValue(value);
      debouncedHandleSearchChange(value);
    };

    return (
      <Popover.Root onOpenChange={onOpenChange} open={open}>
        <Flex gap="1" direction="column">
          {label && <FormLabel label={label} />}
          <Popover.Trigger>
            <div
              className={cn(
                "flex text-sm items-center gap-1 shadow-[inset_0_0_0_1px_var(--gray-a7)] w-full min-h-[var(--space-6)] pl-3 pr-2 rounded-2",
                {
                  "py-1": value.length > 0,
                }
              )}
              ref={ref}
            >
              <span className="flex-1 text-gray-9 flex items-center gap-1 flex-wrap">
                {value.length > 0 ? (
                  <>
                    {selectedValues
                      .slice(0, maxDisplay ?? selectedValues.length)
                      .map((opt) => {
                        if (!opt) return null;
                        return (
                          <Badge key={opt.value}>
                            {opt.label}
                            <XIcon
                              onClick={(e) => {
                                e.stopPropagation();
                                handleChange(false, opt.value);
                              }}
                              className="cursor-pointer"
                              size={12}
                            />
                          </Badge>
                        );
                      })}
                    {selectedValues.slice(
                      0,
                      maxDisplay ?? selectedValues.length
                    ).length < selectedValues.length && (
                      <Badge>
                        +
                        {selectedValues.length -
                          (maxDisplay ?? selectedValues.length)}{" "}
                        more
                      </Badge>
                    )}
                  </>
                ) : (
                  placeholder
                )}
              </span>
              <ChevronDownIcon />
            </div>
          </Popover.Trigger>
        </Flex>
        <Popover.Content className="p-0">
          <Command>
            <div className="flex items-center gap-2 px-3 h-6 w-full border-b">
              <SearchIcon size={16} />
              <Command.Input
                className="text-sm w-full outline-none"
                placeholder="Search..."
                value={searchValue}
                onValueChange={handleSearchValueChange}
              />
            </div>
            <Command.List>
              {isSearching ? (
                <Command.Empty className="flex justify-center px-3 py-2 text-sm">
                  <Spinner />
                </Command.Empty>
              ) : (
                <>
                  <Command.Empty className="px-3 py-2 text-sm">
                    {allowCreate && searchValue ? (
                      <Flex
                        align="center"
                        gap="2"
                        px="3"
                        className="py-[2px] text-sm"
                      >
                        <Checkbox
                          onCheckedChange={(checked) =>
                            handleChange(!!checked, searchValue ?? "")
                          }
                          checked={value.includes(searchValue ?? "")}
                        />
                        {searchValue}
                      </Flex>
                    ) : (
                      "No results found."
                    )}
                  </Command.Empty>
                  {options.map((option) => (
                    <Command.Item
                      className="flex items-center gap-2 px-3 py-[2px] text-sm"
                      key={option.value}
                    >
                      <Checkbox
                        onCheckedChange={(checked) =>
                          handleChange(!!checked, option.value)
                        }
                        checked={value.includes(option.value)}
                      />
                      {option.label}
                    </Command.Item>
                  ))}
                </>
              )}
            </Command.List>
          </Command>
        </Popover.Content>
      </Popover.Root>
    );
  }
);

MultiSelect.displayName = "MultiSelect";

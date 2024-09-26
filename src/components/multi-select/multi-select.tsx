import { Checkbox, Flex, Popover } from "@radix-ui/themes";
import { forwardRef } from "react";
import { FormLabel } from "../form";
import { cn } from "../utils";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { Command } from "../command";
import { Badge } from "../badge";
import { SearchIcon, XIcon } from "lucide-react";
import { Spinner } from "../spinner";

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
  options?: { label: string; value: string; icon?: React.ReactNode }[];

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
   * The search value
   * @default undefined
   * @example "option"
   */
  searchValue?: string;

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
      searchValue,
      onSearchValueChange,
      isSearching = false,
      open,
      onOpenChange,
    },
    ref
  ) => {
    const handleChange = (checked: boolean, optionValue: string) => {
      if (checked) {
        onChange?.([...value, optionValue]);
      } else {
        onChange?.(value.filter((v) => v !== optionValue));
      }
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
                    {value.slice(0, maxDisplay ?? value.length).map((v) => {
                      const opt = options.find((o) => o.value === v);
                      if (!opt) return null;
                      return (
                        <Badge>
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
                    {value.slice(0, maxDisplay ?? value.length).length <
                      value.length && (
                      <Badge>
                        +{value.length - (maxDisplay ?? value.length)} more
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
                onValueChange={onSearchValueChange}
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
                    No results found.
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

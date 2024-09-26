import { Checkbox, Flex, Popover } from "@radix-ui/themes";
import { forwardRef } from "react";
import { FormLabel } from "../form";
import { cn } from "../utils";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { Command } from "../command";
import { Badge } from "../badge";
import { XIcon } from "lucide-react";

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
   * The maximum number of items that can be selected
   * @default undefined
   * @example 3
   */
  maxSelected?: number;
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
      maxSelected,
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
      <Popover.Root>
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
        <Popover.Content>
          <Command>
            <Command.Input />
            <Command.List>
              <Command.Empty>No results found.</Command.Empty>
              {options.map((option) => (
                <Command.Item
                  className="flex items-center gap-2"
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
            </Command.List>
          </Command>
        </Popover.Content>
      </Popover.Root>
    );
  }
);

MultiSelect.displayName = "MultiSelect";

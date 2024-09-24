"use client";

import {
  CalendarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  Cross1Icon,
} from "@radix-ui/react-icons";
import { Flex, Popover, Text } from "@radix-ui/themes";
import { format } from "date-fns/format";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { Button } from "../button";
import { forwardRef, useState } from "react";
import { TextInput } from "../text-input";
import { FormLabel } from "../form";
import { cn } from "../utils";

export interface DateInputProps {
  /**
   * The selected date.
   * @default undefined
   * @example new Date()
   */
  value?: Date;
  /**
   * Callback when the date is changed.
   *
   * @param date
   * @returns
   */
  onChange?: (date: Date | undefined) => void;
  /**
   * The label for the date picker.
   * @default undefined
   * @example "Post Date"
   */
  label?: string;
  /**
   * The placeholder for the date picker.
   * @default "Please select a date"
   * @example "Select a date"
   */
  placeholder?: string;
  /**
   * Whether to show the time picker.
   * @default false
   * @example true
   */
  showTime?: boolean;
  /**
   * Whether the date picker is required.
   * @default false
   * @example true
   */
  required?: boolean;

  /**
   * The error message to display.
   * @default undefined
   * @example "This field is required"
   */
  error?: string;
  /**
   * Whether the date picker is disabled.
   * @default false
   * @example true
   */
  disabled?: boolean;

  /**
   * Whether the date picker is clearable.
   * @default true
   * @example false
   */
  clearable?: boolean;
}

export const DateInput = forwardRef<HTMLButtonElement, DateInputProps>(
  (
    {
      showTime = false,
      label,
      value,
      onChange,
      placeholder = "Please select a date",
      required = false,
      error,
      disabled,
      clearable = true,
    },
    ref
  ) => {
    const [timeValue, setTimeValue] = useState<string>("00:00");

    const handleTimeChange: React.ChangeEventHandler<HTMLInputElement> = (
      e
    ) => {
      const time = e.target.value;
      if (!value) {
        setTimeValue(time);
        return;
      }
      const [hours, minutes] = time.split(":").map((str) => parseInt(str, 10));
      const newSelectedDate = new Date(
        value.getFullYear(),
        value.getMonth(),
        value.getDate(),
        hours,
        minutes
      );
      onChange?.(newSelectedDate);
      setTimeValue(time);
    };

    const handleDaySelect = (date: Date | undefined) => {
      if (!timeValue || !date) {
        onChange?.(date);
        return;
      }
      const [hours, minutes] = timeValue
        .split(":")
        .map((str) => parseInt(str, 10));
      const newDate = new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        hours,
        minutes
      );
      onChange?.(newDate);
    };

    const handleClear = (e: React.MouseEvent<HTMLOrSVGElement>) => {
      e.stopPropagation();
      e.preventDefault();
      onChange?.(undefined);
    };

    const renderCalendar = () => {
      return (
        <Popover.Root>
          <Flex align="center" width="100%" className="relative">
            <Popover.Trigger>
              <Flex asChild justify="start" width="100%">
                <Button
                  ref={ref}
                  disabled={disabled}
                  style={{ textAlign: "left" }}
                  variant="outline"
                  className={cn(
                    "bg-[--color-surface] hover:bg-[--color-surface] focus:bg-[--color-surface]",
                    {
                      "text-[var(--gray-12)]": value,
                      "shadow-[inset_0_0_0_1px_rgb(206,44,49)]": error,
                    }
                  )}
                  color="gray"
                >
                  <CalendarIcon />
                  <Text
                    as="span"
                    weight="regular"
                    className="pointer-events-none"
                  >
                    {value
                      ? format(value, showTime ? "PPpp" : "PP")
                      : placeholder}
                  </Text>
                </Button>
              </Flex>
            </Popover.Trigger>
            {value && clearable && (
              <Cross1Icon
                className="cursor-pointer absolute right-[12px] text-[--accent]"
                onClick={handleClear}
              />
            )}
          </Flex>

          <Popover.Content>
            <DayPicker
              showOutsideDays
              components={{
                IconLeft: () => <ChevronLeftIcon className="h-4 w-4" />,
                IconRight: () => <ChevronRightIcon className="h-4 w-4" />,
              }}
              mode="single"
              selected={value}
              onSelect={handleDaySelect}
              initialFocus
              footer={
                showTime && (
                  <TextInput
                    mt="4"
                    type="time"
                    value={timeValue}
                    onChange={handleTimeChange}
                  />
                )
              }
            />
          </Popover.Content>
        </Popover.Root>
      );
    };

    return (
      <Flex asChild direction="column" gap="1">
        <label>
          <FormLabel label={label} size="2" required={required} />
          {renderCalendar()}
          <Text size="2" color="red">
            {error}
          </Text>
        </label>
      </Flex>
    );
  }
);

DateInput.displayName = "DatePicker";

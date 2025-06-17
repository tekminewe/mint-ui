"use client";

import { forwardRef, useState, useRef, useEffect } from "react";
import { FiChevronDown, FiX } from "react-icons/fi";
import { FormLabel } from "../form";
import { cn } from "../utils";

export interface SelectProps {
  /**
   * Label for the select
   * @default undefined
   * @example "Country"
   */
  label?: string;

  /**
   * Current selected value
   * @default undefined
   */
  value?: string;

  /**
   * Placeholder text when no option is selected
   * @default "Please select an option"
   */
  placeholder?: string;

  /**
   * Callback when selection changes
   * @default undefined
   */
  onChange?: (value?: string) => void;

  /**
   * Options for the select dropdown
   * @default undefined
   */
  options?: { label: string; value: string }[];

  /**
   * Whether the field is required
   * @default false
   */
  required?: boolean;

  /**
   * Size of the select component
   * @default "md"
   */
  size?: "sm" | "md" | "lg";

  /**
   * Error message
   * @default undefined
   */
  error?: string;

  /**
   * Help text description
   * @default undefined
   */
  description?: string;

  /**
   * Whether the selection can be cleared
   * @default true
   */
  clearable?: boolean;

  /**
   * Additional class names
   * @default undefined
   */
  className?: string;
}

export const Select = forwardRef<HTMLDivElement, SelectProps>(
  (
    {
      error,
      required,
      size = "md",
      value,
      onChange,
      label,
      description,
      options,
      placeholder = "Please select an option",
      clearable = true,
      className,
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const selectedOption = options?.find((option) => option.value === value);

    // Close dropdown when clicking outside
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target as Node)
        ) {
          setIsOpen(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [dropdownRef]);

    const handleClear = (e: React.MouseEvent) => {
      e.stopPropagation();
      onChange?.(undefined);
    };

    // Size classes based on size prop
    const sizeClasses = {
      sm: "py-1 px-2 text-sm",
      md: "py-2 px-3",
      lg: "py-3 px-4 text-lg",
    };

    return (
      <div className="flex flex-col gap-1" ref={ref}>
        <FormLabel label={label} required={required} />
        {description && <p className="text-sm text-gray-500">{description}</p>}
        <div className="relative" ref={dropdownRef}>
          <div
            className={cn(
              "flex items-center justify-between border rounded-md cursor-pointer transition-colors",
              "hover:border-gray-400 dark:border-gray-700 dark:hover:border-gray-600",
              sizeClasses[size],
              error ? "border-red-500" : "border-gray-300",
              className
            )}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="flex-1 truncate">
              {value ? (
                selectedOption?.label || value
              ) : (
                <span className="text-gray-500">{placeholder}</span>
              )}
            </div>
            <div className="flex items-center">
              {clearable && value && (
                <FiX
                  className="cursor-pointer mr-1 text-gray-400 hover:text-gray-600"
                  onClick={handleClear}
                />
              )}
              <FiChevronDown
                className={cn(
                  "transition-transform",
                  isOpen ? "transform rotate-180" : ""
                )}
              />
            </div>
          </div>

          {isOpen && (
            <div className="absolute z-10 w-full mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg max-h-60 overflow-auto">
              {options?.map((option) => (
                <div
                  key={option.value}
                  className={cn(
                    "px-3 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700",
                    value === option.value
                      ? "bg-blue-50 dark:bg-blue-900/30"
                      : ""
                  )}
                  onClick={() => {
                    onChange?.(option.value);
                    setIsOpen(false);
                  }}
                >
                  {option.label}
                </div>
              ))}
              {(!options || options.length === 0) && (
                <div className="px-3 py-2 text-gray-500">
                  No options available
                </div>
              )}
            </div>
          )}
        </div>
        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);

Select.displayName = "Select";

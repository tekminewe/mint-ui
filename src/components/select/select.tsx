'use client';

import { forwardRef, useState, useRef, useEffect } from 'react';
import { FiChevronDown, FiX, FiCheck } from 'react-icons/fi';
import { FormLabel } from '../form';
import { cn } from '../utils';
import {
  TEXT_COLORS,
  SURFACE_COLORS,
  BORDER_COLORS,
} from '../utils/component-colors';

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
  size?: 'sm' | 'md' | 'lg';

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

  /**
   * Whether the dropdown should be open by default
   * @default false
   */
  defaultOpen?: boolean;
}

export const Select = forwardRef<HTMLDivElement, SelectProps>(
  (
    {
      error,
      required,
      size = 'md',
      value,
      onChange,
      label,
      description,
      options,
      placeholder = 'Please select an option',
      clearable = true,
      className,
      defaultOpen = false,
    },
    ref,
  ) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const selectedOption = options?.find((option) => option.value === value);

    // Use the current isOpen state directly

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

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [dropdownRef]);

    const handleClear = (e: React.MouseEvent) => {
      e.stopPropagation();
      onChange?.(undefined);
    };

    // Size classes based on size prop
    const sizeClasses = {
      sm: 'py-1 px-2 text-sm',
      md: 'py-2 px-3',
      lg: 'py-3 px-4 text-lg',
    };

    return (
      <div className={cn('flex flex-col', label && 'gap-1')} ref={ref}>
        {label && <FormLabel label={label} required={required} />}
        {description && (
          <p className={cn('text-sm', TEXT_COLORS.muted)}>{description}</p>
        )}
        <div className="relative" ref={dropdownRef}>
          <div
            className={cn(
              'flex items-center justify-between border rounded-md cursor-pointer transition-colors',
              SURFACE_COLORS.surface,
              TEXT_COLORS.primary,
              'hover:border-neutral-400',
              sizeClasses[size],
              error ? 'border-error-500' : BORDER_COLORS.default,
              className,
            )}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="flex-1 truncate whitespace-nowrap overflow-hidden">
              {value ? (
                selectedOption?.label || value
              ) : (
                <span className={TEXT_COLORS.muted}>{placeholder}</span>
              )}
            </div>
            <div className="flex items-center flex-shrink-0">
              {clearable && value && (
                <FiX
                  className={cn(
                    'cursor-pointer mr-1 transition-colors',
                    TEXT_COLORS.muted,
                    'hover:' + TEXT_COLORS.secondary,
                  )}
                  onClick={handleClear}
                />
              )}
              <FiChevronDown
                className={cn(
                  'transition-transform',
                  TEXT_COLORS.secondary,
                  isOpen ? 'transform rotate-180' : '',
                )}
              />
            </div>
          </div>

          {isOpen && (
            <div
              className={cn(
                'absolute z-10 w-full mt-1 rounded-md shadow-lg max-h-60 overflow-auto',
                SURFACE_COLORS.surface,
                TEXT_COLORS.primary,
                'border',
                BORDER_COLORS.default,
              )}
            >
              {options?.map((option) => (
                <div
                  key={option.value}
                  className={cn(
                    'px-3 py-2 cursor-pointer transition-colors duration-150 flex items-center',
                    'hover:bg-primary-50 hover:text-primary-700',
                    value === option.value
                      ? TEXT_COLORS.primary
                      : TEXT_COLORS.primary,
                  )}
                  onClick={() => {
                    onChange?.(option.value);
                    setIsOpen(false);
                  }}
                >
                  <div className="w-4 mr-2 flex-shrink-0 flex justify-center">
                    {value === option.value && (
                      <FiCheck className={cn(TEXT_COLORS.primary)} size={16} />
                    )}
                  </div>
                  <span>{option.label}</span>
                </div>
              ))}
              {(!options || options.length === 0) && (
                <div className={cn('px-3 py-2', TEXT_COLORS.muted)}>
                  No options available
                </div>
              )}
            </div>
          )}
        </div>
        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
    );
  },
);

Select.displayName = 'Select';

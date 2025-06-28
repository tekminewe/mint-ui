'use client';

import { useContext } from 'react';
import { TextInput, TextInputProps } from '../text-input';
import { cn } from '../utils';
import { SearchContext } from './search-root';

export interface SearchInputProps extends Omit<TextInputProps, 'readOnly'> {}

export const SearchInput = ({
  placeholder = 'Search...',
  className,
  onClick,
  ...props
}: SearchInputProps) => {
  const { onOpenChange } = useContext(SearchContext);

  const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
    if (onOpenChange) {
      onOpenChange(true);
    }
    onClick?.(e);
  };

  return (
    <TextInput
      readOnly
      placeholder={placeholder}
      className={cn(
        '[&_input]:cursor-pointer',
        'cursor-pointer hover:border-neutral-300 dark:hover:border-neutral-400',
        className,
      )}
      onClick={handleClick}
      {...props}
    />
  );
};

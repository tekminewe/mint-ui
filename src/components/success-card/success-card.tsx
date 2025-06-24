import * as React from 'react';
import { CheckCircledIcon } from '@radix-ui/react-icons';
import { cn } from '../utils';

export interface SuccessCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The title of the success card.
   */
  title: string;

  /**
   * The message of the success card.
   */
  message: string;

  /**
   * Additional CSS class names.
   */
  className?: string;
}

export function SuccessCard({
  title,
  message,
  className,
  ...props
}: SuccessCardProps) {
  return (
    <div
      className={cn(
        'max-w-xl w-full mt-6 mx-2 md:mx-0 rounded-xl border border-neutral-200 bg-neutral-50 shadow-sm dark:border-neutral-300 dark:bg-neutral-100',
        className,
      )}
      {...props}
    >
      <div className="flex flex-col items-center justify-center p-6 md:p-8 space-y-4">
        <CheckCircledIcon className="h-24 w-24 text-green-500 dark:text-green-400" />
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-900">
          {title}
        </h2>
        <p className="text-center text-neutral-700 dark:text-neutral-300">
          {message}
        </p>
      </div>
    </div>
  );
}

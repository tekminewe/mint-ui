import {
  CheckCircledIcon,
  CrossCircledIcon,
  ExclamationTriangleIcon,
  InfoCircledIcon,
} from '@radix-ui/react-icons';
import * as React from 'react';
import { cn } from '../utils';

export interface CalloutProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The content of the callout.
   */
  children: React.ReactNode;

  /**
   * The type of the callout.
   * @default "info"
   */
  type?: 'info' | 'warning' | 'error' | 'success';

  /**
   * Additional CSS class names.
   */
  className?: string;
}

export function Callout({
  children,
  type = 'info',
  className,
  ...props
}: CalloutProps) {
  const renderIcon = () => {
    switch (type) {
      case 'info':
        return <InfoCircledIcon className="h-4 w-4 flex-shrink-0" />;
      case 'warning':
        return <ExclamationTriangleIcon className="h-4 w-4 flex-shrink-0" />;
      case 'error':
        return <CrossCircledIcon className="h-4 w-4 flex-shrink-0" />;
      case 'success':
        return <CheckCircledIcon className="h-4 w-4 flex-shrink-0" />;
      default:
        return <InfoCircledIcon className="h-4 w-4 flex-shrink-0" />;
    }
  };

  const getStyles = () => {
    switch (type) {
      case 'info':
        return 'bg-info-50 border-info-200 text-info-700 dark:bg-info-900 dark:border-info-800 dark:text-info-200';
      case 'warning':
        return 'bg-warning-50 border-warning-200 text-warning-700 dark:bg-warning-900 dark:border-warning-800 dark:text-warning-200';
      case 'error':
        return 'bg-error-50 border-error-200 text-error-700 dark:bg-error-900 dark:border-error-800 dark:text-error-200';
      case 'success':
        return 'bg-success-50 border-success-200 text-success-700 dark:bg-success-900 dark:border-success-800 dark:text-success-200';
      default:
        return 'bg-info-50 border-info-200 text-info-700 dark:bg-info-900 dark:border-info-800 dark:text-info-200';
    }
  };

  return (
    <div
      className={cn('flex gap-2 rounded-md border p-4', getStyles(), className)}
      {...props}
    >
      <div className="mt-0.5">{renderIcon()}</div>
      <div>{children}</div>
    </div>
  );
}

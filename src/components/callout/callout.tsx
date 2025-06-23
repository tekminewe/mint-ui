import {
  CheckCircledIcon,
  CrossCircledIcon,
  ExclamationTriangleIcon,
  InfoCircledIcon,
} from "@radix-ui/react-icons";
import * as React from "react";
import { cn } from "../utils";

export interface CalloutProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The content of the callout.
   */
  children: React.ReactNode;

  /**
   * The type of the callout.
   * @default "info"
   */
  type?: "info" | "warning" | "error" | "success";

  /**
   * Additional CSS class names.
   */
  className?: string;
}

export function Callout({
  children,
  type = "info",
  className,
  ...props
}: CalloutProps) {
  const renderIcon = () => {
    switch (type) {
      case "info":
        return <InfoCircledIcon className="h-4 w-4 flex-shrink-0" />;
      case "warning":
        return <ExclamationTriangleIcon className="h-4 w-4 flex-shrink-0" />;
      case "error":
        return <CrossCircledIcon className="h-4 w-4 flex-shrink-0" />;
      case "success":
        return <CheckCircledIcon className="h-4 w-4 flex-shrink-0" />;
      default:
        return <InfoCircledIcon className="h-4 w-4 flex-shrink-0" />;
    }
  };

  const getStyles = () => {
    switch (type) {
      case "info":
        return "bg-blue-50 border-blue-300 text-blue-800 dark:bg-blue-950 dark:border-blue-800 dark:text-blue-300";
      case "warning":
        return "bg-yellow-50 border-yellow-300 text-yellow-800 dark:bg-yellow-950 dark:border-yellow-800 dark:text-yellow-300";
      case "error":
        return "bg-red-50 border-red-300 text-red-800 dark:bg-red-950 dark:border-red-800 dark:text-red-300";
      case "success":
        return "bg-green-50 border-green-300 text-green-800 dark:bg-green-950 dark:border-green-800 dark:text-green-300";
      default:
        return "bg-blue-50 border-blue-300 text-blue-800 dark:bg-blue-950 dark:border-blue-800 dark:text-blue-300";
    }
  };

  return (
    <div
      className={cn("flex gap-2 rounded-md border p-4", getStyles(), className)}
      {...props}
    >
      <div className="mt-0.5">{renderIcon()}</div>
      <div>{children}</div>
    </div>
  );
}

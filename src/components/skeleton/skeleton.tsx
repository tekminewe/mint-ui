import * as React from "react";
import { cn } from "../utils";

export interface SkeletonProps {
  /**
   * The width of the skeleton.
   */
  width?: string | number;

  /**
   * The height of the skeleton.
   */
  height?: string | number;

  /**
   * Additional CSS class names.
   */
  className?: string;
}

export function Skeleton({
  width,
  height,
  className,
  ...props
}: SkeletonProps & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-neutral-200 dark:bg-neutral-800",
        className
      )}
      style={{
        width,
        height,
      }}
      {...props}
    />
  );
}

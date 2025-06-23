import { cn } from "../utils";

export interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The orientation of the separator.
   * @default "horizontal"
   */
  orientation?: "horizontal" | "vertical";

  /**
   * Additional CSS class names.
   */
  className?: string;
}

export function Separator({
  orientation = "horizontal",
  className,
  ...props
}: SeparatorProps) {
  return (
    <div
      className={cn(
        "shrink-0 bg-neutral-300 dark:bg-neutral-700",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      )}
      {...props}
    />
  );
}

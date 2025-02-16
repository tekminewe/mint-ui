import { forwardRef, LabelHTMLAttributes } from "react";
import { cn } from "../utils";

export interface IFormLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  label?: string;
  required?: boolean;
  className?: string;
  htmlFor?: string;
}

export const FormLabel = forwardRef<HTMLLabelElement, IFormLabelProps>(
  ({ label, required, className, ...props }, ref) => {
    return (
      <label ref={ref} {...props} className={cn("mb-1 caption", className)}>
        {label}
        {required && <span className="text-error">{" *"}</span>}
      </label>
    );
  }
);

FormLabel.displayName = "FormLabel";

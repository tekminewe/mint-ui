import { forwardRef, LabelHTMLAttributes } from "react";
import { cn } from "../utils";

export interface FormLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  label?: string;
  required?: boolean;
  className?: string;
  htmlFor?: string;
}

export const FormLabel = forwardRef<HTMLLabelElement, FormLabelProps>(
  ({ label, required, className, ...props }, ref) => {
    return (
      <span ref={ref} {...props} className={cn("mb-1 form-label", className)}>
        {label}
        {required && <span className="text-error">{" *"}</span>}
      </span>
    );
  }
);

FormLabel.displayName = "FormLabel";

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm as useHookForm } from "react-hook-form";
import { ZodSchema } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type UseFormOptionsType<T extends FieldValues> = Parameters<
  typeof useHookForm<T>
>[0] & {
  schema?: ZodSchema;
};

export const useForm = <T extends FieldValues>({
  schema,
  mode = "onBlur",
  ...args
}: UseFormOptionsType<T>) => {
  return useHookForm({
    resolver: schema ? zodResolver(schema) : undefined,
    mode,
    ...args,
  });
};

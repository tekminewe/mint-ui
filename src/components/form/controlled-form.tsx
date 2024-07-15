"use client";

import { useForm } from "../utils-client";
import {
  Control,
  DefaultValues,
  FieldValues,
  SubmitHandler,
  UseFormReset,
} from "react-hook-form";
import { ZodSchema } from "zod";
import { Flex } from "../flex";
import { Button } from "../button";

interface IControlledFormProps<T extends FieldValues> {
  defaultValues?: DefaultValues<T>;
  schema?: ZodSchema<T>;
  children?: (options: {
    control: Control<T, unknown>;
    reset: UseFormReset<T>;
    values: T;
  }) => JSX.Element;
  onSubmit?: SubmitHandler<T>;
  submitButtonLabel?: string;
  submitButtonPosition?: "start" | "end" | "center" | "stretch";
  keepValuesOnSubmit?: boolean;
}

export const ControlledForm = <T extends FieldValues>({
  defaultValues,
  schema,
  children,
  onSubmit,
  submitButtonLabel = "Submit",
  submitButtonPosition = "end",
  keepValuesOnSubmit = false,
}: IControlledFormProps<T>) => {
  const {
    control,
    reset,
    handleSubmit,
    getValues,
    formState: { isSubmitting, isValid, isDirty },
  } = useForm<T>({
    defaultValues,
    schema,
  });

  const getSubmitButtonPosition = () => {
    switch (submitButtonPosition) {
      case "end":
        return "end";
      case "center":
        return "center";
      case "start":
        return "start";
      default:
        return undefined;
    }
  };

  const preSubmit: SubmitHandler<T> = async (data) => {
    try {
      await onSubmit?.(data);
      reset(keepValuesOnSubmit ? data : undefined);
    } catch (e) {
      // Do nothing
    }
  };

  return (
    <form onSubmit={onSubmit ? handleSubmit(preSubmit) : undefined}>
      <fieldset disabled={isSubmitting}>
        <Flex direction="column" gap="4">
          {children?.({
            control,
            reset,
            values: getValues(),
          })}
          <Flex justify={getSubmitButtonPosition()}>
            <Button
              disabled={!isValid || !isDirty}
              loading={isSubmitting}
              type="submit"
            >
              {submitButtonLabel}
            </Button>
          </Flex>
        </Flex>
      </fieldset>
    </form>
  );
};

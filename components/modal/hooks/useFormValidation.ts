import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, UseFormReturn, FieldValues } from "react-hook-form";
import { ZodTypeAny } from "zod";

type UseFormValidationOptions = {
  mode?: "onChange" | "onBlur" | "onSubmit" | "onTouched";
  reValidateMode?: "onChange" | "onBlur" | "onSubmit";
};

export function useFormValidation<T extends FieldValues>(
  schema: ZodTypeAny,
  onSubmitCallback: (data: T) => void | Promise<void>,
  options?: UseFormValidationOptions
): UseFormReturn<T> & { onSubmit: (e?: React.BaseSyntheticEvent) => Promise<void> } {
  const methods = useForm<T>({
    resolver: zodResolver(schema),
    mode: options?.mode || "onTouched",
    reValidateMode: options?.reValidateMode || "onChange",
  });

  const onSubmit = methods.handleSubmit(onSubmitCallback);

  return { ...methods, onSubmit };
}

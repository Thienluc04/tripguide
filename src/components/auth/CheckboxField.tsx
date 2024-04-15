import { cn } from "@/lib/utils";
import { ComponentProps, HTMLInputTypeAttribute, ReactNode } from "react";
import {
  Control,
  FieldValues,
  Path,
  PathValue,
  useController,
} from "react-hook-form";
import { Checkbox } from "../ui";

export interface CheckboxFilterProps<T extends FieldValues>
  extends ComponentProps<"input"> {
  name: Path<T>;
  control: Control<T>;
  label?: string | ReactNode;
  type?: HTMLInputTypeAttribute;
  messageError?: string;
}

export function CheckboxField<T extends FieldValues>({
  name,
  control,
  label,
  messageError,
  className,
  ...props
}: CheckboxFilterProps<T>) {
  const { field } = useController({
    name,
    control,
    defaultValue: false as PathValue<T, Path<T>>,
  });

  return (
    <div className={className}>
      <label className={cn("flex items-center gap-3", messageError && "mb-2")}>
        <Checkbox {...field} {...props} />
        {typeof label === "string" ? <span>{label}</span> : label}
      </label>
      {messageError && (
        <p className="text-sm font-medium text-red57">{messageError}</p>
      )}
    </div>
  );
}

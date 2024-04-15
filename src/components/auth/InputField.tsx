"use client";

import { CloseEyeIcon, OpenEyeIcon, WarningIcon } from "@/components/icons";
import { cn } from "@/lib/utils";
import { ComponentProps, HTMLInputTypeAttribute, useState } from "react";
import {
  Control,
  FieldValues,
  Path,
  PathValue,
  useController,
} from "react-hook-form";
import { twMerge } from "tailwind-merge";

interface InputFieldProps<T extends FieldValues>
  extends ComponentProps<"label"> {
  name: Path<T>;
  control: Control<T>;
  label?: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  messageError?: string;
}

export function InputField<T extends FieldValues>({
  name,
  control,
  label,
  placeholder,
  type = "text",
  className = "",
  messageError,
}: InputFieldProps<T>) {
  const { field } = useController({
    name,
    control,
    defaultValue: "" as PathValue<T, Path<T>>,
  });

  const [showPass, setShowPass] = useState<boolean>(false);

  return (
    <label className={twMerge("flex flex-col gap-[10px]", className)}>
      <span className="text-sm dark:text-grayFD">{label}</span>
      <div className="relative flex">
        <input
          type={showPass ? "text" : type}
          className={cn(
            "h-12 w-full rounded-lg bg-grayF3 px-[14px] dark:bg-black29 dark:text-grayF3 dark:placeholder:text-gray8B",
            messageError && "border border-red57 bg-white",
            type === "password" && "pr-11",
          )}
          placeholder={placeholder}
          {...field}
        />
        {type === "password" && (
          <>
            {!showPass ? (
              <OpenEyeIcon
                className="absolute right-[14px] top-2/4 -translate-y-2/4 cursor-pointer text-grayC3"
                onClick={() => setShowPass(true)}
              />
            ) : (
              <CloseEyeIcon
                className="absolute right-[14px] top-2/4 -translate-y-2/4 cursor-pointer text-grayC3"
                onClick={() => setShowPass(false)}
              />
            )}
          </>
        )}
      </div>
      {messageError && (
        <div className="flex items-center gap-2">
          <WarningIcon className=" text-red57" />
          <p className="text-[10px] font-medium text-red57">{messageError}</p>
        </div>
      )}
    </label>
  );
}

"use client";

import { cn } from "@/lib/utils";
import clsx from "clsx";
import { ComponentProps, useState } from "react";

interface CheckboxProps extends ComponentProps<"input"> {
  label?: string;
}

export function Checkbox({ label, className, ...props }: CheckboxProps) {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <label className={cn("cursor-pointer", label && "flex items-center gap-3")}>
      <span>
        <input
          type="checkbox"
          checked={checked}
          name=""
          id=""
          className={cn("hidden", className)}
          {...props}
          onChange={() => setChecked(!checked)}
        />
        <span
          className={clsx(
            checked
              ? "bg-primary text-white dark:text-black"
              : "border border-grayF3 bg-grayF6 dark:border-black44 dark:bg-transparent",
            "inline-flex h-4 w-4 items-center justify-center rounded",
          )}
        >
          {checked && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </span>
      </span>
      {label && <span className="text-sm dark:text-grayC3">{label}</span>}
    </label>
  );
}

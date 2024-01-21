import * as React from "react";

import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, iconLeft, iconRight, type, ...props }, ref) => {
    const Comp = !iconLeft && !iconRight ? Slot : "div";

    return (
      <Comp className="relative w-full">
        <>
          {iconLeft && (
            <span className="absolute left-5 top-2/4 -translate-y-2/4">
              {iconLeft}
            </span>
          )}

          <input
            type={type}
            className={cn(
              "border-input placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border border-grayEA bg-grayF6 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:border-primary focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50",
              className,
            )}
            ref={ref}
            id={props.name}
            {...props}
          />

          {iconRight && (
            <span className="absolute right-5 top-2/4 -translate-y-2/4">
              {iconRight}
            </span>
          )}
        </>
      </Comp>
    );
  },
);
Input.displayName = "Input";

export { Input };

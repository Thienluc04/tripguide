import { type ComponentPropsWithoutRef } from "react";

import { Input } from "../input";
import { Label } from "../label";
import { cn } from "@/lib/utils";

type InputWithLabelProps = ComponentPropsWithoutRef<"input">;

export const InputWithLabel = ({
  className,
  children,
  ...props
}: InputWithLabelProps) => {
  const renderChildren = () => {
    if (typeof children === "string") {
      return (
        <>
          <InputWithLabel.Label
            htmlFor={props.name}
            className="mb-3 block font-bold text-gray8B dark:text-grayC3"
          >
            {children}
          </InputWithLabel.Label>
          <InputWithLabel.Input
            className="h-12 w-[376px] rounded-[10px] border-grayF3 px-5 dark:border-black44 dark:text-grayC3"
            {...props}
          />
        </>
      );
    }

    return children;
  };

  return (
    <div className={cn("flex flex-col justify-center", className)}>
      {renderChildren()}
    </div>
  );
};

InputWithLabel.Input = Input;

InputWithLabel.Label = Label;

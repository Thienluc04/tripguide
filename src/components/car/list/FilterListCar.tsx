import { ChevronDownIcon } from "@/components/icons";
import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

interface FilterListCarProps extends ComponentProps<"div"> {}

export function FilterListCar({ className, ...props }: FilterListCarProps) {
  return (
    <div
      className={cn(
        "mb-[30px] mt-[50px] flex items-center justify-end gap-2 ",
        className,
      )}
      {...props}
    >
      <p className="text-sm text-gray91">Sort by</p>
      <div className="flex cursor-pointer items-center gap-2 rounded-md border border-grayC3 px-3 py-2">
        <p className="text-sm">Best match</p>
        <ChevronDownIcon className="text-gray8B" />
      </div>
    </div>
  );
}

import { cn } from "@/lib/utils";
import { ComponentProps } from "react";
import { ChevronRightIcon } from "@/components/icons";

interface BreadcrumbProps extends ComponentProps<"div"> {
  list: string[];
  last: string;
}

export function Breadcrumb({
  list,
  last,
  className,
  ...props
}: BreadcrumbProps) {
  return (
    <div
      className={cn("flex items-center gap-[10px] pt-10", className)}
      {...props}
    >
      {list.map((item, index) => (
        <p
          key={index}
          className="flex items-center gap-2 text-sm dark:text-grayF3"
        >
          {item}
          <ChevronRightIcon />
        </p>
      ))}
      <p className="text-sm text-gray8B dark:text-gray8B">{last}</p>
    </div>
  );
}

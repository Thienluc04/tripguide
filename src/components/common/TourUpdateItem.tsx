import { ComponentProps } from "react";
import { PencilWriteIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

interface TourUpdateItemProps extends ComponentProps<"div"> {
  type?: "date" | "traveler";
}

export function TourUpdateItem({
  type = "date",
  className,
  ...props
}: TourUpdateItemProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-between rounded-2xl bg-grayF6 px-5 py-2 dark:bg-black29",
        className,
      )}
      {...props}
    >
      <div>
        <h3 className="font-medium leading-6 text-black dark:text-grayC3">
          {type === "date" ? "Date" : "Traveler"}
        </h3>
        <p className="font-medium leading-6 text-gray8B dark:text-gray90">
          {type === "date" ? "June 27 - 30, 2020" : "1 Passenger"}
        </p>
      </div>
      <PencilWriteIcon className="text-gray8B" />
    </div>
  );
}

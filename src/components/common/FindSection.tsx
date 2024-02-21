import { cn } from "@/lib/utils";
import { ComponentProps } from "react";
import { FindItem } from ".";

interface FindSectionProps extends ComponentProps<"div"> {
  title?: string;
}

export function FindSection({
  className,
  title = "Find 250+ Hotels",
  ...props
}: FindSectionProps) {
  return (
    <div className={cn("container", className)} {...props}>
      <div className="mb-[66px] flex items-center justify-between px-10 py-5 dark:bg-black29">
        <h2 className="text-[36px] font-bold leading-[44px] text-black dark:text-grayFD">
          {title}
        </h2>
        <div className="flex items-center gap-8">
          <div className="rounded-3xl bg-blueE6 px-6 py-[6px] text-sm font-bold text-white">
            Popular
          </div>
          <div className="text-sm dark:text-grayC3">Guest Ratings</div>
          <div className="text-sm dark:text-grayC3">Price</div>
          <div className="text-sm dark:text-grayC3">Map View</div>
        </div>
      </div>
      <div className="flex gap-[30px]">
        <FindItem image="/images/hotels/find-1.png" />
        <FindItem image="/images/hotels/find-2.png" />
        <FindItem image="/images/hotels/find-3.png" />
      </div>
    </div>
  );
}

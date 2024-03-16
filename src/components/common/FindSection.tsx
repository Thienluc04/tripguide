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
    <div className={cn("container w-[calc(100%-40px)]", className)} {...props}>
      <div className="mb-[30px] items-center justify-between px-4 py-5 dark:bg-black29 xl:mb-[66px] xl:flex xl:px-10">
        <h2 className="mb-3 text-center text-[30px] font-bold leading-10 text-black dark:text-grayFD xl:mb-0 xl:text-left xl:text-[36px] xl:leading-[44px]">
          {title}
        </h2>
        <div className="flex items-center justify-between xl:justify-start xl:gap-8">
          <div className="rounded-3xl bg-blueE6 px-6 py-[6px] text-xs font-bold text-white xl:text-sm">
            Popular
          </div>
          <div className="text-xs dark:text-grayC3 xl:text-sm">
            Guest Ratings
          </div>
          <div className="text-xs dark:text-grayC3 xl:text-sm">Price</div>
          <div className="text-xs dark:text-grayC3 xl:text-sm">Map View</div>
        </div>
      </div>
      <div className="flex flex-col gap-[30px] xl:flex-row">
        <FindItem image="/images/hotels/find-1.png" />
        <FindItem image="/images/hotels/find-2.png" />
        <FindItem image="/images/hotels/find-3.png" />
      </div>
    </div>
  );
}

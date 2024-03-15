import { listBestPlace } from "@/constants/hotel.const";
import { BestPlaceItem } from "@/components/hotel";
import { ComponentProps } from "react";
import { cn } from "@/lib/utils";

interface BestPlaceSectionProps extends ComponentProps<"section"> {}

export function BestPlaceSection({
  className,
  ...props
}: BestPlaceSectionProps) {
  return (
    <section
      className={cn("container pt-[30px] xl:pt-6", className)}
      {...props}
    >
      <h2 className="mb-3 px-5 text-center text-[30px] font-bold leading-10 text-black2F dark:text-grayF6 xl:px-0 xl:text-5xl xl:leading-none">
        Search a best place in the world
      </h2>
      <p className="mx-auto mb-[30px] max-w-[268px] text-center text-sm leading-5 text-gray8B dark:text-gray90 xl:mb-[65px] xl:max-w-[594px] xl:text-base xl:leading-6">
        Whether you’re looking for places for a vacation. We are here to Guide
        you about the details you need to check in and ease your trips in
        advance
      </p>
      <div className="mx-5 flex gap-5 overflow-x-auto xl:mx-0 xl:flex-wrap xl:gap-[30px]">
        {listBestPlace.map((item, index) => (
          <BestPlaceItem
            key={index}
            title={item.title}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </section>
  );
}

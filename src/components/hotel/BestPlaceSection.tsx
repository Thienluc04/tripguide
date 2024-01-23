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
    <section className={cn("container pt-6", className)} {...props}>
      <h2 className="mb-3 text-center text-5xl font-bold text-black2F">
        Search a best place in the world
      </h2>
      <p className="mx-auto mb-[65px] max-w-[594px] text-center leading-6 text-gray8B">
        Whether you’re looking for places for a vacation. We are here to Guide
        you about the details you need to check in and ease your trips in
        advance
      </p>
      <div className="flex flex-wrap gap-[30px]">
        {listBestPlace.map((item, index) => (
          <BestPlaceItem
            key={index}
            title={item.title}
            description={item.description}
            image={item.image}
          ></BestPlaceItem>
        ))}
      </div>
    </section>
  );
}

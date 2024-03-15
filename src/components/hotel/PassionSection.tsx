import { listPassion } from "@/constants/hotel.const";
import { PassionItem } from "./PassionItem";
import { ComponentProps } from "react";
import { cn } from "@/lib/utils";

interface PassionSectionProps extends ComponentProps<"section"> {}

export function PassionSection({ className, ...props }: PassionSectionProps) {
  return (
    <section className={cn("container", className)} {...props}>
      <h2 className="mb-3 text-center text-[30px] font-bold text-black dark:text-white xl:text-left xl:text-5xl">
        Travel Your Passion
      </h2>
      <p className="mx-auto mb-[30px] max-w-[236px] text-sm font-medium  text-gray8B xl:mx-0 xl:mb-[42px] xl:max-w-none xl:text-2xl">
        Most Brilliant reasons Entrada should be your one-stop-shop!
      </p>
      <div className="mx-5 flex gap-5 overflow-x-auto xl:mx-0 xl:gap-[30px]">
        {listPassion.map((item, index) => (
          <PassionItem
            key={index}
            image={item.image}
            rating={item.rating}
            title={item.title}
            totalRating={item.totalRating}
          />
        ))}
      </div>
    </section>
  );
}

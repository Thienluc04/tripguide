import { listPassion } from "@/constants/hotel.const";
import { PassionItem } from "./PassionItem";
import { ComponentProps } from "react";
import { cn } from "@/lib/utils";

interface PassionSectionProps extends ComponentProps<"section"> {}

export function PassionSection({ className, ...props }: PassionSectionProps) {
  return (
    <section className={cn("container", className)} {...props}>
      <h2 className="mb-3 text-5xl font-bold text-black dark:text-white">
        Travel Your Passion
      </h2>
      <p className="mb-[42px] text-2xl font-medium text-gray8B">
        Most Brilliant reasons Entrada should be your one-stop-shop!
      </p>
      <div className="flex gap-[30px]">
        {listPassion.map((item, index) => (
          <PassionItem
            key={index}
            image={item.image}
            rating={item.rating}
            title={item.title}
            totalRating={item.totalRating}
          ></PassionItem>
        ))}
      </div>
    </section>
  );
}

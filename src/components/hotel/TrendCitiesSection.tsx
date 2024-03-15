import { listCity } from "@/constants/hotel.const";
import { CityItem } from ".";
import { ComponentProps } from "react";
import { cn } from "@/lib/utils";

interface TrendCitiesSectionProps extends ComponentProps<"section"> {}

export function TrendCitiesSection({
  className,
  ...props
}: TrendCitiesSectionProps) {
  return (
    <section
      className={cn(
        "bg-[#F5F5F5] py-5  dark:bg-black1B xl:py-[60px]",
        className,
      )}
      {...props}
    >
      <h2 className="mb-4 text-center text-[30px] font-bold text-black29 dark:text-white xl:text-5xl">
        Trending cites
      </h2>
      <p className="mx-auto mb-[30px] max-w-[150px] text-center text-sm dark:text-grayC3 xl:mx-0 xl:mb-[50px] xl:max-w-none xl:text-2xl">
        The most searched for cities on TripGuide
      </p>
      <div className="mx-auto flex max-w-[1098px] flex-wrap items-center justify-center gap-x-[30px] gap-y-[35px]">
        {listCity.map((item, index) => (
          <CityItem
            key={index}
            image={item.image}
            price={item.price}
            rating={item.rating}
            title={item.title}
            totalRating={item.totalRating}
          ></CityItem>
        ))}
      </div>
    </section>
  );
}

"use client";

import { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import { TrendingItem } from ".";
import { TrendItem } from "@/types/general";
import Slider from "react-slick";

interface TrendingSectionProps extends ComponentProps<"div"> {
  title?: string;
  data: TrendItem[];
}

const settings = {
  dots: false,
  arrows: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export function TrendingSection({
  className,
  title = "Trending Hotels",
  data,
}: TrendingSectionProps) {
  return (
    <div className={cn("container", className)}>
      <h2 className="mb-10 text-[30px] font-bold leading-10 text-black29 dark:text-white xl:text-5xl xl:leading-[70px]">
        {title}
      </h2>
      <div className="hidden gap-[30px] xl:flex">
        {data.map((item, index) => (
          <TrendingItem
            key={index}
            image={item.image}
            name={item.name}
            rating={item.rating}
            totalReviews={item.totalReviews}
          />
        ))}
      </div>
      <Slider {...settings} className="block overflow-hidden xl:hidden">
        {data.map((item, index) => (
          <TrendingItem
            key={index}
            image={item.image}
            name={item.name}
            rating={item.rating}
            totalReviews={item.totalReviews}
          />
        ))}
      </Slider>
    </div>
  );
}

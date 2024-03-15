"use client";

import { ExploreItem } from "@/components/hotel";
import { listExplore } from "@/constants/hotel.const";
import Slider from "react-slick";
import { NextArrowSlick, PrevArrowSlick } from "../common";
import { ComponentProps } from "react";
import { cn } from "@/lib/utils";

interface ExploreSectionProps extends ComponentProps<"section"> {}

const settings = {
  dots: false,
  arrows: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: <PrevArrowSlick />,
  nextArrow: <NextArrowSlick />,
};

export function ExploreSection({ className, ...props }: ExploreSectionProps) {
  return (
    <section className={cn("container", className)} {...props}>
      <div className="mb-[30px] items-center justify-between xl:mb-12 xl:flex">
        <div>
          <h2 className="mb-3 text-center text-[30px] font-bold leading-[42px] text-black dark:text-white xl:text-left xl:text-5xl xl:leading-none">
            Explore The World
          </h2>
          <p className="text-center text-sm text-gray90 dark:text-grayC3 xl:text-left xl:text-base">
            10,788 beautiful places to go
          </p>
        </div>
      </div>
      <Slider
        {...settings}
        className="explore hidden cursor-default overflow-hidden xl:block"
      >
        {listExplore.map((item, index) => (
          <ExploreItem
            key={index}
            address={item.address}
            description={item.description}
            image={item.image}
            price={item.price}
            rating={item.rating}
            roomsAvailable={item.roomsAvailable}
            title={item.title}
            totalRating={item.totalRating}
          />
        ))}
      </Slider>
      <div className="mx-5 flex gap-5 overflow-x-auto xl:hidden">
        {listExplore.map((item, index) => (
          <ExploreItem
            key={index}
            address={item.address}
            description={item.description}
            image={item.image}
            price={item.price}
            rating={item.rating}
            roomsAvailable={item.roomsAvailable}
            title={item.title}
            totalRating={item.totalRating}
          />
        ))}
      </div>
    </section>
  );
}

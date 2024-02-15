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
      <div className="mb-12 flex items-center justify-between">
        <div>
          <h2 className="mb-3 text-5xl font-bold text-black dark:text-white">
            Explore The World
          </h2>
          <p className="text-gray90 dark:text-grayC3">
            10,788 beautiful places to go
          </p>
        </div>
      </div>
      <Slider {...settings} className="explore cursor-default overflow-hidden">
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
          ></ExploreItem>
        ))}
      </Slider>
    </section>
  );
}

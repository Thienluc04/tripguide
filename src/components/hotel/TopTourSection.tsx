"use client";

import { listTour } from "@/constants/hotel.const";
import Slider from "react-slick";
import { TopTourItem } from "./TopTourItem";
import { NextArrowSlick, PrevArrowSlick } from "@/components/common";
import { ComponentProps } from "react";
import { cn } from "@/lib/utils";

interface TopTourSectionProps extends ComponentProps<"section"> {}

const settings = {
  dots: false,
  arrows: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: <PrevArrowSlick />,
  nextArrow: <NextArrowSlick />,
};

export function TopTourSection({ className, ...props }: TopTourSectionProps) {
  return (
    <section className={cn("container", className)} {...props}>
      <div className="mb-[30px] items-center justify-between xl:mb-[60px] xl:flex">
        <div>
          <h2 className="mb-3 text-center text-[30px] font-bold leading-[42px] text-black dark:text-white xl:text-left xl:text-5xl xl:leading-none">
            Top Tour
          </h2>
          <p className="text-center text-gray90 dark:text-grayC3 xl:text-left">
            Keep calm & travel on
          </p>
        </div>
      </div>
      <Slider {...settings} className="hidden overflow-hidden xl:block">
        {listTour.map((item, index) => (
          <TopTourItem
            key={index}
            image={item.image}
            name={item.name}
            title={item.title}
            description={item.description}
          ></TopTourItem>
        ))}
      </Slider>
      <div className="flex flex-col gap-5 xl:hidden">
        {listTour.map((item, index) => (
          <TopTourItem
            key={index}
            image={item.image}
            name={item.name}
            title={item.title}
            description={item.description}
          ></TopTourItem>
        ))}
      </div>
    </section>
  );
}

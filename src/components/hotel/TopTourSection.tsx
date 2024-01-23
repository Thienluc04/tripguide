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
      <div className="mb-[60px] flex items-center justify-between">
        <div>
          <h2 className="mb-3 text-5xl font-bold text-black">Top Tour</h2>
          <p className="text-gray90">Keep calm & travel on</p>
        </div>
      </div>
      <Slider {...settings} className="overflow-hidden">
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
    </section>
  );
}

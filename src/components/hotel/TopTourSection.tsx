'use client';

import { listTour } from '@/constants/hotel.constant';
import Slider from 'react-slick';
import { TopTourItem } from './TopTourItem';
import { NextArrowSlick, PrevArrowSlick } from '@/components/common';

interface TopTourSectionProps {}

const settings = {
  dots: false,
  arrows: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: <PrevArrowSlick />,
  nextArrow: <NextArrowSlick />,
};

export function TopTourSection(props: TopTourSectionProps) {
  return (
    <section className="container">
      <div className="flex justify-between items-center mb-[60px]">
        <div>
          <h2 className="text-black text-5xl font-bold mb-3">Top Tour</h2>
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

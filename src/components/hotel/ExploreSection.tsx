'use client';

import { ExploreItem } from '@/components/hotel';
import { listExplore } from '@/constants/hotel.constant';
import Slider from 'react-slick';
import { NextArrowSlick, PrevArrowSlick } from '../common';

interface ExploreSectionProps {}

const settings = {
  dots: false,
  arrows: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: <PrevArrowSlick />,
  nextArrow: <NextArrowSlick />,
};

export function ExploreSection(props: ExploreSectionProps) {
  return (
    <section className="container">
      <div className="flex justify-between items-center mb-12">
        <div>
          <h2 className="text-black text-5xl font-bold mb-3">
            Explore The World
          </h2>
          <p className="text-gray90">10,788 beautiful places to go</p>
        </div>
        {/* <div className="flex gap-[10px]">
          <div className="w-9 h-9 rounded-full bg-grayF6 flex items-center justify-center text-grayC3">
            <ChevronLeftIcon />
          </div>
          <div className="w-9 h-9 rounded-full bg-grayEC flex items-center justify-center text-gray8B">
            <ChevronRightIcon />
          </div>
        </div> */}
      </div>
      <Slider {...settings} className="overflow-hidden cursor-default explore">
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

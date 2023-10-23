import { NavbarFilter, SidebarFilter } from '@/components/common';
import { HotelItem } from '@/components/hotel';
import { ChevronRightIcon } from '@/components/icons';
import Image from 'next/image';

export default function ListHotelPage() {
  return (
    <div className="">
      <div className="flex gap-2 items-center hotel-container !mt-10 !mb-20">
        <p className="text-sm">Home</p>
        <ChevronRightIcon />
        <p className="text-grayC3 text-sm">Hotel list</p>
      </div>
      <NavbarFilter className="container !mb-[70px]" hiddenLinks />
      <div className="flex gap-10 hotel-container">
        <SidebarFilter />
        <div className="flex flex-col gap-[50px]">
          <HotelItem
            hotel={{
              image: '/images/hotels/hotel-1.png',
              title: 'Zuich, Switzerland',
              rating: 4.8,
              totalRate: 122,
              location: 'Zuich town, Switzerland',
              place: 'Zuich Hotel, Switzerland',
              date: '15.05.2021-16.05.2021',
              plane: 'Depature from zuich',
            }}
          />
          <HotelItem
            hotel={{
              image: '/images/hotels/hotel-2.png',
              title: 'Zuich, Switzerland',
              rating: 4.8,
              totalRate: 122,
              location: 'Zuich town, Switzerland',
              place: 'Zuich Hotel, Switzerland',
              date: '15.05.2021-16.05.2021',
              plane: 'Depature from zuich',
            }}
          />
          <HotelItem
            hotel={{
              image: '/images/hotels/hotel-3.png',
              title: 'Zuich, Switzerland',
              rating: 4.8,
              totalRate: 122,
              location: 'Zuich town, Switzerland',
              place: 'Zuich Hotel, Switzerland',
              date: '15.05.2021-16.05.2021',
              plane: 'Depature from zuich',
            }}
          />
          <div className="rounded-3xl flex gap-4 items-center justify-center mx-auto border border-grayC3 w-[176px] p-[10px]">
            <Image
              src={'/images/loading.png'}
              alt="loading"
              width={18}
              height={18}
            />
            <span className="font-medium leading-6 text-black">View All</span>
          </div>
        </div>
      </div>
    </div>
  );
}

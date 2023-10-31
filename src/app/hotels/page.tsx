import { Breadcrumb, NavbarFilter, SidebarFilter } from '@/components/common';
import { HotelItem } from '@/components/hotel';
import Image from 'next/image';

export default function ListHotelPage() {
  return (
    <div>
      <div className="container">
        <Breadcrumb list={['Home']} last="Hotel list" className="mb-[60px]" />
        <NavbarFilter className="container !mb-[70px]" hiddenLinks />
      </div>

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

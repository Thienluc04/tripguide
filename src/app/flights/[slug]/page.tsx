import { Breadcrumb, NavbarFilter, TrendingSection } from '@/components/common';
import { FlightDetailSidebar } from '@/components/flight';
import { FlightDetailContent } from '@/components/flight/detail';
import { TrendItem } from '@/types/general.type';

interface FlightDetailPageProps {}

export default function FlightDetailPage(props: FlightDetailPageProps) {
  const listTrending: TrendItem[] = [
    {
      image: '/images/flights/trending-1.png',
      name: 'Chennai Flights',
      rating: 4.8,
      totalReviews: 122,
    },
    {
      image: '/images/flights/trending-2.png',
      name: 'Bangalore Flights',
      rating: 4.8,
      totalReviews: 122,
    },
    {
      image: '/images/flights/trending-3.png',
      name: 'Dubai Flights',
      rating: 4.8,
      totalReviews: 122,
    },
    {
      image: '/images/flights/trending-4.png',
      name: 'Sydney Flights',
      rating: 4.8,
      totalReviews: 122,
    },
  ];
  return (
    <>
      <div className="bg-grayF6">
        <div className="container">
          <Breadcrumb
            list={['Home']}
            last="Flight"
            className="mt-0 pt-10 -mb-14"
          />
          <NavbarFilter
            className="container !mb-[130px] translate-y-2/4"
            type="flight"
            hiddenLinks
          />
        </div>
      </div>
      <div className="flex gap-[30px] justify-center items-start pt-10 mb-[70px]">
        <FlightDetailContent />
        <FlightDetailSidebar />
      </div>
      <div className="container">
        <TrendingSection data={listTrending} title="Trending Flight" />
      </div>
    </>
  );
}

import { Breadcrumb, NavbarFilter, TrendingSection } from "@/components/common";
import { FlightDetailSidebar } from "@/components/flight";
import { FlightDetailContent } from "@/components/flight/detail";
import { TrendItem } from "@/types/general";

interface FlightDetailPageProps {}

export default function FlightDetailPage(props: FlightDetailPageProps) {
  const listTrending: TrendItem[] = [
    {
      image: "/images/flights/trending-1.png",
      name: "Chennai Flights",
      rating: 4.8,
      totalReviews: 122,
    },
    {
      image: "/images/flights/trending-2.png",
      name: "Bangalore Flights",
      rating: 4.8,
      totalReviews: 122,
    },
    {
      image: "/images/flights/trending-3.png",
      name: "Dubai Flights",
      rating: 4.8,
      totalReviews: 122,
    },
    {
      image: "/images/flights/trending-4.png",
      name: "Sydney Flights",
      rating: 4.8,
      totalReviews: 122,
    },
  ];
  return (
    <>
      <div className="bg-grayF6 dark:bg-black">
        <div className="container">
          <Breadcrumb
            list={["Home", "Flights"]}
            last="Flight Details"
            className="-mb-14 mt-0 pt-10"
          />
          <NavbarFilter
            className="container !mb-[130px] translate-y-2/4"
            type="flight"
            hiddenLinks
          />
        </div>
      </div>
      <div className="mb-[70px] flex items-start justify-center gap-[30px] pt-10">
        <FlightDetailContent />
        <FlightDetailSidebar />
      </div>
      <div className="container">
        <TrendingSection data={listTrending} title="Trending Flight" />
      </div>
    </>
  );
}

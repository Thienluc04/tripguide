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
      <div className="bg-grayF6 px-5  dark:bg-black xl:px-0">
        <div className="container hidden xl:block">
          <Breadcrumb
            list={["Home", "Flights"]}
            last="Flight Details"
            className="-mb-14 mt-0 pt-10"
          />
          <NavbarFilter
            className="container xl:!mb-[130px] xl:translate-y-2/4"
            type="flight"
            hiddenLinks
          />
        </div>
      </div>
      <div className="mb-[70px] flex flex-col gap-[30px] pt-10 xl:flex-row xl:items-start xl:justify-center">
        <FlightDetailContent />
        <FlightDetailSidebar />
      </div>
      <div className="container w-[calc(100%-40px)] xl:w-auto">
        <TrendingSection data={listTrending} title="Trending Flight" />
      </div>
    </>
  );
}

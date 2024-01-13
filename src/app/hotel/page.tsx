import {
  BestPlaceSection,
  ExploreSection,
  FeaturedDestinationsSection,
  PassionSection,
  TopTourSection,
  TrendCitiesSection,
} from "@/components/hotel";

export default function HotelPage() {
  return (
    <div className="flex flex-col gap-[70px] bg-grayFB pt-[124px]">
      <BestPlaceSection />
      <FeaturedDestinationsSection />
      <TopTourSection />
      <ExploreSection />
      <TrendCitiesSection />
      <PassionSection />
    </div>
  );
}

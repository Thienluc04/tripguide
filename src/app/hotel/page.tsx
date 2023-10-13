import {
  BestPlaceSection,
  ExploreSection,
  FeaturedDestinationsSection,
  PassionSection,
  TopTourSection,
  TrendCitiesSection,
} from '@/components/hotel';

export default function HotelPage() {
  return (
    <div className="pt-[124px] flex flex-col gap-[70px]">
      <BestPlaceSection />
      <FeaturedDestinationsSection />
      <TopTourSection />
      <ExploreSection />
      <TrendCitiesSection />
      <PassionSection />
    </div>
  );
}

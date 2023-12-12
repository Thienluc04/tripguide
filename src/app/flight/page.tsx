import { ExploreWorldSection } from '@/components/flight';
import {
  BestPlaceSection,
  FeaturedDestinationsSection,
  TrendCitiesSection,
} from '@/components/hotel';

interface FlightPageProps {}

export default function FlightPage(props: FlightPageProps) {
  return (
    <div className="pt-[124px] flex flex-col gap-[70px] bg-grayFB">
      <BestPlaceSection />
      <FeaturedDestinationsSection />
      <TrendCitiesSection className="py-[94px]" />
      <ExploreWorldSection />
    </div>
  );
}

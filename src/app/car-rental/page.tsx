import {
  BestExperienceSection,
  BestWaySection,
  ExploreTopSection,
  FrequentlyAskedSection,
  OurBrandsSection,
} from '@/components/car';

export default function CarRentalPage() {
  return (
    <div className="flex flex-col gap-[70px] pt-[188px]">
      <BestWaySection />
      <ExploreTopSection />
      <OurBrandsSection />
      <BestExperienceSection />
      <FrequentlyAskedSection />
    </div>
  );
}

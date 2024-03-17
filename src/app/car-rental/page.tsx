import {
  BestExperienceSection,
  BestWaySection,
  ExploreTopSection,
  FrequentlyAskedSection,
  OurBrandsSection,
} from "@/components/car";

export default function CarRentalPage() {
  return (
    <div className="flex flex-col gap-[30px] pt-[188px] xl:gap-[70px]">
      <BestWaySection />
      <ExploreTopSection />
      <OurBrandsSection />
      <BestExperienceSection />
      <FrequentlyAskedSection />
    </div>
  );
}

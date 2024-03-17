import { BestWayItem } from "..";

interface BestWaySectionProps {}

export function BestWaySection(props: BestWaySectionProps) {
  return (
    <div className="container px-5 xl:px-0">
      <h2 className="mb-3 text-center text-[30px] font-bold leading-10 text-black dark:text-white xl:mb-4 xl:text-[40px] xl:leading-[60px]">
        Best Way to Find Your Modern Cars
      </h2>
      <p className="mx-auto mb-10 max-w-[632px] text-center text-sm leading-6 text-gray90 dark:text-grayC3 xl:mb-[60px] xl:text-base">
        We Know the difference is in the details and that’s our car rental
        services, in the tourism and business industry, stand out for their
      </p>
      <div className="flex flex-col items-center justify-center gap-10 xl:flex-row xl:items-start xl:gap-[130px]">
        <BestWayItem
          image="/images/cars/best-way-1.png"
          title="Choose Your Car"
          description="Select a car using search or Catakxy"
        />
        <BestWayItem
          image="/images/cars/best-way-2.png"
          title="Contact Your Dealer"
          description="After you’ve selected a car book it
          and a deaker will contact you soon."
        />
        <BestWayItem
          image="/images/cars/best-way-3.png"
          title="Get Your Car"
          description="Here you are! Your car is book and
          waiting for you"
        />
      </div>
    </div>
  );
}

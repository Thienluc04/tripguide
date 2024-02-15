import { BestWayItem } from "..";

interface BestWaySectionProps {}

export function BestWaySection(props: BestWaySectionProps) {
  return (
    <div className="container">
      <h2 className="mb-4 text-center text-[40px] font-bold leading-[60px] text-black dark:text-white">
        Best Way to Find Your Modern Cars
      </h2>
      <p className="mx-auto mb-[60px] max-w-[632px] text-center leading-6 text-gray90 dark:text-grayC3">
        We Know the ditterence is in the details and that’s our car rental
        services, in the tourism and business industry, stand out for their
      </p>
      <div className="flex justify-center gap-[130px]">
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

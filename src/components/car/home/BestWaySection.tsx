import { BestWayItem } from '..';

interface BestWaySectionProps {}

export function BestWaySection(props: BestWaySectionProps) {
  return (
    <div className="container">
      <h2 className="text-black text-[40px] text-center font-bold leading-[60px] mb-4">
        Best Way to Find Your Modern Cars
      </h2>
      <p className="text-gray90 max-w-[632px] mx-auto leading-6 text-center mb-[60px]">
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

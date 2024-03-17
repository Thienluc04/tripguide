import { FlightTrip } from ".";

interface FlightItemProps {}

export function FlightItem(props: FlightItemProps) {
  return (
    <div className="w-full rounded-[20px] border border-grayE8 bg-white px-5 py-5 dark:border-black29 dark:bg-black29 xl:px-[60px]">
      <FlightTrip type="trip" />
      <div className="my-5 h-[1px] bg-grayF3 dark:bg-black44"></div>
      <FlightTrip type="trip-return" />
    </div>
  );
}

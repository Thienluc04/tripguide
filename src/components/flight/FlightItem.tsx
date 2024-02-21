import { FlightTrip } from ".";

interface FlightItemProps {}

export function FlightItem(props: FlightItemProps) {
  return (
    <div className="rounded-[20px] border border-grayE8 bg-white px-[60px] py-5 dark:border-black29 dark:bg-black29">
      <FlightTrip type="trip" />
      <div className="my-5 h-[1px] bg-grayF3 dark:bg-black44"></div>
      <FlightTrip type="trip-return" />
    </div>
  );
}

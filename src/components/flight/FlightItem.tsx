import { FlightTrip } from '.';

interface FlightItemProps {}

export function FlightItem(props: FlightItemProps) {
  return (
    <div className="py-5 px-[60px] rounded-[20px] border border-grayE8 bg-white">
      <FlightTrip type="trip" />
      <div className="my-5 h-[1px] bg-grayF3"></div>
      <FlightTrip type="trip-return" />
    </div>
  );
}

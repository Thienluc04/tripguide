import { cn } from "@/lib/utils";
import { PassengerItem } from ".";

interface PassengerProps {
  params: HotelParams | FlightParams;
  setParams: (params: HotelParams | FlightParams) => void;
  className?: string;
}

export function Passenger({ params, setParams, className }: PassengerProps) {
  return (
    <div
      className={cn(
        "absolute bottom-full right-0 mb-2 flex w-[354px] flex-col gap-3 rounded-2xl bg-white p-5 shadow-[0px_12px_60px_0px_rgba(89,_89,_89,_0.10)] dark:border dark:border-black44 dark:bg-black29",
        className,
      )}
    >
      <PassengerItem
        title="Adults"
        description="Ages 13 or above"
        name="adults"
        params={params}
        onChangePassenger={(passenger) => {
          setParams({
            ...params,
            passenger: { ...params.passenger, adults: passenger },
          });
        }}
      />
      <div className="h-[1px] bg-grayEC dark:bg-black44"></div>
      <PassengerItem
        title="Children"
        description="Ages 2-12"
        name="children"
        params={params}
        onChangePassenger={(passenger) => {
          setParams({
            ...params,
            passenger: { ...params.passenger, children: passenger },
          });
        }}
      />
      <div className="h-[1px] bg-grayEC dark:bg-black44"></div>
      <PassengerItem
        title="Infants"
        description="under 2"
        name="infants"
        params={params}
        onChangePassenger={(passenger) => {
          setParams({
            ...params,
            passenger: { ...params.passenger, infants: passenger },
          });
        }}
      />
    </div>
  );
}

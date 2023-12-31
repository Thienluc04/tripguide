import { PassengerItem } from '.';

interface PassengerProps {
  type: 'hotel' | 'flight' | 'car';
  params: HotelParams | FlightParams;
  setParams: (params: HotelParams | FlightParams) => void;
}

export function Passenger({ type, params, setParams }: PassengerProps) {
  return (
    <div
      className="absolute right-0 bottom-full mb-2 p-5 rounded-2xl bg-white flex flex-col gap-3 w-[354px] 
          shadow-[0px_12px_60px_0px_rgba(89,_89,_89,_0.10)]"
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
      ></PassengerItem>
      <div className="h-[1px] bg-grayEC"></div>
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
      ></PassengerItem>
      <div className="h-[1px] bg-grayEC"></div>
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
      ></PassengerItem>
    </div>
  );
}

interface FlightDetailSidebarProps {}

export function FlightDetailSidebar(props: FlightDetailSidebarProps) {
  return (
    <div className="w-[332px] rounded-[10px] border border-grayF3 bg-white py-6 dark:border-black29 dark:bg-black29">
      <div className="mb-5 flex flex-col gap-5 px-[30px]">
        <h3 className="text-xl font-medium text-black33 dark:text-white">
          Price Details
        </h3>
        <div className="flex items-center justify-between">
          <p className="font-medium leading-6 text-gray90 dark:text-grayC3">
            1x Passenger
          </p>
          <span className="font-medium leading-6 text-black2F dark:text-white">
            $350
          </span>
        </div>
        <div className="flex items-center justify-between">
          <p className="font-medium leading-6 text-gray90 dark:text-grayC3">
            Tax and fee
          </p>
          <span className="font-medium leading-6 text-black2F dark:text-white">
            $8
          </span>
        </div>
        <div className="flex items-center justify-between">
          <p className="font-medium leading-6 text-gray90 dark:text-grayC3">
            Service free
          </p>
          <span className="font-medium leading-6 text-black2F dark:text-white">
            $2
          </span>
        </div>
      </div>
      <div
        className="mx-4 mb-5 flex items-center justify-between rounded-md bg-blueFE 
            bg-opacity-20 px-3 py-2 dark:bg-black44"
      >
        <p className="font-medium leading-6 text-black2F dark:text-white">
          Total
        </p>
        <span className="font-medium leading-6 text-black2F dark:text-white">
          $360
        </span>
      </div>
      <div className="dark:bg-black39 h-[1px] bg-grayF3"></div>
      <div className="px-[30px] py-5">
        <h3 className="mb-4 text-xl font-medium text-black33 dark:text-white">
          Passengers
        </h3>
        <p className="font-medium leading-6 text-gray90 dark:text-grayC3">
          1x adult 2 children
        </p>
      </div>
      <div className="dark:bg-black39 h-[1px] bg-grayF3"></div>
      <div className="px-[30px] py-5">
        <h3 className="mb-5 text-xl font-medium text-black33 dark:text-white">
          Check-in baggage
        </h3>
        <div className="mb-[10px] flex items-center justify-between">
          <p className="font-medium leading-6 text-gray8B dark:text-grayC3">
            Depature
          </p>
          <p className="font-medium leading-6 text-gray8B dark:text-grayC3">
            3 bags ( 120g total)
          </p>
        </div>
        <div className="mb-[10px] flex items-center justify-between">
          <p className="font-medium leading-6 text-gray8B dark:text-grayC3">
            Return
          </p>
          <p className="font-medium leading-6 text-gray8B dark:text-grayC3">
            3 bags ( 120g total)
          </p>
        </div>
      </div>
      <div className="dark:bg-black39 h-[1px] bg-grayF3"></div>
      <div className="px-[30px] pt-5">
        <h3 className="mb-3 text-xl font-medium text-black33 dark:text-white">
          Services
        </h3>
        <p className="font-medium leading-6 text-gray8B dark:text-grayC3">
          No extra services selected
        </p>
      </div>
    </div>
  );
}

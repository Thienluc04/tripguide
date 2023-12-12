interface FlightDetailSidebarProps {}

export function FlightDetailSidebar(props: FlightDetailSidebarProps) {
  return (
    <div className="py-6 bg-white w-[332px] rounded-[10px] border border-grayF3">
      <div className="flex flex-col gap-5 px-[30px] mb-5">
        <h3 className="text-black33 text-xl font-medium">Price Details</h3>
        <div className="flex items-center justify-between">
          <p className="text-gray90 font-medium leading-6">1x Passenger</p>
          <span className="text-black2F font-medium leading-6">$350</span>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-gray90 font-medium leading-6">Tax and fee</p>
          <span className="text-black2F font-medium leading-6">$8</span>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-gray90 font-medium leading-6">Service free</p>
          <span className="text-black2F font-medium leading-6">$2</span>
        </div>
      </div>
      <div
        className="py-2 px-3 mx-4 flex items-center justify-between rounded-md 
            bg-blueFE bg-opacity-20 mb-5"
      >
        <p className="text-black2F font-medium leading-6">Total</p>
        <span className="text-black2F font-medium leading-6">$360</span>
      </div>
      <div className="h-[1px] bg-grayF3"></div>
      <div className="py-5 px-[30px]">
        <h3 className="text-black33 text-xl font-medium mb-4">Passengers</h3>
        <p className="text-gray90 font-medium leading-6">1x adult 2 children</p>
      </div>
      <div className="h-[1px] bg-grayF3"></div>
      <div className="py-5 px-[30px]">
        <h3 className="text-black33 text-xl font-medium mb-5">
          Check-in baggage
        </h3>
        <div className="flex items-center justify-between mb-[10px]">
          <p className="text-gray8B font-medium leading-6">Depature</p>
          <p className="text-gray8B font-medium leading-6">
            3 bags ( 120g total)
          </p>
        </div>
        <div className="flex items-center justify-between mb-[10px]">
          <p className="text-gray8B font-medium leading-6">Return</p>
          <p className="text-gray8B font-medium leading-6">
            3 bags ( 120g total)
          </p>
        </div>
      </div>
      <div className="h-[1px] bg-grayF3"></div>
      <div className="pt-5 px-[30px]">
        <h3 className="text-black33 text-xl font-medium mb-3">Services</h3>
        <p className="text-gray8B font-medium leading-6">
          No extra services selected
        </p>
      </div>
    </div>
  );
}

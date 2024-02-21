import {
  ATMIcon,
  BathIcon,
  BedIcon,
  BreakfastIcon,
  BuildingIcon,
  ComputerIcon,
  PizzaIcon,
  RepeatIcon,
  SmartTVIcon,
  TVIcon,
  WifiIcon,
} from "@/components/icons";
import { Button } from "@/components/ui";
import { BookingDetails } from ".";

interface HotelDetailsContentProps {}

export function HotelDetailsContent(props: HotelDetailsContentProps) {
  return (
    <div className="flex items-center gap-[90px]">
      <div className="flex-1">
        <h2 className="mb-[10px] text-[40px] font-bold leading-[60px] text-black2F dark:text-grayF6">
          Exclusive room in house
        </h2>
        <p className="mb-[22px] text-2xl font-medium leading-9 text-gray90 dark:text-gray8B">
          Zuich, Switzerland
        </p>
        <div className="mb-[30px] h-[1px] bg-grayEC dark:bg-black29"></div>
        <div className="mb-10">
          <div className="mb-5 flex items-center gap-[42px] border-b-2 border-b-grayEC pb-[18px] font-medium text-black2F dark:border-b-black29">
            <div className="tab-active text-primary before:top-[calc(100%_+_18px)]">
              Description
            </div>
            <div className="text-grayF3">Features</div>
            <div className="text-grayF3">Room & Price</div>
            <div className="text-grayF3">Review</div>
          </div>
          <p className="leading-6 text-black45 dark:text-grayC3">
            Arabian Park Hotel is a great choice for travellers looking for a 3
            star hotel in Dubai. It is located in Bur Dubai. This Hotel stands
            out as one of the highly recom.2 kms), Al Wasl Indoor Stadium (1.2
            kms), Dubai Mall (5.4 kms), Jumeirah Beach Park (9.6 kms) and
            Jumeirah Public Beach (15.8 kms).
          </p>
        </div>
        <div className="mb-[60px]">
          <h2 className="mb-6 text-2xl font-medium leading-9 text-black2F dark:text-grayF3">
            Hotel features
          </h2>
          <div className="mb-[62px] flex items-center gap-11 leading-6 text-black4F dark:text-grayC3">
            <div className="flex items-center gap-[10px]">
              <WifiIcon />
              <span>Wi-fi</span>
            </div>
            <div className="flex items-center gap-[10px]">
              <BathIcon />
              <span>Bathtub</span>
            </div>
            <div className="flex items-center gap-[10px]">
              <BreakfastIcon />
              <span>Breakfast</span>
            </div>
            <div className="flex items-center gap-[10px]">
              <BedIcon />
              <span>Kins bed</span>
            </div>
            <div className="flex items-center gap-[10px]">
              <RepeatIcon />
              <span>4m x 6m</span>
            </div>
          </div>
          <div className="h-[2px] bg-grayEC dark:bg-black29"></div>
        </div>
        <div className="mb-[60px]">
          <h2 className="mb-7 text-2xl font-medium leading-9 text-black2F dark:text-grayF3">
            Amenities
          </h2>
          <div className="mb-14 flex items-center gap-[180px] text-black45 dark:text-grayC3">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <WifiIcon />
                <span className="leading-6">Free wifi 24/7</span>
              </div>
              <div className="flex items-center gap-4">
                <ComputerIcon />
                <span className="leading-6">Free computer</span>
              </div>
              <div className="flex items-center gap-4">
                <SmartTVIcon />
                <span className="leading-6">Free smart TV</span>
              </div>
              <div className="flex items-center gap-4">
                <TVIcon />
                <span className="leading-6">Free television</span>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <BathIcon />
                <span className="leading-6">Free clean bathroom</span>
              </div>
              <div className="flex items-center gap-4">
                <PizzaIcon />
                <span className="leading-6">Breakfast included</span>
              </div>
              <div className="flex items-center gap-4">
                <ATMIcon />
                <span className="leading-6">ATM</span>
              </div>
              <div className="flex items-center gap-4">
                <BuildingIcon />
                <span className="leading-6">Nearby city</span>
              </div>
            </div>
          </div>
          <Button className="h-10 rounded-full font-Roboto text-base font-medium">
            More details
          </Button>
        </div>
      </div>
      <BookingDetails />
    </div>
  );
}

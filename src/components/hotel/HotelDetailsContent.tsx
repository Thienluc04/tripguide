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
} from '@/components/icons';
import { Button } from '@/components/ui';
import { BookingDetails } from '.';

interface HotelDetailsContentProps {}

export function HotelDetailsContent(props: HotelDetailsContentProps) {
  return (
    <div className="flex gap-[90px] items-center">
      <div className="flex-1">
        <h2 className="text-[40px] font-bold leading-[60px] text-black2F mb-[10px]">
          Exclusive room in house
        </h2>
        <p className="text-2xl font-medium leading-9 text-gray90 mb-[22px]">
          Zuich, Switzerland
        </p>
        <div className="h-[1px] bg-grayEC mb-[30px]"></div>
        <div className="mb-10">
          <div className="flex gap-[42px] items-center pb-[18px] border-b-2 border-b-grayEC text-black2F font-medium mb-5">
            <div className="text-primary tab-active before:top-[calc(100%_+_18px)]">
              Description
            </div>
            <div>Features</div>
            <div>Room & Price</div>
            <div>Review</div>
          </div>
          <p className="text-black45 leading-6">
            Arabian Park Hotel is a great choice for travellers looking for a 3
            star hotel in Dubai. It is located in Bur Dubai. This Hotel stands
            out as one of the highly recom.2 kms), Al Wasl Indoor Stadium (1.2
            kms), Dubai Mall (5.4 kms), Jumeirah Beach Park (9.6 kms) and
            Jumeirah Public Beach (15.8 kms).
          </p>
        </div>
        <div className="mb-[60px]">
          <h2 className="text-2xl font-medium leading-9 text-black2F mb-6">
            Hotel features
          </h2>
          <div className="flex gap-11 items-center text-black4F leading-6 mb-[62px]">
            <div className="flex gap-[10px] items-center">
              <WifiIcon />
              <span>Wi-fi</span>
            </div>
            <div className="flex gap-[10px] items-center">
              <BathIcon />
              <span>Bathtub</span>
            </div>
            <div className="flex gap-[10px] items-center">
              <BreakfastIcon />
              <span>Breakfast</span>
            </div>
            <div className="flex gap-[10px] items-center">
              <BedIcon />
              <span>Kins bed</span>
            </div>
            <div className="flex gap-[10px] items-center">
              <RepeatIcon />
              <span>4m x 6m</span>
            </div>
          </div>
          <div className="h-[2px] bg-grayEC"></div>
        </div>
        <div className="mb-[60px]">
          <h2 className="text-2xl leading-9 font-medium text-black2F mb-7">
            Amenities
          </h2>
          <div className="flex gap-[180px] items-center text-black45 mb-14">
            <div className="flex flex-col gap-6">
              <div className="flex gap-4 items-center">
                <WifiIcon />
                <span className="leading-6">Free wifi 24/7</span>
              </div>
              <div className="flex gap-4 items-center">
                <ComputerIcon />
                <span className="leading-6">Free computer</span>
              </div>
              <div className="flex gap-4 items-center">
                <SmartTVIcon />
                <span className="leading-6">Free smart TV</span>
              </div>
              <div className="flex gap-4 items-center">
                <TVIcon />
                <span className="leading-6">Free television</span>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex gap-4 items-center">
                <BathIcon />
                <span className="leading-6">Free clean bathroom</span>
              </div>
              <div className="flex gap-4 items-center">
                <PizzaIcon />
                <span className="leading-6">Breakfast included</span>
              </div>
              <div className="flex gap-4 items-center">
                <ATMIcon />
                <span className="leading-6">ATM</span>
              </div>
              <div className="flex gap-4 items-center">
                <BuildingIcon />
                <span className="leading-6">Nearby city</span>
              </div>
            </div>
          </div>
          <Button className="rounded-full h-10 font-Roboto text-base font-medium">
            More details
          </Button>
        </div>
      </div>
      <BookingDetails></BookingDetails>
    </div>
  );
}

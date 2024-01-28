import Image from "next/image";
import { CreditCard } from "../common";
import { ChevronDownIcon } from "../icons";
import { Button } from "../ui";

import mastercardIcon from "@images/mastercard-icon.png";
import addCardBg from "@images/add-card-bg.png";

interface PaymentContentProps {}

export function PaymentContent(props: PaymentContentProps) {
  return (
    <div className="mt-[70px]">
      <div className="mb-[18px] flex items-center justify-between">
        <h2 className="text-2xl font-medium leading-9 text-black">
          Credit card
        </h2>
        <Button className="flex h-auto w-auto items-center gap-3 rounded-full p-4 text-sm font-bold leading-4 text-grayFD">
          Add payment method
          <ChevronDownIcon />
        </Button>
      </div>
      <CreditCard
        cardNumber="8948   xxxx  xxxx  7894"
        holderName="Holder Name"
        imageCard={mastercardIcon}
        className="mb-[30px] h-[190px] w-[340px]"
      />
      <div className="relative cursor-pointer rounded-[20px]">
        <Image src={addCardBg} alt="add-card-bg" width={340} height={190} />
        <div className="absolute left-[28px] top-2/4 flex -translate-y-2/4 items-center gap-[18px]">
          <Button
            variant={"black"}
            className="flex h-[54px] w-[54px] items-center justify-center rounded-xl p-0 text-2xl"
          >
            +
          </Button>
          <p className="text-lg font-medium text-black">Add new method</p>
        </div>
      </div>
    </div>
  );
}

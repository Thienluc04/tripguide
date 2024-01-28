"use client";

import { CreditCard, PaymentItem, TourUpdateItem } from "@/components/common";
import { ThreeDotsIcon, TickIcon, UnionIcon } from "@/components/icons";
import { Checkbox, Input } from "@/components/ui";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { PaymentItemType } from "@/types/general";
import mastercardIcon from "@images/mastercard-icon.png";
import visaIcon from "@images/visa-icon.png";

interface BookingDetailContentProps {}

export function BookingDetailContent(props: BookingDetailContentProps) {
  const [creditCard, setCreditCard] = useState<PaymentItemType>("mastercard");

  const pathname = usePathname();

  return (
    <div>
      <div className="w-[494px]">
        <h1 className="mb-6 text-[40px] font-bold leading-[60px] text-black2F">
          Confirm your Book
        </h1>
        <div className="mb-10 h-[2px] w-full bg-grayF6"></div>
        <h2 className="mb-[30px] text-[34px] font-bold leading-[44px] text-black">
          Your tour
        </h2>
        <TourUpdateItem type="date" className="mb-5 w-[470px]" />
        <TourUpdateItem type="traveler" className="mb-10 w-[470px]" />
        <h2 className="mb-5 text-[34px] font-bold leading-[44px] text-black">
          Credit Cards
        </h2>
        <div className="mb-[30px] flex gap-3">
          <PaymentItem
            type="mastercard"
            widthImage={40}
            heightImage={40}
            active={creditCard === "mastercard"}
            onClick={() => setCreditCard("mastercard")}
          />
          <PaymentItem
            type="paypal"
            widthImage={72}
            heightImage={24}
            active={creditCard === "paypal"}
            onClick={() => setCreditCard("paypal")}
          />
          <PaymentItem
            type="visa"
            widthImage={46}
            heightImage={26}
            active={creditCard === "visa"}
            onClick={() => setCreditCard("visa")}
          />
          <PaymentItem
            type="americanExpress"
            widthImage={69}
            heightImage={28}
            active={creditCard === "americanExpress"}
            onClick={() => setCreditCard("americanExpress")}
          />
          <PaymentItem
            type="discover"
            widthImage={46}
            heightImage={30}
            active={creditCard === "discover"}
            onClick={() => setCreditCard("discover")}
          />
        </div>
        <div className="mb-10 h-[2px] bg-grayF6"></div>
      </div>
      <div className="mb-10 flex gap-5">
        <CreditCard
          cardNumber="8948 xxxx xxxx 7894"
          holderName="Holder Name"
          imageCard={mastercardIcon}
          className="bg-blueFD"
        />
        <CreditCard
          cardNumber="8948 xxxx xxxx 7894"
          holderName="Holder Name"
          imageCard={visaIcon}
        />
      </div>
      <div className="mb-5 max-w-[470px]">
        <h3 className="mb-3 leading-6 text-black45">Card Number</h3>
        <Input
          defaultValue={"5884 6241 4444 3333"}
          iconRight={
            <TickIcon className="text-blueFF" width={14} height={10} />
          }
          className="h-[50px] rounded-[10px] border-grayEA bg-grayF6"
        />
      </div>
      <div className="mb-[18px] flex max-w-[470px] gap-11">
        <div className="flex-1">
          <h3 className="mb-3 leading-6 text-black45">Expiry Date</h3>
          <Input
            defaultValue={"MM / YY"}
            className="h-[50px] rounded-[10px] border-grayEA bg-grayF6"
          />
        </div>
        <div className="flex-1">
          <h3 className="mb-3 leading-6 text-black45">CVC/CVV</h3>
          <Input
            defaultValue={"****"}
            className="h-[50px] rounded-[10px] border-grayEA bg-grayF6"
          />
        </div>
      </div>
      <Checkbox
        label="Save Card"
        className="mb-[34px] font-medium text-black4F"
      />
      <Link
        href={pathname + "/congratulations"}
        className="rounded-[36px] bg-blueFE px-5 py-3 text-lg font-medium leading-7 text-white"
      >
        Confirm and reserve
      </Link>
    </div>
  );
}

"use client";

import { CreditCard, PaymentItem, TourUpdateItem } from "@/components/common";
import { TickIcon } from "@/components/icons";
import { Checkbox, Input } from "@/components/ui";
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
    <div className="mb-[30px] xl:mb-0">
      <div className="xl:w-[494px]">
        <h1 className="mb-5 text-[34px] font-bold leading-10 text-black2F dark:text-white xl:mb-6 xl:text-[40px] xl:leading-[60px]">
          Confirm your Book
        </h1>
        <div className="mb-4 h-[2px] w-full bg-grayF6 dark:bg-black29 xl:mb-10"></div>
        <h2 className="mb-6 text-[28px] font-bold leading-10 text-black dark:text-grayF3 xl:mb-[30px] xl:text-[34px] xl:leading-[44px]">
          Your tour
        </h2>
        <TourUpdateItem type="date" className="mb-5 xl:w-[470px]" />
        <TourUpdateItem type="traveler" className="mb-10 xl:w-[470px]" />
        <h2 className="mb-5 text-[28px] font-bold leading-10 text-black dark:text-grayF3 xl:text-[34px] xl:leading-[44px]">
          Credit Cards
        </h2>
        <div className="mb-[30px] flex flex-wrap gap-3 xl:flex-nowrap">
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
        <div className="mb-10 h-[2px] bg-grayF6 dark:bg-black44"></div>
      </div>
      <div className="mb-10 flex flex-col gap-5 xl:flex-row">
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
        <h3 className="mb-3 leading-6 text-black45 dark:text-grayF3">
          Card Number
        </h3>
        <Input
          defaultValue={"5884 6241 4444 3333"}
          iconRight={
            <TickIcon
              className="text-blueFF dark:text-blueE6"
              width={14}
              height={10}
            />
          }
          className="h-[50px] rounded-[10px] border-grayEA bg-grayF6 dark:border-2 dark:border-black29 dark:bg-black dark:text-gray8B dark:focus-visible:ring-2"
        />
      </div>
      <div className="mb-[18px] flex max-w-[470px] gap-11">
        <div className="flex-1">
          <h3 className="mb-3 leading-6 text-black45 dark:text-grayF3">
            Expiry Date
          </h3>
          <Input
            defaultValue={"MM / YY"}
            className="h-[50px] rounded-[10px] border-grayEA bg-grayF6 dark:border-2 dark:border-black29 dark:bg-black dark:text-gray8B dark:focus-visible:ring-2"
          />
        </div>
        <div className="flex-1">
          <h3 className="mb-3 leading-6 text-black45 dark:text-grayF3">
            CVC/CVV
          </h3>
          <Input
            defaultValue={"****"}
            className="h-[50px] rounded-[10px] border-grayEA bg-grayF6 dark:border-2 dark:border-black29 dark:bg-black dark:text-gray8B dark:focus-visible:ring-2"
          />
        </div>
      </div>
      <div className="mb-[34px]">
        <Checkbox
          label="Save Card"
          className="font-medium text-black4F dark:text-grayF3"
        />
      </div>
      <Link
        href={pathname + "/congratulations"}
        className="block rounded-xl bg-blueFE px-5 py-3 text-center text-sm font-medium text-white xl:inline-block xl:rounded-[36px] xl:text-left xl:text-lg xl:leading-7"
      >
        Confirm and reserve
      </Link>
    </div>
  );
}

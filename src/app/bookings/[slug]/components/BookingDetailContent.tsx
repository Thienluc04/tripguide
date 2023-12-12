'use client';

import { CreditCard, TourUpdateItem } from '@/components/common';
import { ThreeDotsIcon, TickIcon, UnionIcon } from '@/components/icons';
import { Checkbox, Input } from '@/components/ui';
import { CreditCardType } from '@/types/general.type';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

interface BookingDetailContentProps {}

export function BookingDetailContent(props: BookingDetailContentProps) {
  const [creditCard, setCreditCard] = useState<CreditCardType>('mastercard');

  const pathname = usePathname();

  return (
    <div>
      <div className="w-[494px]">
        <h1 className="text-[40px] font-bold leading-[60px] text-black2F mb-6">
          Confirm your Book
        </h1>
        <div className="h-[2px] bg-grayF6 mb-10 w-full"></div>
        <h2 className="text-[34px] font-bold text-black leading-[44px] mb-[30px]">
          Your tour
        </h2>
        <TourUpdateItem type="date" className="mb-5 w-[470px]" />
        <TourUpdateItem type="traveler" className="mb-10 w-[470px]" />
        <h2 className="text-black text-[34px] font-bold leading-[44px] mb-5">
          Credit Cards
        </h2>
        <div className="flex gap-3 mb-[30px]">
          <CreditCard
            type="mastercard"
            widthImage={40}
            heightImage={40}
            active={creditCard === 'mastercard'}
            onClick={() => setCreditCard('mastercard')}
          />
          <CreditCard
            type="paypal"
            widthImage={72}
            heightImage={24}
            active={creditCard === 'paypal'}
            onClick={() => setCreditCard('paypal')}
          />
          <CreditCard
            type="visa"
            widthImage={46}
            heightImage={26}
            active={creditCard === 'visa'}
            onClick={() => setCreditCard('visa')}
          />
          <CreditCard
            type="americanExpress"
            widthImage={69}
            heightImage={28}
            active={creditCard === 'americanExpress'}
            onClick={() => setCreditCard('americanExpress')}
          />
          <CreditCard
            type="discover"
            widthImage={46}
            heightImage={30}
            active={creditCard === 'discover'}
            onClick={() => setCreditCard('discover')}
          />
        </div>
        <div className="h-[2px] bg-grayF6 mb-10"></div>
      </div>
      <div className="flex gap-5 mb-10">
        <div className="rounded-[20px] bg-blueFD p-6 w-[335px]">
          <div className="flex justify-between items-center mb-6">
            <UnionIcon />
            <ThreeDotsIcon />
          </div>
          <p className="text-black52 font-medium leading-[30px]">
            8948 xxxx xxxx 7894
          </p>
          <div className="flex justify-between items-center">
            <p className="text-black52 font-medium leading-[30px]">
              Holder Name
            </p>
            <Image
              src={'/images/mastercard-icon.png'}
              alt="mastercard-icon"
              width={34}
              height={20}
            ></Image>
          </div>
        </div>
        <div className="rounded-[20px] bg-greenA6 p-6 w-[335px]">
          <div className="flex justify-between items-center mb-6">
            <UnionIcon />
            <ThreeDotsIcon />
          </div>
          <p className="text-black52 font-medium leading-[30px]">
            8948 xxxx xxxx 7894
          </p>
          <div className="flex justify-between items-center">
            <p className="text-black52 font-medium leading-[30px]">
              Holder Name
            </p>
            <Image
              src={'/images/visa-icon.png'}
              alt="visa-icon"
              width={34}
              height={20}
            ></Image>
          </div>
        </div>
      </div>
      <div className="max-w-[470px] mb-5">
        <h3 className="text-black45 leading-6 mb-3">Card Number</h3>
        <Input
          defaultValue={'5884 6241 4444 3333'}
          icon={<TickIcon className="text-blueFF" width={14} height={10} />}
          className="h-[50px] rounded-[10px] border-grayEA bg-grayF6"
        />
      </div>
      <div className="max-w-[470px] flex gap-11 mb-[18px]">
        <div className="flex-1">
          <h3 className="text-black45 leading-6 mb-3">Expiry Date</h3>
          <Input
            defaultValue={'MM / YY'}
            className="h-[50px] rounded-[10px] border-grayEA bg-grayF6"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-black45 leading-6 mb-3">CVC/CVV</h3>
          <Input
            defaultValue={'****'}
            className="h-[50px] rounded-[10px] border-grayEA bg-grayF6"
          />
        </div>
      </div>
      <Checkbox
        label="Save Card"
        className="text-black4F font-medium mb-[34px]"
      />
      <Link
        href={pathname + '/congratulations'}
        className="text-lg font-medium leading-7 px-5 py-3 rounded-[36px] bg-blueFE text-white"
      >
        Confirm and reserve
      </Link>
    </div>
  );
}

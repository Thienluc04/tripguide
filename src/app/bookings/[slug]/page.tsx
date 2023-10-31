'use client';

import { Breadcrumb, CreditCard, TourUpdateItem } from '@/components/common';
import { ThreeDotsIcon, UnionIcon } from '@/components/icons';
import { creditCard } from '@/constants/general.constant';
import Image from 'next/image';
import { useState } from 'react';

export default function BookingDetail() {
  const [creditCard, setCreditCard] = useState<creditCard>('mastercard');

  return (
    <div className="container">
      <Breadcrumb
        list={['Home', 'Hotel list', 'Hotel details']}
        last="Confirm and pay"
        className="mb-12"
      />
      <div className="flex">
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
          <div className="flex gap-5 mb-12">
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
        </div>
      </div>
    </div>
  );
}

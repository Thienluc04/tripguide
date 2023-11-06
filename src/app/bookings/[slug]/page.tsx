'use client';

import { Breadcrumb, CreditCard, TourUpdateItem } from '@/components/common';
import {
  ThreeDotsIcon,
  TickIcon,
  UnionIcon,
  YellowStarIcon,
} from '@/components/icons';
import { Checkbox, Input } from '@/components/ui';
import { creditCard } from '@/constants/general.constant';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function BookingDetail() {
  const [creditCard, setCreditCard] = useState<creditCard>('mastercard');

  const pathname = usePathname();

  return (
    <div className="container">
      <Breadcrumb
        list={['Home', 'Hotel list', 'Hotel details']}
        last="Confirm and pay"
        className="mb-12"
      />
      <div className="flex justify-between items-start">
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
            href={pathname + '/hotel-congratulations'}
            className="text-lg font-medium leading-7 px-5 py-3 rounded-[36px] bg-blueFE text-white"
          >
            Confirm and reserve
          </Link>
        </div>
        <div className="rounded-[20px] border-2 border-grayF3 bg-white py-10 px-9 w-[444px]">
          <h2 className="text-black text-lg font-medium mb-[14px]">
            Switzerland Hotels and Places to Stay{' '}
          </h2>
          <div className="flex items-center gap-[10px] mb-6">
            <YellowStarIcon />
            <p className="text-black29 text-sm font-medium">
              4.8 <span className="text-gray8B">(122 reviews)</span>
            </p>
          </div>
          <div className="mb-8">
            <Image
              src={'/images/hotels/payment.png'}
              alt="hotel"
              width={326}
              height={177}
            />
          </div>
          <div className="inline-block">
            <p className="text-gray8B font-medium leading-6 mb-4">
              1 bedroom + 1 private room
            </p>
            <div className="w-[170px] h-[1px] bg-grayEE mb-5"></div>
          </div>
          <div className="flex mb-5">
            <div className="flex-1">
              <h3 className="text-grayC3 text-sm font-medium">Check in</h3>
              <p className="text-gray8B font-medium leading-6">June 27, 2020</p>
            </div>
            <div className="w-[2px] h-12 bg-grayF6"></div>
            <div className="flex-1 ml-[14px]">
              <h3 className="text-grayC3 text-sm font-medium">Check out</h3>
              <p className="text-gray8B font-medium leading-6">June 30, 2020</p>
            </div>
          </div>
          <div className="mb-10">
            <h3 className="text-grayC3 text-sm font-medium">Guest</h3>
            <p className="text-gray8B font-medium leading-6">2 guests</p>
          </div>
          <div className="mb-[30px]">
            <h2 className="text-[26px] font-medium font-Roboto leading-7 text-black33 mb-10">
              Booked details
            </h2>
            <div className="flex flex-col gap-5 mb-3">
              <div className="flex justify-between items-center">
                <p className="text-gray8B font-medium leading-6">
                  $119 + 5nights
                </p>
                <p className="text-black45 font-medium leading-6">$833</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-gray8B font-medium leading-6">
                  Ocupancy text and fee
                </p>
                <p className="text-black45 font-medium leading-6">-$125</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-gray8B font-medium leading-6">
                  Service free
                </p>
                <p className="text-black45 font-medium leading-6">$103</p>
              </div>
            </div>
            <div className="flex justify-between items-center py-2 px-3 rounded-md bg-grayF6">
              <p className="text-black2F font-medium leading-6">Total</p>
              <p className="text-black45 font-medium leading-6">$833</p>
            </div>
          </div>
          <Link
            href={''}
            className="text-grayC3 text-sm font-medium block text-center"
          >
            Report this property
          </Link>
        </div>
      </div>
    </div>
  );
}

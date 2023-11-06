'use client';

import { useHotelStore } from '@/store/hotelStore';
import { DecrementIcon, IncrementIcon } from '../icons';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { toast } from 'react-toastify';

interface PassengerItemProps {
  title: string;
  description: string;
  name: 'adults' | 'children' | 'infants';
}

export function PassengerItem({
  title,
  description,
  name,
}: PassengerItemProps) {
  const { params, setParams } = useHotelStore((state) => state);

  const [passengers, setPassengers] = useState<number>(0);

  useEffect(() => {
    if (name === 'adults') {
      setPassengers(params.passenger?.adults as number);
    }
    if (name === 'children') {
      setPassengers(params.passenger?.children as number);
    }
    if (name === 'infants') {
      setPassengers(params.passenger?.infants as number);
    }
  }, []);

  useEffect(() => {
    if (name === 'adults') {
      setParams({
        ...params,
        passenger: { ...params.passenger, adults: passengers },
      });
    }
    if (name === 'children') {
      setParams({
        ...params,
        passenger: { ...params.passenger, children: passengers },
      });
    }
    if (name === 'infants') {
      setParams({
        ...params,
        passenger: { ...params.passenger, infants: passengers },
      });
    }
  }, [passengers]);

  const handleDecrementValue = () => {
    if (passengers >= 1) {
      setPassengers((prev) => prev - 1);
    }
  };

  const handleIncrementValue = () => {
    const total =
      (params.passenger?.adults as number) +
      (params.passenger?.children as number) +
      (params.passenger?.infants as number);

    if (total < 10) {
      setPassengers((prev) => prev + 1);
    } else {
      toast.warning('Passengers must be less than 10');
    }
  };

  return (
    <div className="flex justify-between items-center">
      <div>
        <h3 className="font-medium text-gray90 leading-6 mb-1">{title}</h3>
        <p className="text-grayC3 text-sm">{description}</p>
      </div>
      <div className="flex items-center gap-3">
        <DecrementIcon
          className={cn(
            'transition-all',
            passengers >= 1 ? 'text-grayC4 cursor-pointer' : 'text-grayEC'
          )}
          onClick={handleDecrementValue}
        ></DecrementIcon>
        <span className="text-sm font-Roboto text-gray90 w-3 text-center">
          {passengers}
        </span>
        <IncrementIcon
          className={cn(
            'transition-all',
            passengers < 10 ? 'text-grayC4 cursor-pointer' : 'text-grayEC'
          )}
          onClick={handleIncrementValue}
        ></IncrementIcon>
      </div>
    </div>
  );
}

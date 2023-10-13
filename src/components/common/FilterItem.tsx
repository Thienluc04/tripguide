'use client';

import {
  ComponentProps,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useState,
  useEffect,
} from 'react';
import { twMerge } from 'tailwind-merge';
import { ArrowTurnIcon } from '../icons';
import { Calendar } from '../ui';
import { useHotelStore } from '@/store/hotelStore';

interface FilterItemProps extends ComponentProps<'div'> {
  type: 'location' | 'date';
  arrowTurn?: boolean;
  title: 'Location' | 'Check in' | 'Check out';
  description: string;
  valueDate?: string;
  setValueDate?: Dispatch<SetStateAction<Date>>;
}

export function FilterItem({
  type,
  arrowTurn = true,
  title,
  description,
  className,
  children,
  valueDate,
  setValueDate,
  ...props
}: PropsWithChildren<FilterItemProps>) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [date, setDate] = useState<Date | undefined>(new Date());

  const { params, setParams } = useHotelStore();

  useEffect(() => {
    if (date && title === 'Check in') {
      setParams({ ...params, checkInDate: date.toLocaleDateString('en-GB') });
    }
    if (date && title === 'Check out') {
      setParams({ ...params, checkOutDate: date.toLocaleDateString('en-GB') });
    }
  }, [date]);

  return (
    <div className="relative">
      <div
        className={twMerge(
          'rounded-lg border border-[#E7E8EA] bg-[#F4F5F7] px-6 flex flex-col justify-center h-[70px] w-[250px] cursor-pointer',
          className
        )}
        onClick={() => setIsOpen(!isOpen)}
        {...props}
      >
        <h3 className="text-lg font-medium mb-[6px]">{title}</h3>
        <p className="text-[#B1B5C3]">{description}</p>
        {arrowTurn && (
          <div className="arrow-turn">
            <ArrowTurnIcon></ArrowTurnIcon>
          </div>
        )}
      </div>
      {children && type === 'location' && isOpen && (
        <div
          className="p-5 rounded-[20px] absolute left-0 right-0 top-full mt-1 bg-white z-10 pr-[50px] flex flex-col gap-5 border border-grayF6
        shadow-[0px_12px_60px_0px_rgba(89,_89,_89,_0.10] w-[402px]"
        >
          {children}
        </div>
      )}
      {!children && type === 'date' && isOpen && (
        <div className="absolute left-0 right-0 w-full mt-1 h-[352px] top-full">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-[20px] border bg-white calendar border-grayF6 shadow-[0px_12px_60px_0px_rgba(89,_89,_89,_0.10)]"
          />
        </div>
      )}
    </div>
  );
}

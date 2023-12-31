'use client';

import { AddressIcon, ArrowTurnIcon } from '@/components/icons';
import {
  Calendar,
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui';
import { cn } from '@/lib/utils';
import { Location } from '@/types/hotel';
import {
  ComponentProps,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useEffect,
  useState,
} from 'react';

interface FilterItemProps extends ComponentProps<'div'> {
  type: 'location' | 'date';
  arrowTurn?: boolean;
  title: string;
  description: string;
  valueDate?: string;
  setValueDate?: Dispatch<SetStateAction<Date>>;
  listLocation?: Location[] | string[];
  styleContent?: string;
  onSetDate?: (date: string) => void;
  onSetLocation?: (location: string) => void;
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
  listLocation,
  styleContent = '',
  onSetDate,
  onSetLocation,
  ...props
}: PropsWithChildren<FilterItemProps>) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [value, setValue] = useState<string>('');

  useEffect(() => {
    if (onSetDate && date) {
      onSetDate(date.toLocaleDateString('en-GB'));
    }
  }, [date]);

  useEffect(() => {
    if (value.length > 0 && onSetLocation) {
      // setParams({ ...params, location: value });
      onSetLocation(value);
    }
  }, [value]);

  return (
    <Popover>
      <div className="relative">
        <PopoverTrigger asChild>
          <div
            className={cn(
              'rounded-lg border border-blueEA bg-gray5F7 px-6 flex flex-col justify-center h-[70px] w-[250px] cursor-pointer',
              className
            )}
            onClick={() => setIsOpen(!isOpen)}
            {...props}
          >
            <h3 className="text-lg font-medium mb-[6px]">{title}</h3>
            <span className="text-grayC3 leading-6">
              {value || description}
            </span>
            {arrowTurn && (
              <div className="arrow-turn">
                <ArrowTurnIcon></ArrowTurnIcon>
              </div>
            )}
          </div>
        </PopoverTrigger>
        {type === 'location' && (
          <PopoverContent
            className={cn(
              'p-2 rounded-[20px] mt-1 bg-white z-10 pr-[50px] flex flex-col gap-5 border border-grayF6 shadow-[0px_12px_60px_0px_rgba(89,_89,_89,_0.10] w-[402px] ml-16',
              styleContent
            )}
          >
            <Command>
              <CommandInput
                className="px-3 py-2 text-base h-auto"
                placeholder={description}
              />
              <CommandEmpty>No location found</CommandEmpty>
              <CommandGroup>
                {listLocation?.map((item, index) => {
                  if (typeof item !== 'string') {
                    return (
                      <CommandItem
                        key={item.title}
                        className={cn(
                          'flex gap-3 items-center rounded-lg cursor-pointer',
                          item.title === value && 'bg-grayF3'
                        )}
                        onSelect={() => {
                          setValue(item.title === value ? '' : item.title);
                        }}
                      >
                        <AddressIcon className="text-grayC4"></AddressIcon>
                        <div className="flex flex-col gap-1">
                          <h3 className="text-grayE90 font-medium leading-6">
                            {item.title}
                          </h3>
                          <p className="text-grayC3 text-sm leading-[21px]">
                            {item.description}
                          </p>
                        </div>
                      </CommandItem>
                    );
                  } else {
                    return (
                      <CommandItem
                        key={index}
                        className={cn(
                          'flex gap-3 items-center rounded-lg cursor-pointer',
                          item === value && 'bg-grayF3'
                        )}
                        onSelect={() => {
                          setValue(item === value ? '' : item);
                        }}
                      >
                        <AddressIcon className="text-grayC4"></AddressIcon>
                        <div className="flex flex-col gap-1">
                          <p className="text-grayE90 font-medium leading-6">
                            {item}
                          </p>
                        </div>
                      </CommandItem>
                    );
                  }
                })}
              </CommandGroup>
            </Command>
          </PopoverContent>
        )}
        {!children && type === 'date' && isOpen && (
          <div
            className={cn(
              'absolute left-0 right-0 w-full mt-1 h-[352px] top-full z-10',
              styleContent
            )}
          >
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-[20px] min-w-[250px] border bg-white calendar border-grayF6 shadow-[0px_12px_60px_0px_rgba(89,_89,_89,_0.10)]"
            />
          </div>
        )}
      </div>
    </Popover>
  );
}

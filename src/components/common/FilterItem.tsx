"use client";

import { AddressIcon, ArrowTurnIcon } from "@/components/icons";
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
} from "@/components/ui";
import { cn } from "@/lib/utils";
import {
  ComponentProps,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useEffect,
  useState,
} from "react";

interface FilterItemProps extends ComponentProps<"div"> {
  type: "location" | "date";
  arrowTurn?: boolean;
  title: string;
  description: string;
  valueDate?: string;
  setValueDate?: Dispatch<SetStateAction<Date>>;
  listLocation?: LocationHotel[] | string[];
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
  styleContent = "",
  onSetDate,
  onSetLocation,
  ...props
}: PropsWithChildren<FilterItemProps>) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    if (onSetDate && date) {
      onSetDate(date.toLocaleDateString("en-GB"));
    }
  }, [date]);

  useEffect(() => {
    if (value.length > 0 && onSetLocation) {
      onSetLocation(value);
    }
  }, [value]);

  return (
    <Popover>
      <div className="relative">
        <PopoverTrigger asChild>
          <div
            className={cn(
              "flex h-[70px] w-[250px] cursor-pointer flex-col justify-center rounded-lg border border-blueEA bg-gray5F7 px-6",
              className,
            )}
            onClick={() => setIsOpen(!isOpen)}
            {...props}
          >
            <h3 className="mb-[6px] text-lg font-medium">{title}</h3>
            <span className="leading-6 text-grayC3">
              {value || description}
            </span>
            {arrowTurn && (
              <div className="arrow-turn">
                <ArrowTurnIcon></ArrowTurnIcon>
              </div>
            )}
          </div>
        </PopoverTrigger>
        {type === "location" && (
          <PopoverContent
            className={cn(
              "shadow-[0px_12px_60px_0px_rgba(89,_89,_89,_0.10] z-10 ml-16 mt-1 flex w-[402px] flex-col gap-5 rounded-[20px] border border-grayF6 bg-white p-2 pr-[50px]",
              styleContent,
            )}
          >
            <Command>
              <CommandInput
                className="h-auto px-3 py-2 text-base"
                placeholder={description}
              />
              <CommandEmpty>No location found</CommandEmpty>
              <CommandGroup>
                {listLocation?.map((item, index) => {
                  if (typeof item !== "string") {
                    return (
                      <CommandItem
                        key={item.title}
                        className={cn(
                          "flex cursor-pointer items-center gap-3 rounded-lg",
                          item.title === value && "bg-grayF3",
                        )}
                        onSelect={() => {
                          setValue(item.title === value ? "" : item.title);
                        }}
                      >
                        <AddressIcon className="text-grayC4"></AddressIcon>
                        <div className="flex flex-col gap-1">
                          <h3 className="text-grayE90 font-medium leading-6">
                            {item.title}
                          </h3>
                          <p className="text-sm leading-[21px] text-grayC3">
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
                          "flex cursor-pointer items-center gap-3 rounded-lg",
                          item === value && "bg-grayF3",
                        )}
                        onSelect={() => {
                          setValue(item === value ? "" : item);
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
        {!children && type === "date" && isOpen && (
          <div
            className={cn(
              "absolute left-0 right-0 top-full z-10 mt-1 h-[352px] w-full",
              styleContent,
            )}
          >
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="calendar min-w-[250px] rounded-[20px] border border-grayF6 bg-white shadow-[0px_12px_60px_0px_rgba(89,_89,_89,_0.10)]"
            />
          </div>
        )}
      </div>
    </Popover>
  );
}

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
      <div className="relative flex w-full flex-1 flex-col">
        <PopoverTrigger asChild>
          <div
            className={cn(
              "flex w-full cursor-pointer flex-col justify-center rounded-lg border border-blueEA bg-gray5F7 px-5 py-2 dark:border-black54 dark:bg-black44 xl:h-[70px] xl:w-[250px] xl:px-6 xl:py-0",
              className,
            )}
            onClick={() => setIsOpen(!isOpen)}
            {...props}
          >
            <h3 className="text-base font-medium leading-6 dark:text-grayFD xl:mb-[6px] xl:text-lg">
              {title}
            </h3>
            <span className="text-xs leading-[18px] text-grayC3 dark:text-gray8B xl:text-base xl:leading-6">
              {value || description}
            </span>
            {arrowTurn && (
              <div className="arrow-turn">
                <ArrowTurnIcon
                  className="rounded-3xl bg-white text-grayC4 dark:bg-black4B dark:text-grayF6"
                  fillCircle="black4B"
                />
              </div>
            )}
          </div>
        </PopoverTrigger>
        {type === "location" && (
          <PopoverContent
            className={cn(
              "xl:shadow-[0px_12px_60px_0px_rgba(89,_89,_89,_0.10] z-10 mt-1 flex w-full flex-col gap-5 rounded-[20px] border border-grayF6 bg-white p-2 shadow-md dark:border-black54 dark:bg-black44 xl:ml-16 xl:w-[402px] xl:pr-[50px]",
              styleContent,
            )}
          >
            <Command>
              <CommandInput
                className="h-auto px-3 py-2 text-base dark:text-grayFD"
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
                          item.title === value && "bg-grayF3 dark:bg-black29",
                        )}
                        onSelect={() => {
                          setValue(item.title === value ? "" : item.title);
                        }}
                      >
                        <AddressIcon className="text-grayC4" />
                        <div className="flex flex-col gap-1">
                          <h3 className="font-medium leading-6 text-gray90 dark:text-grayF3">
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
                          item === value && "bg-grayF3 dark:bg-black29",
                        )}
                        onSelect={() => {
                          setValue(item === value ? "" : item);
                        }}
                      >
                        <AddressIcon className="text-grayC4" />
                        <div className="flex flex-col gap-1">
                          <p className="font-medium leading-6 text-gray90 dark:text-grayF3">
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
              className="calendar min-w-full rounded-[20px] border border-grayF6 bg-white shadow-md dark:border-black44 dark:bg-black29 xl:min-w-[250px] xl:shadow-[0px_12px_60px_0px_rgba(89,_89,_89,_0.10)]"
            />
          </div>
        )}
      </div>
    </Popover>
  );
}

"use client";

import { ChevronDownIcon, ChevronTopIcon } from "@/components/icons";
import { tabsLink } from "@/constants/general.const";
import { listLocation } from "@/constants/hotel.const";
import { listLocation as listLocationCar } from "@/constants/car.const";
import { cn } from "@/lib/utils";
import { useHotelStore } from "@/store/hotelStore";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ComponentProps, PropsWithChildren, useState } from "react";
import { FilterItem, Passenger } from ".";
import { Button } from "../ui";
import { useFlightStore } from "@/store/flightStore";
import { useCarStore } from "@/store/carStore";

interface NavbarFilterProps extends ComponentProps<"div"> {
  hiddenLinks?: boolean;
  type: "hotel" | "flight" | "car";
}

export function NavbarFilter({
  hiddenLinks,
  className,
  type,
}: PropsWithChildren<NavbarFilterProps>) {
  const [openPassenger, setOpenPassenger] = useState<boolean>(false);

  const path = usePathname();
  const router = useRouter();

  const { params: hotelParams, setParams: setHotelParams } = useHotelStore();
  const { params: flightParams, setParams: setFlightParams } = useFlightStore();
  const { params: carParams, setParams: setCarParams } = useCarStore();

  const handleSubmitFilter = () => {
    if (type === "hotel") {
      router.push(
        `/hotels/?location=${hotelParams.location}&checkInDate=${
          hotelParams.checkInDate
        }&checkOutDate=${hotelParams.checkOutDate}&passengers=${
          hotelParams.passenger?.adults +
          "." +
          hotelParams.passenger?.children +
          "." +
          hotelParams.passenger?.infants
        }`,
      );
    }
    if (type === "flight") {
      router.push(
        `/flights/?from=${flightParams.from}&to=${
          flightParams.to
        }&checkInDate=${flightParams.checkInDate}&checkOutDate=${
          flightParams.checkOutDate
        }&passengers=${
          flightParams.passenger?.adults +
          "." +
          flightParams.passenger?.children +
          "." +
          flightParams.passenger?.infants
        }`,
      );
    }
    if (type === "car") {
      router.push(
        `/car-rentals/?from=${carParams.from}&to=${carParams.to}&checkInDate=${carParams.checkInDate}&checkOutDate=${carParams.checkOutDate}`,
      );
    }
  };

  return (
    <div
      className={cn(
        "relative rounded-[20px] bg-white px-[60px] py-[30px] shadow-[0px_12px_60px_0px_rgba(89,_89,_89,_0.10)]",
        className,
      )}
    >
      {openPassenger && (
        <Passenger
          type={type}
          params={type === "hotel" ? hotelParams : flightParams}
          setParams={type === "hotel" ? setHotelParams : setFlightParams}
        />
      )}
      <div className="flex items-end gap-[50px]">
        <div className="flex flex-1 flex-col gap-7">
          <div
            className={cn(
              "flex w-full items-center justify-between pb-0",
              !hiddenLinks && "border-b border-b-grayF3 pb-7",
            )}
          >
            {!hiddenLinks && (
              <div className="flex items-center gap-8">
                {tabsLink.map((item) => (
                  <Link
                    href={item.path}
                    className={cn(
                      item.path === path
                        ? "tab-active text-black44"
                        : "text-gray8B",
                      "flex items-center gap-2",
                    )}
                    key={item.path}
                  >
                    {item.icon}
                    <span className="text-sm font-bold">{item.label}</span>
                  </Link>
                ))}
              </div>
            )}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-[10px]">
                <span className="text-lg font-medium text-black44">
                  Round trip
                </span>
                <ChevronDownIcon className="text-gray8B"></ChevronDownIcon>
              </div>
              {type !== "car" && (
                <div
                  className="flex cursor-pointer items-center gap-[10px]"
                  onClick={() => setOpenPassenger(!openPassenger)}
                >
                  <span className="text-lg font-medium text-black44">
                    1 passenger
                  </span>
                  {openPassenger ? (
                    <ChevronTopIcon className="text-gray8B"></ChevronTopIcon>
                  ) : (
                    <ChevronDownIcon className="text-gray8B"></ChevronDownIcon>
                  )}
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center gap-2">
            {type === "hotel" && (
              <>
                <FilterItem
                  title="Location"
                  description="Where are you from?"
                  className="w-[332px]"
                  listLocation={listLocation}
                  type="location"
                  onSetLocation={(location) =>
                    setHotelParams({ ...hotelParams, location })
                  }
                />
                <FilterItem
                  type="date"
                  title="Check in"
                  description="Add Date"
                  valueDate={hotelParams.checkInDate}
                  onSetDate={(date) => {
                    setHotelParams({ ...hotelParams, checkInDate: date });
                  }}
                />
                <FilterItem
                  type="date"
                  title="Check out"
                  description="Add Date"
                  arrowTurn={false}
                  valueDate={hotelParams.checkOutDate}
                  onSetDate={(date) => {
                    setHotelParams({ ...hotelParams, checkOutDate: date });
                  }}
                />
              </>
            )}
            {type === "flight" && (
              <>
                <FilterItem
                  title="Leaving From"
                  description="Where are you from?"
                  type="location"
                  className="w-[260px]"
                  listLocation={listLocation}
                  onSetLocation={(location) =>
                    setFlightParams({ ...flightParams, from: location })
                  }
                />
                <FilterItem
                  title="Going to"
                  description="Going to?"
                  type="location"
                  className="w-[200px]"
                  listLocation={listLocation}
                  onSetLocation={(location) =>
                    setFlightParams({ ...flightParams, to: location })
                  }
                />
                <FilterItem
                  title="Check in"
                  description="Add date"
                  type="date"
                  className="w-[182px]"
                  valueDate={flightParams.checkInDate}
                  onSetDate={(date) => {
                    setFlightParams({ ...flightParams, checkInDate: date });
                  }}
                />
                <FilterItem
                  title="Check out"
                  description="Add date"
                  type="date"
                  className="w-[182px]"
                  arrowTurn={false}
                  valueDate={flightParams.checkOutDate}
                  onSetDate={(date) => {
                    setFlightParams({ ...flightParams, checkOutDate: date });
                  }}
                />
              </>
            )}
            {type === "car" && (
              <>
                <FilterItem
                  title="Pick up from"
                  description="Where are you from?"
                  type="location"
                  className="w-[260px]"
                  listLocation={listLocationCar}
                  styleContent="w-[248px]"
                  onSetLocation={(location) =>
                    setCarParams({ ...carParams, from: location })
                  }
                />
                <FilterItem
                  title="Pick up to"
                  description="Going to"
                  type="location"
                  className="w-[200px]"
                  listLocation={listLocationCar}
                  styleContent="w-[230px]"
                  onSetLocation={(location) =>
                    setCarParams({ ...carParams, to: location })
                  }
                />
                <FilterItem
                  title="Check in"
                  description="Add date"
                  type="date"
                  className="w-[182px]"
                  valueDate={carParams.checkInDate}
                  onSetDate={(date) => {
                    setCarParams({ ...carParams, checkInDate: date });
                  }}
                />
                <FilterItem
                  title="Check out"
                  description="Add date"
                  type="date"
                  className="w-[182px]"
                  arrowTurn={false}
                  valueDate={carParams.checkOutDate}
                  onSetDate={(date) => {
                    setCarParams({ ...carParams, checkOutDate: date });
                  }}
                />
              </>
            )}
          </div>
        </div>
        <Button variant="primary" onClick={handleSubmitFilter}>
          Search
        </Button>
      </div>
    </div>
  );
}

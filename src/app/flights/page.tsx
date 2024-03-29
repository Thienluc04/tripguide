"use client";

import {
  Breadcrumb,
  CheckboxFilter,
  NavbarFilter,
  SidebarFilter,
  SliderFilter,
} from "@/components/common";
import { FlightItem } from "@/components/flight";
import Image from "next/image";
import { useState } from "react";

import loadingImage from "@images/loading.png";

const listPopular: string[] = [
  "Non Stop",
  "IndiGo (10)",
  "Vistara (5)",
  "Late Departures (5)",
  "Go First (3)",
  "",
];

const listAirline: string[] = [
  "Air India (11)",
  "Go First (13)",
  "IndiGo (24)",
  "",
];

const listStop: string[] = ["Non Stop", "1 Stop", "2+ Stop", ""];

interface ListFlightPageProps {}

export default function ListFlightPage(props: ListFlightPageProps) {
  const [price, setPrice] = useState<number>(50);

  return (
    <>
      <div className="mb-10 bg-grayF6 dark:bg-black xl:mb-0">
        <div className="container px-5 pt-10 xl:px-0 xl:pt-0">
          <Breadcrumb
            list={["Home"]}
            last="Flights"
            className="-mb-14 mt-0 pt-10"
          />
          <NavbarFilter
            className="container xl:!mb-[130px] xl:translate-y-2/4"
            type="flight"
            hiddenLinks
          />
        </div>
      </div>
      <div className="container px-5 xl:px-0">
        <div className="mx-auto mb-12 mt-2 hidden h-[2px] bg-[#EDEDED] dark:bg-[#120E0E] xl:block xl:w-[1120px]"></div>
        <div className="flex flex-col justify-between xl:flex-row">
          <SidebarFilter>
            <CheckboxFilter
              title="Popular Filters"
              listData={listPopular}
              listLabel={["$2.632", "$2.245", "$2.846", "$2.845", "$2.567"]}
              limit={5}
            />
            <SliderFilter
              title="Price Range"
              max={500}
              value={price}
              setValue={setPrice}
            />
            <CheckboxFilter
              title="Stops"
              listData={listStop}
              listLabel={["$2.527", "$2.867", "$2.367"]}
              limit={3}
            />
            <CheckboxFilter
              title="Stops"
              listData={listAirline}
              listLabel={["$2.381", "$2.846", "$2.247"]}
              limit={3}
            />
          </SidebarFilter>
          <div className="mt-10 flex flex-col gap-[30px] xl:mt-0">
            <FlightItem />
            <FlightItem />
            <FlightItem />
            <FlightItem />
            <div className="mx-auto flex w-full items-center justify-center gap-4 rounded-3xl border border-grayC3 p-[10px] xl:w-[176px]">
              <Image src={loadingImage} alt="loading" width={18} height={18} />
              <span className="font-medium leading-6 text-black dark:text-white">
                View All
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

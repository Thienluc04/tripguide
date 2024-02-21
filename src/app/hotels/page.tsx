"use client";

import {
  Breadcrumb,
  CheckboxFilter,
  NavbarFilter,
  SearchFilter,
  SidebarFilter,
  SliderFilter,
} from "@/components/common";
import { HotelItem } from "@/components/hotel";
import Image from "next/image";
import { useState } from "react";

import loadingImage from "@images/loading.png";
import hotelFirst from "@images/hotels/hotel-1.png";
import hotelSecond from "@images/hotels/hotel-2.png";
import hotelThird from "@images/hotels/hotel-3.png";

const listPopular: string[] = [
  "Hotels",
  "Breakfast and Dinner",
  "Free Cancellation",
  "No prepayment",
  "",
];

const listProperty: string[] = ["Hotels", "Apartments", "Resorts", ""];

const listBudget: string[] = [
  "Less than $75",
  "$75 to 125",
  "$125 to 200",
  "$200 to $300",
  "Greater than $300",
];

const listFacilities: string[] = [
  "Outdoor Sports",
  "BBQ",
  "Living Room",
  "Room Service",
  "Swimming Pool",
  "Spa",
  "",
];

export default function ListHotelPage() {
  const [price, setPrice] = useState<number>(50);

  return (
    <>
      <div className="container">
        <Breadcrumb list={["Home"]} last="Hotel list" className="mb-[60px]" />
        <NavbarFilter
          className="container !mb-[70px]"
          type="hotel"
          hiddenLinks
        />
      </div>
      <div className="hotel-container flex gap-10">
        <SidebarFilter>
          <SearchFilter />
          <CheckboxFilter
            title="Popular Filters"
            listData={listPopular}
            limit={4}
          />
          <SliderFilter title="Price Range" value={price} setValue={setPrice} />
          <CheckboxFilter
            title="Property Type"
            listData={listProperty}
            listLabel={["108", "141", "108"]}
            limit={3}
          />
          <CheckboxFilter title="Your budget" listData={listBudget} />
          <CheckboxFilter
            title="Facilities"
            listData={listFacilities}
            listLabel={["108", "141", "108", "108", "141", "108"]}
            limit={6}
            last
          />
        </SidebarFilter>
        <div className="flex flex-col gap-[50px]">
          <HotelItem
            hotel={{
              image: hotelFirst,
              title: "Zuich, Switzerland",
              rating: 4.8,
              totalRate: 122,
              location: "Zuich town, Switzerland",
              place: "Zuich Hotel, Switzerland",
              date: "15.05.2021-16.05.2021",
              plane: "Depature from zuich",
            }}
          />
          <HotelItem
            hotel={{
              image: hotelSecond,
              title: "Zuich, Switzerland",
              rating: 4.8,
              totalRate: 122,
              location: "Zuich town, Switzerland",
              place: "Zuich Hotel, Switzerland",
              date: "15.05.2021-16.05.2021",
              plane: "Depature from zuich",
            }}
          />
          <HotelItem
            hotel={{
              image: hotelThird,
              title: "Zuich, Switzerland",
              rating: 4.8,
              totalRate: 122,
              location: "Zuich town, Switzerland",
              place: "Zuich Hotel, Switzerland",
              date: "15.05.2021-16.05.2021",
              plane: "Depature from zuich",
            }}
          />
          <div className="mx-auto flex w-[176px] items-center justify-center gap-4 rounded-3xl border border-grayC3 p-[10px]">
            <Image src={loadingImage} alt="loading" width={18} height={18} />
            <span className="font-medium leading-6 text-black dark:text-white">
              View All
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

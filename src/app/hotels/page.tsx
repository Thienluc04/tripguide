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
import { useEffect, useState } from "react";

import hotelApi from "@/api-client/hotel-api";
import { useCommonStore } from "@/store/common-store";
import loadingImage from "@images/loading.png";

const listPopular: string[] = [
  "Hotels",
  "Breakfast and Dinner",
  "Free Cancellation",
  "No prepayment",
  "Test",
];

const listProperty: string[] = ["Hotels", "Apartments", "Resorts", "Test"];

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
];

const LIMIT_PER_PAGE = 3;

export default function ListHotelPage() {
  const [price, setPrice] = useState<number>(50);
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const { params } = useCommonStore();

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const access_token = params.tokens?.access_token;
      if (access_token) {
        const data = await hotelApi.getListHotel(access_token, {
          limit: LIMIT_PER_PAGE,
          page,
        });
        setHotels(data.result?.hotels as Hotel[]);
        setIsLoading(false);
      }
    })();
  }, [params.tokens]);

  return (
    <>
      <div className="container w-[calc(100%-40px)] pt-10 xl:w-auto xl:pt-0">
        <Breadcrumb list={["Home"]} last="Hotel list" className="mb-[60px]" />
        <NavbarFilter
          className="container !mb-[70px]"
          type="hotel"
          hiddenLinks
        />
      </div>
      <div className="hotel-container flex w-[calc(100%-40px)] flex-col items-center gap-10 xl:w-auto xl:flex-row xl:items-start">
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
            listLabel={["108", "141", "108", "100"]}
            limit={3}
          />
          <CheckboxFilter title="Your budget" listData={listBudget} />
          <CheckboxFilter
            title="Facilities"
            listData={listFacilities}
            listLabel={["108", "141", "108", "108", "141", "108"]}
            limit={5}
            last
          />
        </SidebarFilter>
        <div className="flex flex-1 flex-col gap-[50px]">
          {isLoading &&
            new Array(3).fill(0).map((_, index) => (
              <div
                key={index}
                className="flex flex-1 flex-col rounded-2xl border border-slate-700 p-4 shadow"
              >
                <div className="flex animate-pulse space-x-4">
                  <div className="h-[400px] w-[400px] rounded-xl bg-slate-700"></div>
                  <div className="flex-1 space-y-6 py-1">
                    <div className="mt-5 h-10 rounded bg-slate-700"></div>
                    <div className="mb-10 flex gap-5">
                      <div className="h-5 w-[200px] rounded bg-slate-700"></div>
                      <div className="h-5 w-[200px] rounded bg-slate-700"></div>
                    </div>
                    <div className="mb-10 flex gap-5">
                      <div className="h-5 w-[200px] rounded bg-slate-700"></div>
                      <div className="h-5 w-[200px] rounded bg-slate-700"></div>
                    </div>
                    <div className="flex gap-10">
                      <div className="flex flex-col gap-5">
                        <div className="h-5 w-[100px] rounded bg-slate-700"></div>
                        <div className="h-5 w-[100px] rounded bg-slate-700"></div>
                        <div className="h-5 w-[100px] rounded bg-slate-700"></div>
                      </div>
                      <div className="flex flex-col gap-5">
                        <div className="h-10 w-[200px] rounded-full bg-slate-700"></div>
                        <div className="h-10 w-[200px] rounded-full bg-slate-700"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          {hotels.length > 0 &&
            hotels.map((hotel) => <HotelItem key={hotel._id} hotel={hotel} />)}
          <div className="mx-auto flex w-full items-center justify-center gap-4 rounded-xl border border-grayC3 p-[10px] xl:w-[176px] xl:rounded-3xl">
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

"use client";

import {
  ChooseTypeCar,
  FilterListCar,
  ListContentCar,
} from "@/components/car/list";
import {
  Breadcrumb,
  CheckboxFilter,
  NavbarFilter,
  SidebarFilter,
  SliderFilter,
} from "@/components/common";
import { useState } from "react";

import loadingImage from "@images/loading.png";
import Image from "next/image";

interface CarRentalsPageProps {}

const listBrand = ["Audi", "BMW", "Acura", "Honda", "Jeep", "Mercury", "Other"];
const listCapacity = ["2-5 passengers", "6 or more passengers 12"];
const listSpecs = ["Air Conditioning", "4+ doors"];
const listMileage = ["Limited", "Unlimited"];

export default function CarRentalsPage(props: CarRentalsPageProps) {
  const [price, setPrice] = useState<number>(50);

  return (
    <>
      <div className="mb-10 bg-grayF6 pt-10 dark:bg-black xl:mb-0 xl:pt-0">
        <div className="container px-5 xl:px-0">
          <Breadcrumb
            list={["Home"]}
            last="Cars"
            className="-mb-14 mt-0 pt-10"
          />
          <NavbarFilter
            className="container xl:!mb-[130px] xl:translate-y-2/4"
            type="car"
            hiddenLinks
          />
        </div>
      </div>
      <div className="hotel-container mx-auto flex max-w-[1400px] flex-col gap-7 xl:flex-row">
        <div>
          <h3 className="mb-[35px] hidden px-5 text-[22px] font-medium text-black33 dark:text-white xl:block xl:px-0">
            Filter by
          </h3>
          <SidebarFilter>
            <CheckboxFilter title="Best Brands" listData={listBrand} />
            <CheckboxFilter title="Capacity" listData={listCapacity} />
            <SliderFilter
              title="Price Range"
              value={price}
              min={100}
              max={300}
              setValue={setPrice}
            />
            <CheckboxFilter title="Car Specs" listData={listSpecs} />
            <CheckboxFilter title="Mileage/Kilometers" listData={listMileage} />
          </SidebarFilter>
        </div>
        <div className="px-5 xl:px-0">
          <ChooseTypeCar />
          <FilterListCar />
          <ListContentCar />
          <div className="mx-auto mt-10 flex items-center justify-center gap-4 rounded-xl border border-grayC3 p-[10px] xl:w-[176px] xl:rounded-3xl">
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

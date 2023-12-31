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
      <div className="bg-grayF6">
        <div className="container">
          <Breadcrumb
            list={["Home"]}
            last="Cars"
            className="-mb-14 mt-0 pt-10"
          />
          <NavbarFilter
            className="container !mb-[130px] translate-y-2/4"
            type="car"
            hiddenLinks
          />
        </div>
      </div>
      <div className="hotel-container mx-auto flex max-w-[1400px] gap-7">
        <div>
          <h3 className="mb-[35px] text-[22px] font-medium text-black33">
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
        <div>
          <ChooseTypeCar />
          <FilterListCar />
          <ListContentCar />
          <div className="mx-auto mt-10 flex w-[176px] items-center justify-center gap-4 rounded-3xl border border-grayC3 p-[10px]">
            <Image src={loadingImage} alt="loading" width={18} height={18} />
            <span className="font-medium leading-6 text-black">View All</span>
          </div>
        </div>
      </div>
    </>
  );
}

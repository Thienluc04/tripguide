"use client";

import Image, { StaticImageData } from "next/image";

import ourBrands1 from "@images/cars/our-brands-1.png";
import ourBrands2 from "@images/cars/our-brands-2.png";
import ourBrands3 from "@images/cars/our-brands-3.png";
import ourBrands4 from "@images/cars/our-brands-4.png";
import ourBrands5 from "@images/cars/our-brands-5.png";
import ourBrands6 from "@images/cars/our-brands-6.png";

import ourBrandsDark1 from "@images/cars/our-brands-1-dark.png";
import ourBrandsDark2 from "@images/cars/our-brands-2-dark.png";
import ourBrandsDark3 from "@images/cars/our-brands-3-dark.png";
import ourBrandsDark4 from "@images/cars/our-brands-4-dark.png";
import ourBrandsDark5 from "@images/cars/our-brands-5-dark.png";
import ourBrandsDark6 from "@images/cars/our-brands-6-dark.png";
import { useCommonStore } from "@/store/common-store";

interface OurBrandsSectionProps {}

const listBrand: StaticImageData[] = [
  ourBrands1,
  ourBrands2,
  ourBrands3,
  ourBrands4,
  ourBrands5,
  ourBrands6,
];

const listBrandDark: StaticImageData[] = [
  ourBrandsDark1,
  ourBrandsDark2,
  ourBrandsDark3,
  ourBrandsDark4,
  ourBrandsDark5,
  ourBrandsDark6,
];

export function OurBrandsSection(props: OurBrandsSectionProps) {
  const { params } = useCommonStore();

  return (
    <div className="mx-auto max-w-[970px]">
      <h2 className="mb-[14px] text-center text-[32px] font-semibold text-black20 dark:text-white">
        Our Brands
      </h2>
      <p className="mx-auto mb-[30px] max-w-[520px] px-5 text-center text-sm text-gray6F dark:text-grayC3 xl:mb-[60px] xl:px-0">
        All of these place are becoming your ideal workplaces for your team
        meetings, corporate events, press & influencer
      </p>
      <div className="flex flex-wrap items-center justify-center gap-5 xl:flex-nowrap xl:justify-start xl:gap-[80px]">
        {params.theme === "light" &&
          listBrand.map((item, index) => (
            <div key={index} className="relative">
              <Image src={item} alt="our-brands" width={90} height={28} />
            </div>
          ))}

        {params.theme === "dark" &&
          listBrandDark.map((item, index) => (
            <div key={index} className="relative">
              <Image src={item} alt="our-brands" width={90} height={28} />
            </div>
          ))}
      </div>
    </div>
  );
}

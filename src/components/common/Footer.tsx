"use client";

import Image from "next/image";
import { MoonIcon, SunIcon } from "@/components/icons";
import Link from "next/link";
import {
  listBusiness,
  listServices,
  listSupport,
} from "@/constants/footer.const";
import { Button } from "../ui";

import logo from "@images/logo.png";
import { useCommonStore } from "@/store/commonStore";
import { cn } from "@/lib/utils";
import { useEffect, useMemo, useState } from "react";

interface FooterProps {}

export function Footer(props: FooterProps) {
  const { params, setParams } = useCommonStore();

  return (
    <footer>
      <div
        className="!xl:mb-0 container !mb-5 !mt-10 w-[calc(100%-40px)] items-end justify-between rounded-xl bg-primary px-5 
        py-3 xl:mt-0 xl:flex xl:h-[248px] xl:w-auto xl:translate-y-1/2 xl:rounded-2xl xl:bg-[url(/images/bg-footer.png)] xl:px-[90px] xl:py-[62px]"
      >
        <div className="mb-3 xl:mb-0">
          <h2 className="mb-2 font-OpenSans text-xl font-bold text-white xl:mb-4 xl:text-[44px] xl:font-extrabold">
            Get our pro offers
          </h2>
          <p className="max-w-[234px] font-Roboto text-xs text-white xl:max-w-[370px] xl:text-base xl:leading-7">
            Create a visual identity for your company, and an overall brand
          </p>
        </div>
        <div className="inline-flex w-full rounded bg-white p-2 xl:w-[488px]">
          <input
            type="email"
            placeholder="Type your email here"
            className="ml-3 flex-1"
          />
          <Button
            variant="black"
            className="h-auto w-[130px] py-3 font-Roboto font-medium"
          >
            Subscribe
          </Button>
        </div>
      </div>
      <div className="bg-grayF6 pb-[150px] pt-5 dark:bg-black29 dark:text-white xl:pt-[224px]">
        <div className="container flex w-[calc(100%-56px)] flex-col-reverse justify-between gap-8 xl:flex-row xl:gap-0">
          <div className="w-[254px]">
            <Link href={"/"} className="mb-5 flex items-center gap-[10px]">
              <Image src={logo} alt="logo" width={40} height={38}></Image>
              <h2 className="font-OpenSans text-xl font-bold">TripGuide</h2>
            </Link>
            <p className="mb-6 leading-6 text-gray8B dark:text-grayF3">
              This is the team that specializes in making sure in the find it a
              your interior looks cool
            </p>
            <div className="inline-flex gap-1 rounded-lg bg-white p-1 dark:bg-black44">
              <div
                className={cn(
                  "flex h-[30px] w-[60px] cursor-pointer items-center justify-center rounded-lg",
                  params.theme === "light" &&
                    "bg-grayFD shadow-[0px_2px_2px_0px_rgba(67,_67,_67,_0.10)] dark:bg-blackA52",
                )}
                onClick={() => setParams({ theme: "light" })}
              >
                <SunIcon className="text-black44 dark:text-grayF3" />
              </div>
              <div
                className={cn(
                  "flex h-[30px] w-[60px] cursor-pointer items-center justify-center rounded-lg",
                  params.theme === "dark" &&
                    "bg-grayFD shadow-[0px_2px_2px_0px_rgba(67,_67,_67,_0.10)] dark:bg-blackA52",
                )}
                onClick={() => setParams({ theme: "dark" })}
              >
                <MoonIcon className="text-grayB90 dark:text-gray8B" />
              </div>
            </div>
          </div>
          <div>
            <h3 className="mb-3 text-lg font-medium text-black29 dark:text-white xl:mb-5 xl:text-2xl">
              Services
            </h3>
            <div className="flex flex-col gap-1 xl:gap-4">
              {listServices.map((item, index) => (
                <Link
                  key={index}
                  href={"/"}
                  className="font-medium leading-6 text-gray8B dark:text-grayF3"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 text-lg font-medium text-black29 dark:text-white xl:mb-5 xl:text-2xl">
              Support
            </h3>
            <div className="flex flex-col gap-1 xl:gap-4">
              {listSupport.map((item, index) => (
                <Link
                  key={index}
                  href={"/"}
                  className="font-medium leading-6 text-gray8B dark:text-grayF3"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 text-lg font-medium text-black29 dark:text-white xl:mb-5 xl:text-2xl">
              Business
            </h3>
            <div className="flex flex-col gap-1 xl:gap-4">
              {listBusiness.map((item, index) => (
                <Link
                  key={index}
                  href={"/"}
                  className="font-medium leading-6 text-gray8B dark:text-grayF3"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

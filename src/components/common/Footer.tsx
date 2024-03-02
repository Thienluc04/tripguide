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
  const { setParams } = useCommonStore();

  const themeLocal = useMemo(() => {
    if (typeof localStorage !== "undefined") {
      if (localStorage?.getItem("theme")) {
        return localStorage?.getItem("theme");
      }
    }
  }, []);

  const [mode, setMode] = useState<"dark" | "light">(
    (themeLocal as "dark" | "light") || "light",
  );

  useEffect(() => {
    if (localStorage) {
      setParams({
        theme: mode,
      });
      localStorage?.setItem("theme", mode);
    }
  }, [mode, localStorage]);

  return (
    <footer>
      <div
        className="container flex h-[248px] translate-y-1/2 items-end 
        justify-between bg-[url(/images/bg-footer.png)] px-[90px] py-[62px]"
      >
        <div>
          <h2 className="mb-4 font-OpenSans text-[44px] font-extrabold text-white">
            Get our pro offers
          </h2>
          <p className="max-w-[370px] font-Roboto leading-7 text-white">
            Create a visual identity for your company, and an overall brand
          </p>
        </div>
        <div className="inline-flex w-[488px] rounded bg-white p-2">
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
      <div className="bg-grayF6 pb-[150px] pt-[224px] dark:bg-black29 dark:text-white">
        <div className="container flex justify-between">
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
                  mode === "light" &&
                    "bg-grayFD shadow-[0px_2px_2px_0px_rgba(67,_67,_67,_0.10)] dark:bg-blackA52",
                )}
                onClick={() => setMode("light")}
              >
                <SunIcon className="text-black44 dark:text-grayF3" />
              </div>
              <div
                className={cn(
                  "flex h-[30px] w-[60px] cursor-pointer items-center justify-center rounded-lg",
                  mode === "dark" &&
                    "bg-grayFD shadow-[0px_2px_2px_0px_rgba(67,_67,_67,_0.10)] dark:bg-blackA52",
                )}
                onClick={() => setMode("dark")}
              >
                <MoonIcon className="text-grayB90 dark:text-gray8B" />
              </div>
            </div>
          </div>
          <div>
            <h3 className="mb-5 text-2xl font-medium text-black29 dark:text-white">
              Services
            </h3>
            <div className="flex flex-col gap-4">
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
            <h3 className="mb-5 text-2xl font-medium text-black29 dark:text-white">
              Support
            </h3>
            <div className="flex flex-col gap-4">
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
            <h3 className="mb-5 text-2xl font-medium text-black29 dark:text-white">
              Business
            </h3>
            <div className="flex flex-col gap-4">
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

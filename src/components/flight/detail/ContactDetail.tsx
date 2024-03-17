"use client";

import { ChevronDownIcon, PencilWriteIcon } from "@/components/icons";
import {
  Button,
  InputWithLabel,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui";
import { Label } from "@radix-ui/react-label";

interface ContactDetailProps {}

export function ContactDetail(props: ContactDetailProps) {
  return (
    <div className="w-full rounded-[20px] border border-grayF3 bg-white p-5 dark:border-black29 dark:bg-black29 xl:w-auto xl:p-10">
      <div className="mb-6 flex justify-between xl:mr-[76px]">
        <h2 className="text-2xl font-medium leading-9 text-black29 dark:text-grayFD">
          Contact Details
        </h2>
        <div className="flex w-[112px] cursor-pointer items-center justify-center gap-2 rounded-[30px] border border-grayC3 py-2">
          <PencilWriteIcon className="h-3 w-3 text-gray8B dark:text-grayC3" />
          <p className="text-sm font-medium text-gray8B dark:text-grayC3">
            Edit{" "}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-x-[30px] gap-y-6 xl:flex-row xl:flex-wrap">
        <InputWithLabel defaultValue="bddesign776@gmail.com" name="email">
          Enter an email
        </InputWithLabel>
        <InputWithLabel
          defaultValue="bddesign776@gmail.com"
          name="confirmEmail"
        >
          Enter a Confirm Email
        </InputWithLabel>
        <InputWithLabel defaultValue="Sylht, Bangladesh" name="address">
          Enter an address name
        </InputWithLabel>
        <InputWithLabel defaultValue="Sylhet" name="name">
          Enter a city name
        </InputWithLabel>
        <div>
          <Label className="mb-3 block font-bold text-gray8B dark:text-grayC3">
            Country
          </Label>
          <Select>
            <SelectTrigger
              className="h-12 border-grayF3 px-5 text-sm text-gray8B dark:border-black44 dark:text-grayC3 xl:w-[376px]"
              icon={<ChevronDownIcon className="dark:text-grayC3" />}
            >
              <SelectValue placeholder="Country" />
            </SelectTrigger>
            <SelectContent className="border-grayF3 bg-white dark:border-black44 dark:bg-black29">
              <SelectGroup>
                <SelectItem
                  className="h-10 cursor-pointer transition-all hover:text-primary dark:text-grayC3 dark:hover:text-primary"
                  value="male"
                >
                  Bangladesh
                </SelectItem>
                <SelectItem
                  className="h-10 cursor-pointer transition-all hover:text-primary dark:text-grayC3 dark:hover:text-primary"
                  value="female"
                >
                  Bangladesh 2
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <InputWithLabel
          defaultValue="Bangladesh"
          name="password"
          type="password"
        >
          Enter password
        </InputWithLabel>
        <div>
          <Label className="mb-3 block font-bold text-gray8B dark:text-grayC3">
            Country code
          </Label>
          <Select>
            <SelectTrigger
              className="h-12 border-grayF3 px-5 text-sm text-gray8B dark:border-black44 dark:text-grayC3 xl:w-[376px]"
              icon={<ChevronDownIcon className="dark:text-grayC3" />}
            >
              <SelectValue placeholder="Country code" />
            </SelectTrigger>
            <SelectContent className="border-grayF3 bg-white dark:border-black44 dark:bg-black29">
              <SelectGroup>
                <SelectItem
                  className="h-10 cursor-pointer transition-all hover:text-primary dark:text-grayC3 dark:hover:text-primary"
                  value="male"
                >
                  4032
                </SelectItem>
                <SelectItem
                  className="h-10 cursor-pointer transition-all hover:text-primary dark:text-grayC3 dark:hover:text-primary"
                  value="female"
                >
                  4033
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label className="mb-3 block font-bold text-gray8B dark:text-grayC3">
            Enter a phone number
          </Label>
          <Select>
            <SelectTrigger
              className="h-12 border-grayF3 px-5 text-sm text-gray8B dark:border-black44 dark:text-grayC3 xl:w-[376px]"
              icon={<ChevronDownIcon className="dark:text-grayC3" />}
            >
              <SelectValue placeholder="Phone number" />
            </SelectTrigger>
            <SelectContent className="border-grayF3 bg-white dark:border-black44 dark:bg-black29">
              <SelectGroup>
                <SelectItem
                  className="h-10 cursor-pointer transition-all hover:text-primary dark:text-grayC3 dark:hover:text-primary"
                  value="male"
                >
                  0973356638
                </SelectItem>
                <SelectItem
                  className="h-10 cursor-pointer transition-all hover:text-primary dark:text-grayC3 dark:hover:text-primary"
                  value="female"
                >
                  01672990198
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}

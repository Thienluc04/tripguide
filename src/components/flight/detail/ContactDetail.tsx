'use client';

import { ChevronDownIcon, PencilWriteIcon } from '@/components/icons';
import {
  Button,
  InputWithLabel,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui';
import { Label } from '@radix-ui/react-label';

interface ContactDetailProps {}

export function ContactDetail(props: ContactDetailProps) {
  return (
    <div className="p-10 rounded-[20px] border border-grayF3 bg-white">
      <div className="flex justify-between mb-6 mr-[76px]">
        <h2 className="text-black29 text-2xl font-medium leading-9">
          Contact Details
        </h2>
        <div className="w-[112px] border border-grayC3 rounded-[30px] cursor-pointer py-2 flex items-center justify-center gap-2">
          <PencilWriteIcon className="text-gray8B w-3 h-3" />
          <p className="text-gray8B text-sm font-medium">Edit </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-x-[30px] gap-y-6">
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
          <Label className="text-gray8B font-bold mb-3 block">Country</Label>
          <Select>
            <SelectTrigger
              className="w-[376px] h-12 border-grayF3 px-5 text-gray8B text-sm"
              icon={<ChevronDownIcon />}
            >
              <SelectValue placeholder="Country" />
            </SelectTrigger>
            <SelectContent className="bg-white border-grayF3">
              <SelectGroup>
                <SelectItem
                  className="h-10 hover:text-primary transition-all cursor-pointer"
                  value="male"
                >
                  Bangladesh
                </SelectItem>
                <SelectItem
                  className="h-10 hover:text-primary transition-all cursor-pointer"
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
          <Label className="text-gray8B font-bold mb-3 block">
            Country code
          </Label>
          <Select>
            <SelectTrigger
              className="w-[376px] h-12 border-grayF3 px-5 text-gray8B text-sm"
              icon={<ChevronDownIcon />}
            >
              <SelectValue placeholder="Country code" />
            </SelectTrigger>
            <SelectContent className="bg-white border-grayF3">
              <SelectGroup>
                <SelectItem
                  className="h-10 hover:text-primary transition-all cursor-pointer"
                  value="male"
                >
                  4032
                </SelectItem>
                <SelectItem
                  className="h-10 hover:text-primary transition-all cursor-pointer"
                  value="female"
                >
                  4033
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label className="text-gray8B font-bold mb-3 block">
            Enter a phone number
          </Label>
          <Select>
            <SelectTrigger
              className="w-[376px] h-12 border-grayF3 px-5 text-gray8B text-sm"
              icon={<ChevronDownIcon />}
            >
              <SelectValue placeholder="Phone number" />
            </SelectTrigger>
            <SelectContent className="bg-white border-grayF3">
              <SelectGroup>
                <SelectItem
                  className="h-10 hover:text-primary transition-all cursor-pointer"
                  value="male"
                >
                  0973356638
                </SelectItem>
                <SelectItem
                  className="h-10 hover:text-primary transition-all cursor-pointer"
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

import {
  CarIcon,
  ClockIcon,
  FeatureIcon,
  SelectionIcon,
  UserIcon,
} from "@/components/icons";
import { SidebarCarDetail } from ".";
import {
  Button,
  Command,
  CommandGroup,
  CommandItem,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui";
import { ComponentProps } from "react";
import { cn } from "@/lib/utils";

interface DetailCarContentProps extends ComponentProps<"div"> {}

export function DetailCarContent({
  className,
  ...props
}: DetailCarContentProps) {
  return (
    <div className={cn("flex justify-between", className)} {...props}>
      <div className="w-[620px]">
        <h2 className="mb-[30px] text-[34px] font-bold leading-[44px] text-black">
          Car details
        </h2>
        <div className="mb-[60px] flex flex-wrap justify-between gap-y-7">
          <div className="flex w-[260px] items-center gap-4 rounded-[10px] bg-grayF6 px-5 py-4">
            <ClockIcon className="text-black29" />
            <p className="text-lg text-gray8B">Put your car feature</p>
          </div>
          <div className="flex w-[260px] items-center gap-4 rounded-[10px] bg-grayF6 px-5 py-4">
            <CarIcon className="text-black29" />
            <p className="text-lg text-gray8B">Put your car feature</p>
          </div>
          <div className="flex w-[260px] items-center gap-4 rounded-[10px] bg-grayF6 px-5 py-4">
            <UserIcon className="text-black29" />
            <p className="text-lg text-gray8B">UP to 6 people</p>
          </div>
          <div className="flex w-[260px] items-center gap-4 rounded-[10px] bg-grayF6 px-5 py-4">
            <FeatureIcon className="text-black29" />
            <p className="text-lg text-gray8B">Put your car feature</p>
          </div>
        </div>
        <div className="mb-10 h-[1px] bg-grayF3"></div>
        <div>
          <h2 className="mb-[30px] text-[34px] font-medium leading-[44px] text-black">
            Diver Details
          </h2>
          <div className="mb-6">
            <Popover>
              <PopoverTrigger asChild>
                <div className="flex cursor-pointer items-center justify-between rounded-[10px] bg-grayF6 px-7 py-4">
                  <p className="text-lg text-gray8B">Title</p>
                  <SelectionIcon className="text-gray8B" />
                </div>
              </PopoverTrigger>
              <PopoverContent className="w-[620px] border-none p-0">
                <Command className="mx-0 border border-grayF3 bg-grayF6">
                  <CommandGroup className="bg-inherit">
                    <CommandItem className="w-full cursor-pointer hover:bg-grayF7">
                      Section 1
                    </CommandItem>
                    <CommandItem className="w-full cursor-pointer hover:bg-grayF7">
                      Section 2
                    </CommandItem>
                    <CommandItem className="w-full cursor-pointer hover:bg-grayF7">
                      Section 3
                    </CommandItem>
                  </CommandGroup>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
          <div className="mb-11 flex flex-wrap justify-between gap-y-6">
            <Input
              className="h-[54px] w-[260px] rounded-[10px] border-none bg-grayF6 px-7 text-lg"
              placeholder="First name"
            />
            <Input
              className="h-[54px] w-[260px] rounded-[10px] border-none bg-grayF6 px-7 text-lg"
              placeholder="Last name"
            />
            <Input
              className="h-[54px] w-[260px] rounded-[10px] border-none bg-grayF6 px-7 text-lg"
              placeholder="Email address"
              type="email"
            />
            <Input
              className="h-[54px] w-[260px] rounded-[10px] border-none bg-grayF6 px-7 text-lg"
              placeholder="Contact number"
              type="number"
            />
          </div>
          <div className="border-b border-b-grayF3 pb-[60px]">
            <h2 className="mb-[30px] text-[34px] font-bold leading-[44px] text-black">
              Place Details
            </h2>
            <p className="mb-6 text-lg text-gray8B">
              The best 16 passenger small group, intimate and unique, miford
              sournd tour.
            </p>
            <p className="mb-6 text-lg text-gray8B">
              Travel in unporaffeled style and comforn in a premium meredes van
              equpped with large ponoramic windows, leather recining seats,
              quirky on board videos, free wifi and complimentary bottled water.
            </p>
            <p className="mb-9 text-lg text-gray8B">
              From your occommadotion enjoy the stunning scenic drive.
            </p>
            <Button
              variant={"outline"}
              className="flex h-10 rounded-[32px] border-grayF3 px-6 py-3 text-sm font-bold text-black29 shadow-none"
            >
              Show more
            </Button>
          </div>
        </div>
      </div>
      <SidebarCarDetail />
    </div>
  );
}

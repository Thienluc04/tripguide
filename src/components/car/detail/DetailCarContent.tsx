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
    <div
      className={cn(
        "flex flex-col items-start justify-between xl:flex-row",
        className,
      )}
      {...props}
    >
      <div className="xl:w-[620px]">
        <h2 className="mb-6 text-[30px] font-bold leading-[44px] text-black dark:text-grayFD xl:mb-[30px] xl:text-[34px]">
          Car details
        </h2>
        <div className="mb-[30px] flex flex-wrap justify-between gap-y-5 xl:mb-[60px] xl:gap-y-7">
          <div className="flex w-full items-center gap-4 rounded-[10px] bg-grayF6 px-5 py-4 dark:bg-black29 xl:w-[260px]">
            <ClockIcon className="text-black29 dark:text-gray8B" />
            <p className="text-lg text-gray8B">Put your car feature</p>
          </div>
          <div className="flex w-full items-center gap-4 rounded-[10px] bg-grayF6 px-5 py-4 dark:bg-black29 xl:w-[260px]">
            <CarIcon className="text-black29 dark:text-gray8B" />
            <p className="text-lg text-gray8B">Put your car feature</p>
          </div>
          <div className="flex w-full items-center gap-4 rounded-[10px] bg-grayF6 px-5 py-4 dark:bg-black29 xl:w-[260px]">
            <UserIcon className="text-black29 dark:text-gray8B" />
            <p className="text-lg text-gray8B">UP to 6 people</p>
          </div>
          <div className="flex w-full items-center gap-4 rounded-[10px] bg-grayF6 px-5 py-4 dark:bg-black29 xl:w-[260px]">
            <FeatureIcon className="text-black29 dark:text-gray8B" />
            <p className="text-lg text-gray8B">Put your car feature</p>
          </div>
        </div>
        <div className="mb-[30px] h-[1px] bg-grayF3 dark:bg-black29 xl:mb-10"></div>
        <div>
          <h2 className="mb-6 text-[30px] font-medium leading-[44px] text-black dark:text-grayFD xl:mb-[30px] xl:text-[34px]">
            Diver Details
          </h2>
          <div className="mb-4 xl:mb-6">
            <Popover>
              <PopoverTrigger asChild>
                <div className="flex h-[54px] cursor-pointer items-center justify-between rounded-[10px] bg-grayF6 px-6 py-4 dark:bg-black29 xl:px-7">
                  <p className="text-lg text-gray8B">Title</p>
                  <SelectionIcon className="text-gray8B" />
                </div>
              </PopoverTrigger>
              <PopoverContent className="w-[300px] border-none p-0 xl:w-[620px]">
                <Command className="mx-0 border border-grayF3 bg-grayF6 dark:border-black44 dark:bg-black29">
                  <CommandGroup className="bg-inherit">
                    <CommandItem className="w-full cursor-pointer hover:bg-grayF7 dark:text-gray8B dark:hover:bg-inherit dark:hover:text-primary">
                      Section 1
                    </CommandItem>
                    <CommandItem className="w-full cursor-pointer hover:bg-grayF7 dark:text-gray8B dark:hover:bg-inherit dark:hover:text-primary">
                      Section 2
                    </CommandItem>
                    <CommandItem className="w-full cursor-pointer hover:bg-grayF7 dark:text-gray8B dark:hover:bg-inherit dark:hover:text-primary">
                      Section 3
                    </CommandItem>
                  </CommandGroup>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
          <div className="mb-[30px] flex flex-wrap justify-between gap-y-4 xl:mb-11 xl:gap-y-6">
            <Input
              className="h-[54px] rounded-[10px] border-none bg-grayF6 px-6 text-lg dark:bg-black29 dark:text-gray8B xl:w-[260px] xl:px-7"
              placeholder="First name"
            />
            <Input
              className="h-[54px] rounded-[10px] border-none bg-grayF6 px-6 text-lg dark:bg-black29 dark:text-gray8B xl:w-[260px] xl:px-7"
              placeholder="Last name"
            />
            <Input
              className="h-[54px] rounded-[10px] border-none bg-grayF6 px-6 text-lg dark:bg-black29 dark:text-gray8B xl:w-[260px] xl:px-7"
              placeholder="Email address"
              type="email"
            />
            <Input
              className="h-[54px] rounded-[10px] border-none bg-grayF6 px-6 text-lg dark:bg-black29 dark:text-gray8B xl:w-[260px] xl:px-7"
              placeholder="Contact number"
              type="number"
            />
          </div>
          <div className="border-b border-b-grayF3 pb-[30px] dark:border-b-black44 xl:pb-[60px]">
            <h2 className="mb-5 text-[30px] font-bold leading-[44px] text-black dark:text-grayFD xl:mb-[30px] xl:text-[34px]">
              Place Details
            </h2>
            <p className="mb-4 text-xs text-gray8B dark:text-grayF3 xl:mb-6 xl:text-lg">
              The best 16 passenger small group, intimate and unique, miford
              sournd tour.
            </p>
            <p className="mb-4 text-xs text-gray8B dark:text-grayF3 xl:mb-6 xl:text-lg">
              Travel in unporaffeled style and comforn in a premium meredes van
              equpped with large ponoramic windows, leather recining seats,
              quirky on board videos, free wifi and complimentary bottled water.
            </p>
            <p className="mb-[30px] text-xs text-gray8B dark:text-grayF3 xl:mb-9 xl:text-lg">
              From your occommadotion enjoy the stunning scenic drive.
            </p>
            <Button
              variant={"outline"}
              className="flex h-10 w-full rounded-xl border-grayF3 px-6 py-3 text-sm font-bold text-black29 shadow-none dark:border-black44 dark:text-grayF6 xl:w-auto xl:rounded-[32px]"
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

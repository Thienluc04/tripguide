import { ArrowDownIcon, CalendarIcon, PencilWriteIcon } from "../icons";
import {
  Button,
  Input,
  Label,
  Select,
  SelectTrigger,
  SelectValue,
} from "../ui";

interface PersonalInfoContentProps {}

export function PersonalInfoContent(props: PersonalInfoContentProps) {
  return (
    <div className="xl:mt-[70px]">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-2xl font-medium leading-9 text-black29 dark:text-grayF3">
          Account info
        </h3>
        <Button
          variant={"outline"}
          className="flex h-auto w-[112px] items-center gap-2 rounded-full border border-grayC3 py-2 dark:border-black44 dark:text-grayC3"
        >
          <PencilWriteIcon className="h-3 w-3" />
          <span className="text-sm font-medium">Edit </span>
        </Button>
      </div>
      <div className="mb-10 flex flex-wrap justify-between gap-6">
        <div className="w-[358px]">
          <Label className="mb-3 inline-block text-base font-bold text-gray8B dark:text-grayC3">
            Display Name
          </Label>
          <Input
            className="h-12 w-full rounded-[10px] border border-grayF3 text-grayC3 shadow-none dark:border-black44"
            defaultValue={"Junathan776"}
          />
        </div>
        <div className="w-[358px]">
          <Label className="mb-3 inline-block text-base font-bold text-gray8B dark:text-grayC3">
            Real Name
          </Label>
          <Input
            className="h-12 w-full rounded-[10px] border border-grayF3 text-grayC3 shadow-none dark:border-black44"
            defaultValue={"Kohaku Tora"}
          />
        </div>
        <div className="w-[358px]">
          <Label className="mb-3 inline-block text-base font-bold text-gray8B dark:text-grayC3">
            Gender
          </Label>
          <Select>
            <SelectTrigger
              icon={<ArrowDownIcon className="h-3 w-4" />}
              className="h-12 w-full rounded-[10px] border-grayF3 text-grayC3 shadow-none dark:border-black44"
            >
              <SelectValue placeholder="Choose gender" />
            </SelectTrigger>
          </Select>
        </div>
        <div className="w-[358px]">
          <Label className="mb-3 inline-block text-base font-bold text-gray8B dark:text-grayC3">
            Date of birth
          </Label>
          <Select>
            <SelectTrigger
              icon={<CalendarIcon className="h-4 w-4" />}
              className="h-12 w-full rounded-[10px] border-grayF3 text-grayC3 shadow-none dark:border-black44"
            >
              <SelectValue placeholder="Add date" />
            </SelectTrigger>
          </Select>
        </div>
        <div className="w-[358px]">
          <Label className="mb-3 inline-block text-base font-bold text-gray8B dark:text-grayC3">
            Phone
          </Label>
          <Input
            className="h-12 w-full rounded-[10px] border border-grayF3 text-grayC3 shadow-none dark:border-black44"
            placeholder="Phone number"
            type="number"
          />
        </div>
        <div className="w-[358px]">
          <Label className="mb-3 inline-block text-base font-bold text-gray8B dark:text-grayC3">
            Email
          </Label>
          <Input
            className="h-12 w-full rounded-[10px] border border-grayF3 text-grayC3 shadow-none dark:border-black44"
            defaultValue={"tamuihut.net"}
            type="email"
          />
        </div>
        <div className="w-[358px]">
          <Label className="mb-3 inline-block text-base font-bold text-gray8B dark:text-grayC3">
            Address
          </Label>
          <Select>
            <SelectTrigger
              icon={<CalendarIcon className="h-4 w-4" />}
              className="h-12 w-full rounded-[10px] border-grayF3 text-grayC3 shadow-none dark:border-black44"
            >
              <SelectValue placeholder="Location" />
            </SelectTrigger>
          </Select>
        </div>
        <div className="w-[358px]">
          <Label className="mb-3 inline-block text-base font-bold text-gray8B dark:text-grayC3">
            Language
          </Label>
          <Select>
            <SelectTrigger
              icon={<CalendarIcon className="h-4 w-4" />}
              className="h-12 w-full rounded-[10px] border-grayF3 text-grayC3 shadow-none dark:border-black44"
            >
              <SelectValue placeholder="English (United States)" />
            </SelectTrigger>
          </Select>
        </div>
      </div>
      <h3 className="mb-6 text-2xl font-medium leading-9 text-black29 dark:text-white">
        Social
      </h3>
      <div className="mb-10 flex flex-wrap items-center gap-6">
        <div className="w-[358px]">
          <Label className="mb-3 inline-block text-base font-bold text-gray8B dark:text-grayC3">
            Website
          </Label>
          <Input
            className="h-12 w-full rounded-[10px] border border-grayF3 text-grayC3 shadow-none dark:border-black44"
            placeholder={"Your site URL"}
          />
        </div>
        <div className="w-[358px]">
          <Label className="mb-3 inline-block text-base font-bold text-gray8B dark:text-grayC3">
            Twitter
          </Label>
          <div className="relative">
            <Input
              className="h-12 w-full rounded-[10px] border border-grayF3 text-grayC3 shadow-none dark:border-black44"
              placeholder={"Your username"}
            />
            <Button
              className="bg-[rgba(59,_113,_254,_0.02) absolute right-2 top-2/4 h-8 -translate-y-2/4 rounded-full border-grayF3 px-3 text-sm font-medium dark:border-black44 dark:text-grayC3"
              variant={"outline"}
            >
              Verify account
            </Button>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-[60px]">
        <Button className="h-12 w-auto rounded-full px-6 py-4 text-base font-bold leading-4 text-grayFD">
          Update profile
        </Button>
        <Button variant={"ghost"} className="h-auto w-auto dark:text-gray8B">
          Cancel
        </Button>
      </div>
    </div>
  );
}

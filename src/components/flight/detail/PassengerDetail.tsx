import {
  Input,
  InputWithLabel,
  Label,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui";
import { ChevronDownIcon } from "@/components/icons";

interface PassengerDetailProps {
  title: string;
  hasBirthday?: boolean;
}

export function PassengerDetail({ title, hasBirthday }: PassengerDetailProps) {
  const listDate = Array.from({ length: 30 }, (_, i) => i + 1);
  const listMonth = Array.from({ length: 12 }, (_, i) => i + 1);
  const listYear = Array.from({ length: 24 }, (_, i) => i + 1);

  return (
    <div className="w-full rounded-[20px] border border-grayF3 bg-white p-5 dark:border-black29 dark:bg-black29 xl:w-auto xl:p-10">
      <h2 className="mb-[30px] text-2xl font-medium leading-9 text-black29 dark:text-grayFD">
        {title}
      </h2>
      <div className="mb-6 flex flex-col gap-[30px] xl:flex-row">
        <InputWithLabel defaultValue="Zuichi" name="firstName">
          First name
        </InputWithLabel>
        <InputWithLabel defaultValue="Switzerland" name="lastName">
          Last name
        </InputWithLabel>
      </div>
      <div className="flex flex-col gap-8 xl:flex-row xl:items-center">
        <div>
          <Label
            htmlFor="gender"
            className="mb-[14px] block font-bold text-gray8B dark:text-grayC3"
          >
            Gender
          </Label>
          <Select>
            <SelectTrigger
              className="h-12 border-grayF3 px-5 text-sm text-gray8B dark:border-black44 dark:text-grayC3 xl:w-[198px]"
              icon={<ChevronDownIcon />}
            >
              <SelectValue placeholder="Gender" />
            </SelectTrigger>
            <SelectContent className="border-grayF3 bg-white dark:border-black44 dark:bg-black29">
              <SelectGroup>
                <SelectItem
                  className="h-10 cursor-pointer transition-all hover:text-primary dark:text-grayC3 dark:hover:text-primary"
                  value="male"
                >
                  Male
                </SelectItem>
                <SelectItem
                  className="h-10 cursor-pointer transition-all hover:text-primary dark:text-grayC3 dark:hover:text-primary"
                  value="female"
                >
                  Female
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        {hasBirthday && (
          <div>
            <Label
              htmlFor="birthday"
              className="mb-[14px] block font-bold text-gray8B dark:text-grayC3"
            >
              Birth Day
            </Label>
            <div className="inline-flex w-full rounded-[10px] border border-grayF3 dark:border-black44 xl:flex xl:w-auto">
              <Select>
                <SelectTrigger
                  className="flex h-12 gap-3 border-none px-5 py-3 text-sm text-gray8B dark:text-grayC3 xl:w-[92px]"
                  icon={<ChevronDownIcon className="dark:text-grayC3" />}
                >
                  <SelectValue placeholder="Date" />
                </SelectTrigger>
                <SelectContent className="border-grayF3 bg-white dark:border-black44 dark:bg-black29">
                  <SelectGroup>
                    {listDate.map((item) => (
                      <SelectItem
                        key={item}
                        className="h-10 cursor-pointer transition-all hover:text-primary dark:text-grayC3 dark:hover:text-primary"
                        value={item + ""}
                      >
                        {item}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger
                  className="flex h-12 gap-3 border-none px-5 py-3 text-sm text-gray8B dark:text-grayC3 xl:w-[105px]"
                  icon={<ChevronDownIcon className="dark:text-grayC3" />}
                >
                  <SelectValue placeholder="Month" />
                </SelectTrigger>
                <SelectContent className="border-grayF3 bg-white dark:border-black44 dark:bg-black29">
                  <SelectGroup>
                    {listMonth.map((item) => (
                      <SelectItem
                        key={item}
                        className="h-10 cursor-pointer transition-all hover:text-primary dark:text-grayC3 dark:hover:text-primary"
                        value={item + ""}
                      >
                        {item}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger
                  className="flex h-12 gap-3 border-none px-5 py-3 text-sm text-gray8B dark:text-grayC3 xl:w-[120px]"
                  icon={<ChevronDownIcon className="dark:text-grayC3" />}
                >
                  <SelectValue placeholder="Year" />
                </SelectTrigger>
                <SelectContent className="border-grayF3 bg-white dark:border-black44 dark:bg-black29">
                  <SelectGroup>
                    {listYear.map((item) => (
                      <SelectItem
                        key={item}
                        className="h-10 cursor-pointer transition-all hover:text-primary dark:text-grayC3 dark:hover:text-primary"
                        value={item < 10 ? "200" + item : "20" + item}
                      >
                        {item < 10 ? "200" + item : "20" + item}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

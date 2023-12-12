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
} from '@/components/ui';
import { ChevronDownIcon } from '@/components/icons';

interface PassengerDetailProps {
  title: string;
  hasBirthday?: boolean;
}

export function PassengerDetail({ title, hasBirthday }: PassengerDetailProps) {
  const listDate = Array.from({ length: 30 }, (_, i) => i + 1);
  const listMonth = Array.from({ length: 12 }, (_, i) => i + 1);
  const listYear = Array.from({ length: 24 }, (_, i) => i + 1);

  return (
    <div className="rounded-[20px] border border-grayF3 bg-white p-10">
      <h2 className="text-black29 text-2xl font-medium leading-9 mb-[30px]">
        {title}
      </h2>
      <div className="flex gap-[30px] mb-6">
        <InputWithLabel defaultValue="Zuichi" name="firstName">
          First name
        </InputWithLabel>
        <InputWithLabel defaultValue="Switzerland" name="lastName">
          Last name
        </InputWithLabel>
      </div>
      <div className="flex gap-8 items-center">
        <div>
          <Label
            htmlFor="gender"
            className="text-gray8B font-bold mb-[14px] block"
          >
            Gender
          </Label>
          <Select>
            <SelectTrigger
              className="w-[198px] h-12 border-grayF3 px-5 text-gray8B text-sm"
              icon={<ChevronDownIcon />}
            >
              <SelectValue placeholder="Gender" />
            </SelectTrigger>
            <SelectContent className="bg-white border-grayF3">
              <SelectGroup>
                <SelectItem
                  className="h-10 hover:text-primary transition-all cursor-pointer"
                  value="male"
                >
                  Male
                </SelectItem>
                <SelectItem
                  className="h-10 hover:text-primary transition-all cursor-pointer"
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
              className="text-gray8B font-bold mb-[14px] block"
            >
              Birth Day
            </Label>
            <div className="flex rounded-[10px] border border-grayF3">
              <Select>
                <SelectTrigger
                  className="h-12 w-[92px] border-none px-5 py-3 text-gray8B text-sm flex gap-3"
                  icon={<ChevronDownIcon />}
                >
                  <SelectValue placeholder="Date" />
                </SelectTrigger>
                <SelectContent className="bg-white border-grayF3">
                  <SelectGroup>
                    {listDate.map((item) => (
                      <SelectItem
                        key={item}
                        className="h-10 hover:text-primary transition-all cursor-pointer"
                        value={item + ''}
                      >
                        {item}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger
                  className="h-12 w-[105px] border-none px-5 py-3 text-gray8B text-sm flex gap-3"
                  icon={<ChevronDownIcon />}
                >
                  <SelectValue placeholder="Month" />
                </SelectTrigger>
                <SelectContent className="bg-white border-grayF3">
                  <SelectGroup>
                    {listMonth.map((item) => (
                      <SelectItem
                        key={item}
                        className="h-10 hover:text-primary transition-all cursor-pointer"
                        value={item + ''}
                      >
                        {item}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger
                  className="h-12 w-[120px] border-none px-5 py-3 text-gray8B text-sm flex gap-3"
                  icon={<ChevronDownIcon />}
                >
                  <SelectValue placeholder="Year" />
                </SelectTrigger>
                <SelectContent className="bg-white border-grayF3">
                  <SelectGroup>
                    {listYear.map((item) => (
                      <SelectItem
                        key={item}
                        className="h-10 hover:text-primary transition-all cursor-pointer"
                        value={item < 10 ? '200' + item : '20' + item}
                      >
                        {item < 10 ? '200' + item : '20' + item}
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

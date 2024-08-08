"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { Button } from "../ui";
import { custom } from "zod";

interface CheckboxFiltersProps {
  title: string;
  listData: string[];
  limit?: number;
  listLabel?: string[];
  last?: boolean;
}

export function CheckboxFilter({
  title,
  listData,
  limit,
  listLabel,
  last,
}: CheckboxFiltersProps) {
  const [checkValue, setCheckValue] = useState<string[]>([]);
  const [customLimit, setCustomLimit] = useState(limit);

  const handleCheckedValue = (value: string) => {
    checkValue.includes(value)
      ? setCheckValue(checkValue.filter((item) => item !== value))
      : setCheckValue([...checkValue, value]);
  };

  return (
    <div>
      <h3 className="mb-3 text-lg font-medium text-black dark:text-white">
        {title}
      </h3>
      <div className="flex flex-col gap-[14px]">
        {limit
          ? !listLabel &&
            listData.slice(0, customLimit).map((data, index) => {
              return (
                <Checkbox
                  className="dark:border-gray8B"
                  key={index}
                  label={data}
                  valueChecked={checkValue.includes(data)}
                  onValueCheckedChange={() => handleCheckedValue(data)}
                />
              );
            })
          : !listLabel &&
            listData.map((data, index) => (
              <Checkbox
                className="dark:border-gray8B"
                key={index}
                label={data}
                valueChecked={checkValue.includes(data)}
                onValueCheckedChange={() => handleCheckedValue(data)}
              />
            ))}
        {limit
          ? listLabel &&
            listData.slice(0, customLimit).map((data, index) => {
              return (
                <div key={index} className="flex justify-between">
                  <Checkbox
                    className="dark:border-gray8B"
                    label={data}
                    valueChecked={checkValue.includes(data)}
                    onValueCheckedChange={() => handleCheckedValue(data)}
                  />
                  <span className="leading-6 text-gray8B dark:text-gray90">
                    {listLabel[index]}
                  </span>
                </div>
              );
            })
          : listLabel &&
            listData.map((data, index) => (
              <div key={index} className="flex justify-between">
                <Checkbox
                  className="dark:border-gray8B"
                  label={data}
                  valueChecked={checkValue.includes(data)}
                  onValueCheckedChange={() => handleCheckedValue(data)}
                />
                <span className="leading-6 text-gray8B dark:text-gray90">
                  {listLabel[index]}
                </span>
              </div>
            ))}
      </div>
      {customLimit && limit && customLimit < listData.length && (
        <Button
          variant={"link"}
          className="mt-4 inline-block h-auto w-auto border-none p-0 font-medium leading-6 text-primary hover:no-underline"
          onClick={() => setCustomLimit(customLimit + limit)}
        >
          See More
        </Button>
      )}
      {!last && <div className="mt-4 h-[1px] bg-grayF2 dark:bg-black44"></div>}
    </div>
  );
}

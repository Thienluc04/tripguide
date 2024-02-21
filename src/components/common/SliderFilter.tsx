"use client";

import { Input, Slider } from "@/components/ui";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

interface SliderFilterProps {
  min?: number;
  max?: number;
  step?: number;
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
  title: string;
}

export function SliderFilter({
  min = 50,
  max = 150,
  step = 1,
  value,
  setValue,
  title,
}: SliderFilterProps) {
  return (
    <div>
      <h3 className="mb-10 text-lg font-medium text-black dark:text-white">
        {title}
      </h3>
      <div className="mb-1 flex items-center gap-4">
        <Slider
          value={[value]}
          max={max}
          min={min}
          step={step}
          dotContent={value}
          onValueChange={(value) => {
            setValue(value[0]);
          }}
          className="w-full cursor-pointer"
        ></Slider>
        <Input
          value={value}
          max={max}
          min={min}
          onChange={(e) => {
            if (
              Number(e.target.value) >= min &&
              Number(e.target.value) <= max
            ) {
              setValue(Number(e.target.value));
            }
          }}
          type="number"
          className="dark:text-grayF9 h-8 w-[60px] border-2 border-grayC3"
        />
      </div>
      <div className="mb-4 flex justify-between font-medium leading-6 dark:text-grayF6">
        <span>${min}</span>
        <span className="mr-6">${max}</span>
      </div>
      <div className="h-[1px] bg-grayF6 dark:bg-black44"></div>
    </div>
  );
}

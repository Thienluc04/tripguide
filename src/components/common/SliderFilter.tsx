'use client';

import { Input, Slider } from '@/components/ui';
import { ChangeEvent, Dispatch, SetStateAction } from 'react';

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
      <h3 className="text-lg font-medium text-black mb-10">{title}</h3>
      <div className="flex gap-4 items-center mb-1">
        <Slider
          value={[value]}
          max={max}
          min={min}
          step={step}
          dotContent={value}
          onValueChange={(value) => {
            setValue(value[0]);
          }}
          className="w-full"
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
          className="w-[60px] h-8 border-2 border-grayC3"
        ></Input>
      </div>
      <div className="flex justify-between font-medium leading-6 mb-4">
        <span>${min}</span>
        <span className="mr-6">${max}</span>
      </div>
      <div className="h-[1px] bg-grayF6"></div>
    </div>
  );
}

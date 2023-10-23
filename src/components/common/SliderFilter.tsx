'use client';

import { Input, Slider } from '@/components/ui';
import { ChangeEvent } from 'react';

interface SliderFilterProps {
  min?: number;
  max?: number;
  step?: number;
  value: number;
  onChangeSlider: (value: number[]) => void;
  onChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
  title: string;
}

export function SliderFilter({
  min = 50,
  max = 150,
  step = 1,
  value,
  onChangeSlider,
  onChangeInput,
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
          onValueChange={onChangeSlider}
          className="w-full"
        ></Slider>
        <Input
          value={value}
          max={max}
          min={min}
          onChange={onChangeInput}
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

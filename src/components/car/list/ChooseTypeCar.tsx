'use client';

import chooseType1 from '@images/cars/choose-type-1.png';
import chooseType2 from '@images/cars/choose-type-2.png';
import chooseType3 from '@images/cars/choose-type-3.png';
import chooseType4 from '@images/cars/choose-type-4.png';
import chooseType5 from '@images/cars/choose-type-5.png';
import { ChooseTypeItem } from '.';
import { ComponentProps, useState } from 'react';
import { cn } from '@/lib/utils';

interface ChooseTypeCarProps extends ComponentProps<'div'> {}

const listChoose: ChooseType[] = [
  {
    image: chooseType1,
    name: 'Small',
  },
  {
    image: chooseType2,
    name: 'Large',
  },
  {
    image: chooseType3,
    name: 'Premium',
  },
  {
    image: chooseType4,
    name: 'SUVs',
  },
  {
    image: chooseType5,
    name: 'People carries',
  },
];

export function ChooseTypeCar({ className, ...props }: ChooseTypeCarProps) {
  const [activeType, setActiveType] = useState<string>('');
  return (
    <div className={cn('flex gap-[30px]', className)} {...props}>
      {listChoose.map((item, index) => (
        <ChooseTypeItem
          key={index}
          active={item.name === activeType}
          image={item.image}
          name={item.name}
          onClick={() => setActiveType(item.name)}
        />
      ))}
    </div>
  );
}

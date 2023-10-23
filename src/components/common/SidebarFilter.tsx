'use client';

import { SearchIcon } from '@/components/icons';
import { Input } from '@/components/ui';
import { useState } from 'react';
import { CheckboxFilter, SliderFilter } from '.';

interface SidebarFilterProps {}

const listPopular: string[] = [
  'Hotels',
  'Breakfast and Dinner',
  'Free Cancellation',
  'No prepayment',
  '',
];

const listProperty: string[] = ['Hotels', 'Apartments', 'Resorts', ''];

const listBudget: string[] = [
  'Less than $75',
  '$75 to 125',
  '$125 to 200',
  '$200 to $300',
  'Greater than $300',
];

const listFacilities: string[] = [
  'Outdoor Sports',
  'BBQ',
  'Living Room',
  'Room Service',
  'Swimming Pool',
  'Spa',
  '',
];

export function SidebarFilter(props: SidebarFilterProps) {
  const [price, setPrice] = useState<number>(50);

  return (
    <div className="flex flex-col gap-[30px] w-[290px]">
      <div>
        <h3 className="text-lg font-medium text-black33 mb-3">
          Search location or property
        </h3>
        <Input
          className="px-5 py-4 rounded-[10px] border border-grayF3 bg-white h-auto"
          placeholder="Search location or property"
          icon={<SearchIcon className="text-grayC4" />}
        />
      </div>
      <CheckboxFilter
        title="Popular Filters"
        listData={listPopular}
        limit={4}
      />
      <SliderFilter
        title="Price Range"
        onChangeSlider={(value) => {
          setPrice(value[0]);
        }}
        onChangeInput={(e) => {
          if (Number(e.target.value) >= 50 && Number(e.target.value) <= 150) {
            setPrice(Number(e.target.value));
          }
        }}
        value={price}
      />
      <CheckboxFilter
        title="Property Type"
        listData={listProperty}
        listLabel={['108', '141', '108']}
        limit={3}
      />
      <CheckboxFilter title="Your budget" listData={listBudget} />
      <CheckboxFilter
        title="Facilities"
        listData={listFacilities}
        listLabel={['108', '141', '108', '108', '141', '108']}
        limit={6}
        last
      />
    </div>
  );
}

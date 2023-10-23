import Link from 'next/link';
import { Checkbox } from '@/components/checkbox';

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
  return (
    <div>
      <h3 className="text-lg font-medium text-black mb-3">{title}</h3>
      <div className="flex flex-col gap-[14px]">
        {limit
          ? !listLabel &&
            listData.map((data, index) => {
              if (index < limit) {
                return <Checkbox key={index} label={data} />;
              }
            })
          : !listLabel &&
            listData.map((data, index) => (
              <Checkbox key={index} label={data} />
            ))}
        {limit
          ? listLabel &&
            listData.map((data, index) => {
              if (index < limit) {
                return (
                  <div key={index} className="flex justify-between">
                    <Checkbox label={data} />
                    <span className="text-gray8B leading-6">
                      {listLabel[index]}
                    </span>
                  </div>
                );
              }
            })
          : listLabel &&
            listData.map((data, index) => (
              <div key={index} className="flex justify-between">
                <Checkbox label={data} />
                <span className="text-gray8B leading-6">
                  {listLabel[index]}
                </span>
              </div>
            ))}
      </div>
      {limit && limit < listData.length && (
        <Link
          href={'/'}
          className="text-primary font-medium leading-6 inline-block mt-4"
        >
          See More
        </Link>
      )}
      {!last && <div className="h-[1px] bg-grayC3 mt-4"></div>}
    </div>
  );
}

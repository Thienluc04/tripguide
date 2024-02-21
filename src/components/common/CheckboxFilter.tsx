import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";

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
      <h3 className="mb-3 text-lg font-medium text-black dark:text-white">
        {title}
      </h3>
      <div className="flex flex-col gap-[14px]">
        {limit
          ? !listLabel &&
            listData.map((data, index) => {
              if (index < limit) {
                return (
                  <Checkbox
                    className="dark:border-gray8B"
                    key={index}
                    label={data}
                  />
                );
              }
            })
          : !listLabel &&
            listData.map((data, index) => (
              <Checkbox
                className="dark:border-gray8B"
                key={index}
                label={data}
              />
            ))}
        {limit
          ? listLabel &&
            listData.map((data, index) => {
              if (index < limit) {
                return (
                  <div key={index} className="flex justify-between">
                    <Checkbox className="dark:border-gray8B" label={data} />
                    <span className="leading-6 text-gray8B dark:text-gray90">
                      {listLabel[index]}
                    </span>
                  </div>
                );
              }
            })
          : listLabel &&
            listData.map((data, index) => (
              <div key={index} className="flex justify-between">
                <Checkbox className="dark:border-gray8B" label={data} />
                <span className="leading-6 text-gray8B dark:text-gray90">
                  {listLabel[index]}
                </span>
              </div>
            ))}
      </div>
      {limit && limit < listData.length && (
        <Link
          href={"/"}
          className="mt-4 inline-block font-medium leading-6 text-primary"
        >
          See More
        </Link>
      )}
      {!last && <div className="mt-4 h-[1px] bg-grayF2 dark:bg-black44"></div>}
    </div>
  );
}

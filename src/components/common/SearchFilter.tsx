import { SearchIcon } from "../icons";
import { Input } from "../ui";

interface SearchFilterProps {}

export function SearchFilter(props: SearchFilterProps) {
  return (
    <div>
      <h3 className="mb-3 text-lg font-medium text-black33 dark:text-white">
        Search location or property
      </h3>
      <Input
        className="h-auto rounded-[10px] border border-grayF3 bg-white px-5 py-4 pr-10 dark:border-black29 dark:bg-black29 dark:text-grayFD dark:placeholder:text-gray8B"
        placeholder="Search location or property"
        iconRight={<SearchIcon className="text-grayC4 dark:text-gray8B" />}
      />
    </div>
  );
}

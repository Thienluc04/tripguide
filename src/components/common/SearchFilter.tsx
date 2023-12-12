import { SearchIcon } from '../icons';
import { Input } from '../ui';

interface SearchFilterProps {}

export function SearchFilter(props: SearchFilterProps) {
  return (
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
  );
}

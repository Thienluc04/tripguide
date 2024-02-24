import { GasolineIcon, MileageIcon, PeopleIcon } from "@/components/icons";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";

interface CarItemProps {
  image: string | StaticImport;
  name: string;
}

export function CarItem({ image, name }: CarItemProps) {
  return (
    <div className="rounded-xl border border-grayF6 dark:border-black44">
      <div className="flex items-center justify-center rounded-t-xl bg-grayF6 p-[30px] pb-5 dark:bg-black44">
        <Image src={image} alt="car-item" width={262} height={142} />
      </div>
      <div className="px-5 py-6 dark:bg-black29">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-xl font-bold text-black29 dark:text-grayF3">
            {name}
          </h3>
          <p className="rounded-[28px] bg-green1A px-3 py-1 text-xs font-medium text-green53">
            SPECIAL DEAL
          </p>
        </div>
        <p className="mb-4 font-medium leading-6 text-gray8B">Tesla Model S</p>
        <p className="font-medium leading-6 text-black29 dark:text-grayF3">
          Features
        </p>
        <div className="mb-3 flex gap-11">
          <div className="flex items-center gap-2">
            <PeopleIcon className="dark:text-grayC3" />
            <span className="text-sm font-medium text-gray8B dark:text-grayC3">
              5
            </span>
          </div>
          <div className="flex items-center gap-2">
            <GasolineIcon className="dark:text-grayC3" />
            <span className="text-sm font-medium text-gray8B dark:text-grayC3">
              Electric
            </span>
          </div>
        </div>
        <div className="mb-6 flex items-center gap-2">
          <MileageIcon className="dark:text-grayC3" />
          <span className="text-sm font-medium text-gray8B dark:text-grayC3">
            Unilimited mileage
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-medium leading-9 text-black29 dark:text-grayC3">
              $124.00
            </p>
            <p className="leading-6 text-gray8B">per day</p>
          </div>
          <Link
            href={"/car-rentals/1"}
            className="rounded-lg bg-blueFE px-6 py-3 font-bold text-white"
          >
            Reserve deal
          </Link>
        </div>
      </div>
    </div>
  );
}

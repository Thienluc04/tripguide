import Image from "next/image";

import explore1 from "@images/cars/explore-top-1.png";
import explore2 from "@images/cars/explore-top-2.png";
import explore3 from "@images/cars/explore-top-3.png";

interface ExploreTopSectionProps {}

export function ExploreTopSection(props: ExploreTopSectionProps) {
  return (
    <div className="container px-5 xl:px-0">
      <h2 className="mb-3 text-center text-[34px] font-bold leading-[48px] text-black2F dark:text-grayF6 xl:text-left xl:text-5xl xl:leading-[56px]">
        Explore Top Destination
      </h2>
      <p className="mb-[30px] text-center text-sm leading-5 text-gray90 dark:text-grayC3 xl:mb-[60px] xl:text-left xl:text-2xl xl:leading-8">
        for car rentals
      </p>
      <div className="flex flex-col items-center justify-center gap-10 xl:flex-row xl:items-start">
        <div className="relative">
          <Image src={explore1} alt="explore-top" width={364} height={495} />
          <div className="absolute bottom-10 left-[30px] right-[30px]">
            <h3 className="mb-[10px] text-[34px] font-bold text-white">
              Paris
            </h3>
            <p className="font-medium text-white">
              Car rentals in 86 pickup locations
            </p>
          </div>
        </div>
        <div className="relative">
          <Image src={explore2} alt="explore-top" width={364} height={495} />
          <div className="absolute bottom-10 left-[30px] right-[30px]">
            <h3 className="mb-[10px] text-[34px] font-bold text-white">
              London
            </h3>
            <p className="font-medium text-white">
              Car rentals in 86 pickup locations
            </p>
          </div>
        </div>
        <div className="relative">
          <Image src={explore3} alt="explore-top" width={364} height={495} />
          <div className="absolute bottom-10 left-[30px] right-[30px]">
            <h3 className="mb-[10px] text-[34px] font-bold text-white">
              London
            </h3>
            <p className="font-medium text-white">
              Car rentals in 86 pickup locations
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

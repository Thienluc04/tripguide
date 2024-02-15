import Image from "next/image";

import explore1 from "@images/cars/explore-top-1.png";
import explore2 from "@images/cars/explore-top-2.png";
import explore3 from "@images/cars/explore-top-3.png";

interface ExploreTopSectionProps {}

export function ExploreTopSection(props: ExploreTopSectionProps) {
  return (
    <div className="container">
      <h2 className="mb-3 text-5xl font-bold leading-[56px] text-black2F dark:text-grayF6">
        Explore Top Destination
      </h2>
      <p className="mb-[60px] text-2xl leading-8 text-gray90 dark:text-grayC3">
        for car rentals
      </p>
      <div className="flex justify-center gap-10">
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

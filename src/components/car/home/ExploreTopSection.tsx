import Image from 'next/image';

interface ExploreTopSectionProps {}

export function ExploreTopSection(props: ExploreTopSectionProps) {
  return (
    <div className="container">
      <h2 className="text-black2F text-5xl font-bold leading-[56px] mb-3">
        Explore Top Destination
      </h2>
      <p className="text-gray90 text-2xl leading-8 mb-[60px]">
        for car rentals
      </p>
      <div className="flex gap-10 justify-center">
        <div className="relative">
          <Image
            src={'/images/cars/explore-top-1.png'}
            alt="explore-top"
            width={364}
            height={495}
          />
          <div className="absolute bottom-10 left-[30px] right-[30px]">
            <h3 className="text-white text-[34px] font-bold mb-[10px]">
              Paris
            </h3>
            <p className="text-white font-medium">
              Car rentals in 86 pickup locations
            </p>
          </div>
        </div>
        <div className="relative">
          <Image
            src={'/images/cars/explore-top-2.png'}
            alt="explore-top"
            width={364}
            height={495}
          />
          <div className="absolute bottom-10 left-[30px] right-[30px]">
            <h3 className="text-white text-[34px] font-bold mb-[10px]">
              London
            </h3>
            <p className="text-white font-medium">
              Car rentals in 86 pickup locations
            </p>
          </div>
        </div>
        <div className="relative">
          <Image
            src={'/images/cars/explore-top-3.png'}
            alt="explore-top"
            width={364}
            height={495}
          />
          <div className="absolute bottom-10 left-[30px] right-[30px]">
            <h3 className="text-white text-[34px] font-bold mb-[10px]">
              London
            </h3>
            <p className="text-white font-medium">
              Car rentals in 86 pickup locations
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

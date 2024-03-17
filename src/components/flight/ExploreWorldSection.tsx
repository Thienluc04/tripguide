import { ExploreWorldItem } from ".";

interface ExploreWorldSectionProps {}

export function ExploreWorldSection({}: ExploreWorldSectionProps) {
  return (
    <section className="container px-5 xl:px-0">
      <div className="mb-[30px] xl:mb-[26px]">
        <h2 className="mb-4 text-center text-[30px] font-bold leading-10 text-black2F dark:text-grayF6 xl:mb-3 xl:text-left xl:text-[40px] xl:leading-[60px]">
          Explore World
        </h2>
        <p className="text-center text-lg font-medium text-gray8B dark:text-gray90 xl:text-left">
          10,788 beautiful places to go
        </p>
      </div>
      <div className="flex flex-col items-center gap-[30px] xl:flex-row">
        <ExploreWorldItem image="/images/flights/explore-1.png" />
        <ExploreWorldItem image="/images/flights/explore-2.png" />
        <ExploreWorldItem image="/images/flights/explore-3.png" />
        <ExploreWorldItem image="/images/flights/explore-4.png" />
      </div>
    </section>
  );
}

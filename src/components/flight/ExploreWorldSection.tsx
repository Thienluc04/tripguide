interface ExploreWorldSectionProps {}

export function ExploreWorldSection({}: ExploreWorldSectionProps) {
  return (
    <section className="container">
      <div className="mb-[26px]">
        <h2 className="mb-3 text-[40px] font-bold leading-[60px] text-black2F dark:text-grayF6">
          Explore World
        </h2>
        <p className="text-lg font-medium text-gray8B dark:text-gray90">
          10,788 beautiful places to go
        </p>
      </div>
      {/* <div className="flex gap-[30px]">
        <ExploreWorldItem image="/images/flights/explore-1.png" />
        <ExploreWorldItem image="/images/flights/explore-2.png" />
        <ExploreWorldItem image="/images/flights/explore-3.png" />
        <ExploreWorldItem image="/images/flights/explore-4.png" />
      </div> */}
    </section>
  );
}

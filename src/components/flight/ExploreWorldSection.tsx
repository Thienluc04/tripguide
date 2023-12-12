import { ComponentProps } from 'react';
import { ExploreWorldItem } from '.';

interface ExploreWorldSectionProps extends ComponentProps<'section'> {}

export function ExploreWorldSection(props: ExploreWorldSectionProps) {
  return (
    <section className="container">
      <div className="mb-[26px]">
        <h2 className="text-black2F text-[40px] font-bold leading-[60px] mb-3">
          Explore World
        </h2>
        <p className="text-gray8B text-lg font-medium">
          10,788 beautiful places to go
        </p>
      </div>
      <div className="flex gap-[30px]">
        <ExploreWorldItem image="/images/flights/explore-1.png" />
        <ExploreWorldItem image="/images/flights/explore-2.png" />
        <ExploreWorldItem image="/images/flights/explore-3.png" />
        <ExploreWorldItem image="/images/flights/explore-4.png" />
      </div>
    </section>
  );
}

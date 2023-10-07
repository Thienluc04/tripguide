import { listBestPlace } from '@/constants/hotel.constant';
import { BestPlaceItem } from '@/components/hotel';

interface BestPlaceSectionProps {}

export function BestPlaceSection(props: BestPlaceSectionProps) {
  return (
    <section className="container pt-6">
      <h2 className="text-5xl font-bold text-black2F text-center mb-3">
        Search a best place in the world
      </h2>
      <p className="text-gray8B max-w-[594px] mx-auto text-center leading-6 mb-[65px]">
        Whether you’re looking for places for a vacation. We are here to Guide
        you about the details you need to check in and ease your trips in
        advance
      </p>
      <div className="flex flex-wrap gap-[30px]">
        {listBestPlace.map((item, index) => (
          <BestPlaceItem
            key={index}
            title={item.title}
            description={item.description}
            image={item.image}
          ></BestPlaceItem>
        ))}
      </div>
    </section>
  );
}

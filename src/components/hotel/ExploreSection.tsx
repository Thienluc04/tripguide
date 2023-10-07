import { ExploreItem } from '@/components/hotel';
import { ChevronLeftIcon, ChevronRightIcon } from '@/components/icons';
import { listExplore } from '@/constants/hotel.constant';

interface ExploreSectionProps {}

export function ExploreSection(props: ExploreSectionProps) {
  return (
    <section className="container">
      <div className="flex justify-between items-center mb-12">
        <div>
          <h2 className="text-black text-5xl font-bold mb-3">Top Tour</h2>
          <p className="text-gray90">Keep calm & travel on</p>
        </div>
        <div className="flex gap-[10px]">
          <div className="w-9 h-9 rounded-full bg-grayF6 flex items-center justify-center text-grayC3">
            <ChevronLeftIcon />
          </div>
          <div className="w-9 h-9 rounded-full bg-grayEC flex items-center justify-center text-gray8B">
            <ChevronRightIcon />
          </div>
        </div>
      </div>
      <div className="flex gap-[30px]">
        {listExplore.map((item, index) => (
          <ExploreItem
            key={index}
            address={item.address}
            description={item.description}
            image={item.image}
            price={item.price}
            rating={item.rating}
            roomsAvailable={item.roomsAvailable}
            title={item.title}
            totalRating={item.totalRating}
          ></ExploreItem>
        ))}
      </div>
    </section>
  );
}

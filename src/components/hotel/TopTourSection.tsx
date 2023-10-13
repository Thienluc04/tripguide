import { ChevronLeftIcon, ChevronRightIcon } from '@/components/icons';
import { listTour } from '@/constants/hotel.constant';
import { TopTourItem } from './TopTourItem';

interface TopTourSectionProps {}

export function TopTourSection(props: TopTourSectionProps) {
  return (
    <section className="container">
      <div className="flex justify-between items-center mb-[60px]">
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
      <div className="flex gap-[30px] mb-[70px]">
        {listTour.map((item, index) => (
          <TopTourItem
            key={index}
            image={item.image}
            name={item.name}
            title={item.title}
            description={item.description}
          ></TopTourItem>
        ))}
      </div>
    </section>
  );
}

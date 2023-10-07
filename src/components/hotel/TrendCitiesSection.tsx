import { listCity } from '@/constants/hotel.constant';
import { CityItem } from '.';

interface TrendCitiesSectionProps {}

export function TrendCitiesSection(props: TrendCitiesSectionProps) {
  return (
    <div className="bg-[#F5F5F5] py-[60px]">
      <h2 className="text-black29 text-5xl font-bold text-center mb-4">
        Trending cites
      </h2>
      <p className="text-center text-2xl mb-[50px]">
        The most searched for cities on TripGuide
      </p>
      <div className="flex max-w-[1098px] mx-auto gap-x-[30px] gap-y-[35px] flex-wrap items-center justify-center">
        {listCity.map((item, index) => (
          <CityItem
            key={index}
            image={item.image}
            price={item.price}
            rating={item.rating}
            title={item.title}
            totalRating={item.totalRating}
          ></CityItem>
        ))}
      </div>
    </div>
  );
}

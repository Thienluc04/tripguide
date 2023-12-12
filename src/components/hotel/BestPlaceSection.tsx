import { listBestPlace } from '@/constants/hotel.constant';
import { BestPlaceItem } from '@/components/hotel';
import { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

interface BestPlaceSectionProps extends ComponentProps<'section'> {}

export function BestPlaceSection({
  className,
  ...props
}: BestPlaceSectionProps) {
  return (
    <section className={cn('container pt-6', className)} {...props}>
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

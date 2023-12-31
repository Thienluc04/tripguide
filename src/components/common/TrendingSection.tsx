import { ComponentProps } from 'react';
import { cn } from '@/lib/utils';
import { TrendingItem } from '.';
import { TrendItem } from '@/types/general';

interface TrendingSectionProps extends ComponentProps<'div'> {
  title?: string;
  data: TrendItem[];
}

export function TrendingSection({
  className,
  title = 'Trending Hotels',
  data,
}: TrendingSectionProps) {
  return (
    <div className={cn('container', className)}>
      <h2 className="text-black29 text-5xl font-bold leading-[70px] mb-10">
        {title}
      </h2>
      <div className="flex gap-[30px]">
        {data.map((item, index) => (
          <TrendingItem
            key={index}
            image={item.image}
            name={item.name}
            rating={item.rating}
            totalReviews={item.totalReviews}
          />
        ))}
      </div>
    </div>
  );
}

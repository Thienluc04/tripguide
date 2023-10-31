import { ComponentProps } from 'react';
import { TrendingItem } from '.';
import { cn } from '@/lib/utils';

interface TrendingSectionProps extends ComponentProps<'div'> {}

export function TrendingSection({ className, ...props }: TrendingSectionProps) {
  return (
    <div className={cn('container', className)} {...props}>
      <h2 className="text-black29 text-5xl font-bold leading-[70px] mb-10">
        Trending Hotels
      </h2>
      <div className="flex gap-[30px]">
        <TrendingItem
          image="/images/hotels/trending-1.png"
          name="Hotel Sea Crown"
          rating={4.8}
          totalReviews={122}
        />
        <TrendingItem
          image="/images/hotels/trending-2.png"
          name="Long Beach Hotel"
          rating={4.8}
          totalReviews={122}
        />
        <TrendingItem
          image="/images/hotels/trending-3.png"
          name="Hotel The Cox Today"
          rating={4.8}
          totalReviews={122}
        />
        <TrendingItem
          image="/images/hotels/trending-4.png"
          name="Vivanta Goa, Panaji"
          rating={4.8}
          totalReviews={122}
        />
      </div>
    </div>
  );
}

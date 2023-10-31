import { cn } from '@/lib/utils';
import { ComponentProps } from 'react';
import { FindItem } from '.';

interface FindSectionProps extends ComponentProps<'div'> {}

export function FindSection({ className, ...props }: FindSectionProps) {
  return (
    <div className={cn('container', className)} {...props}>
      <div className="flex justify-between items-center mb-[66px]">
        <h2 className="text-black text-[36px] font-bold leading-[44px]">
          Find 250+ Hotels
        </h2>
        <div className="flex gap-8 items-center">
          <div className="text-white text-sm font-bold py-[6px] px-6 rounded-3xl bg-blueE6">
            Popular
          </div>
          <div className="text-sm">Guest Ratings</div>
          <div className="text-sm">Price</div>
          <div className="text-sm">Map View</div>
        </div>
      </div>
      <div className="flex gap-[30px]">
        <FindItem image="/images/hotels/find-1.png" />
        <FindItem image="/images/hotels/find-2.png" />
        <FindItem image="/images/hotels/find-3.png" />
      </div>
    </div>
  );
}

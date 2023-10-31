import { ComponentProps } from 'react';
import { PencilWriteIcon } from '@/components/icons';
import { cn } from '@/lib/utils';

interface TourUpdateItemProps extends ComponentProps<'div'> {
  type?: 'date' | 'traveler';
}

export function TourUpdateItem({
  type = 'date',
  className,
  ...props
}: TourUpdateItemProps) {
  return (
    <div
      className={cn(
        'flex justify-between items-center rounded-2xl bg-grayF6 px-5 py-2',
        className
      )}
      {...props}
    >
      <div>
        <h3 className="text-black font-medium leading-6">
          {type === 'date' ? 'Date' : 'Traveler'}
        </h3>
        <p className="text-gray8B font-medium leading-6">
          {type === 'date' ? 'June 27 - 30, 2020' : '1 Passenger'}
        </p>
      </div>
      <PencilWriteIcon className="text-gray8B" />
    </div>
  );
}

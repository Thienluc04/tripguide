import { listPassion } from '@/constants/hotel.constant';
import { PassionItem } from './PassionItem';
import { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

interface PassionSectionProps extends ComponentProps<'section'> {}

export function PassionSection({ className, ...props }: PassionSectionProps) {
  return (
    <section className={cn('container', className)} {...props}>
      <h2 className="text-black text-5xl font-bold mb-3">
        Travel Your Passion
      </h2>
      <p className="text-gray8B mb-[42px]">
        Most Brilliant reasons Entrada should be your one-stop-shop!
      </p>
      <div className="flex gap-[30px]">
        {listPassion.map((item, index) => (
          <PassionItem
            key={index}
            image={item.image}
            rating={item.rating}
            title={item.title}
            totalRating={item.totalRating}
          ></PassionItem>
        ))}
      </div>
    </section>
  );
}

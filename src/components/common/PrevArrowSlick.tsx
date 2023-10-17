import { cn } from '@/lib/utils';
import { ComponentProps } from 'react';
import { ChevronLeftIcon } from '../icons';

interface ArrowSlickProps extends ComponentProps<'div'> {
  currentSlide?: unknown;
  slideCount?: unknown;
}

export function PrevArrowSlick({
  className,
  currentSlide,
  slideCount,
  ...props
}: ArrowSlickProps) {
  return (
    <div
      className={cn(
        'w-9 h-9 rounded-full bg-grayEC !flex items-center justify-center text-gray8B absolute right-[46px] top-[38px] -translate-y-2/4 cursor-pointer',
        currentSlide === 0 ? ' slick-disabled' : '',
        className
      )}
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
      {...props}
    >
      <ChevronLeftIcon />
    </div>
  );
}

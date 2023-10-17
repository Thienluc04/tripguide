import { cn } from '@/lib/utils';
import { ComponentProps } from 'react';
import { ChevronRightIcon } from '../icons';

interface ArrowSlickProps extends ComponentProps<'div'> {
  currentSlide?: unknown;
  slideCount?: unknown;
}

export function NextArrowSlick({
  className,
  currentSlide,
  slideCount,
  ...props
}: ArrowSlickProps) {
  return (
    <div
      className={cn(
        'w-9 h-9 rounded-full bg-grayEC !flex items-center justify-center text-gray8B absolute right-0 top-[38px] -translate-y-2/4 cursor-pointer',
        currentSlide === Number(slideCount) - 1 ? ' slick-disabled' : '',
        className
      )}
      aria-hidden="true"
      aria-disabled={currentSlide === Number(slideCount) - 1 ? true : false}
      {...props}
    >
      <ChevronRightIcon />
    </div>
  );
}

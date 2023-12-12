import { cn } from '@/lib/utils';
import { ComponentProps } from 'react';
import { ChevronRightIcon } from '@/components/icons';

interface BreadcrumbProps extends ComponentProps<'div'> {
  list: string[];
  last: string;
}

export function Breadcrumb({
  list,
  last,
  className,
  ...props
}: BreadcrumbProps) {
  return (
    <div
      className={cn('flex items-center gap-[10px] mt-10', className)}
      {...props}
    >
      {list.map((item, index) => (
        <p key={index} className="flex text-sm gap-2 items-center">
          {item}
          <ChevronRightIcon />
        </p>
      ))}
      <p className="text-gray8B text-sm">{last}</p>
    </div>
  );
}

import { cn } from '@/lib/utils';
import Image from 'next/image';
import { CircleTickIcon } from '../icons/CircleTickIcon';
import { ComponentProps } from 'react';

interface CreditCardProps extends ComponentProps<'div'> {
  active?: boolean;
  type: 'mastercard' | 'paypal' | 'visa' | 'americanExpress' | 'discover';
  heightImage: number;
  widthImage: number;
}

export function CreditCard({
  active = false,
  type,
  heightImage,
  widthImage,
  ...props
}: CreditCardProps) {
  return (
    <div
      className={cn(
        'w-[96px] h-12 rounded-md bg-white border border-grayE6 flex items-center justify-center cursor-pointer transition-all relative',
        active &&
          'shadow-[0px_3px_24px_0px_rgba(0,_0,_0,_0.10)] bg-[rgba(47,_128,_237,_0.05)] border-primary'
      )}
      {...props}
    >
      {active && <CircleTickIcon className="absolute -top-1 -right-1" />}
      <Image
        src={`/images/${type}.png`}
        alt="credit-card"
        loading="lazy"
        width={widthImage}
        height={heightImage}
      />
    </div>
  );
}

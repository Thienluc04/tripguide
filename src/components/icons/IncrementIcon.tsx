import { cn } from '@/lib/utils';
import { ComponentProps } from 'react';

interface IncrementIconProps extends ComponentProps<'span'> {}

export function IncrementIcon({ className, ...props }: IncrementIconProps) {
  return (
    <span className={cn('cursor-pointer', className)} {...props}>
      <svg
        width="32"
        height="33"
        viewBox="0 0 32 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M31.4996 16.4766C31.4996 25.0469 24.5666 31.9927 16.0164 31.9927C7.46624 31.9927 0.533203 25.0469 0.533203 16.4766C0.533203 7.90629 7.46624 0.960449 16.0164 0.960449C24.5666 0.960449 31.4996 7.90629 31.4996 16.4766Z"
          stroke="currentColor"
        />
        <path
          d="M20.398 15.8521H16.6416V12.0983C16.6416 11.9324 16.5756 11.7732 16.4582 11.6559C16.3408 11.5386 16.1815 11.4727 16.0155 11.4727C15.8495 11.4727 15.6902 11.5386 15.5728 11.6559C15.4554 11.7732 15.3894 11.9324 15.3894 12.0983V15.8521H11.633C11.467 15.8521 11.3077 15.918 11.1903 16.0353C11.0729 16.1527 11.007 16.3118 11.007 16.4777C11.007 16.6437 11.0729 16.8028 11.1903 16.9201C11.3077 17.0374 11.467 17.1034 11.633 17.1034H15.3894V20.8572C15.3894 21.0231 15.4554 21.1822 15.5728 21.2995C15.6902 21.4169 15.8495 21.4828 16.0155 21.4828C16.1815 21.4828 16.3408 21.4169 16.4582 21.2995C16.5756 21.1822 16.6416 21.0231 16.6416 20.8572V17.1034H20.398C20.564 17.1034 20.7233 17.0374 20.8407 16.9201C20.9581 16.8028 21.024 16.6437 21.024 16.4777C21.024 16.3118 20.9581 16.1527 20.8407 16.0353C20.7233 15.918 20.564 15.8521 20.398 15.8521Z"
          fill="currentColor"
        />
      </svg>
    </span>
  );
}

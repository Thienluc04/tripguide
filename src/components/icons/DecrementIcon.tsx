import { cn } from '@/lib/utils';
import { ComponentProps } from 'react';

interface DecrementIconProps extends ComponentProps<'span'> {}

export function DecrementIcon({ className, ...props }: DecrementIconProps) {
  return (
    <span className={cn(className)} {...props}>
      <svg
        width="33"
        height="33"
        viewBox="0 0 33 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M31.9849 16.4766C31.9849 25.0469 25.0519 31.9927 16.5018 31.9927C7.95159 31.9927 1.01855 25.0469 1.01855 16.4766C1.01855 7.90629 7.95159 0.960449 16.5018 0.960449C25.0519 0.960449 31.9849 7.90629 31.9849 16.4766Z"
          stroke="currentColor"
        />
        <path
          d="M21.7599 15.4746H11.2418C11.0425 15.4746 10.8514 15.5801 10.7105 15.7678C10.5696 15.9555 10.4905 16.2101 10.4905 16.4756C10.4905 16.7411 10.5696 16.9957 10.7105 17.1834C10.8514 17.3712 11.0425 17.4766 11.2418 17.4766H21.7599C21.9592 17.4766 22.1503 17.3712 22.2912 17.1834C22.4321 16.9957 22.5112 16.7411 22.5112 16.4756C22.5112 16.2101 22.4321 15.9555 22.2912 15.7678C22.1503 15.5801 21.9592 15.4746 21.7599 15.4746Z"
          fill="currentColor"
        />
      </svg>
    </span>
  );
}

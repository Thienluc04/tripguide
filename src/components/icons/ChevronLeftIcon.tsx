import { ComponentProps } from 'react';

interface ChevronLeftIconProps extends ComponentProps<'span'> {}

export function ChevronLeftIcon({ className, ...props }: ChevronLeftIconProps) {
  return (
    <span className={className} {...props}>
      <svg
        width="8"
        height="11"
        viewBox="0 0 8 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.10464 0.148927C6.70631 0.148927 7.10742 0.548923 7.10742 1.14892C7.10742 1.44891 7.00714 1.64891 6.80659 1.84891L3.29683 5.34888L6.80659 8.84884C7.2077 9.24884 7.2077 9.84883 6.80659 10.2488C6.40547 10.6488 5.8038 10.6488 5.40268 10.2488L1.19097 6.04887C0.789859 5.64887 0.789859 5.04888 1.19097 4.64888L5.40268 0.448925C5.60324 0.248927 5.90408 0.148927 6.10464 0.148927Z"
          fill="currentColor"
        />
      </svg>
    </span>
  );
}

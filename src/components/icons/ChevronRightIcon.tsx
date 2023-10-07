import { ComponentProps } from 'react';

interface ChevronRightIconProps extends ComponentProps<'span'> {}

export function ChevronRightIcon({
  className,
  ...props
}: ChevronRightIconProps) {
  return (
    <span className={className} {...props}>
      <svg
        width="7"
        height="11"
        viewBox="0 0 7 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.57505 10.8511C0.973381 10.8511 0.572266 10.4511 0.572266 9.85108C0.572266 9.55109 0.672545 9.35109 0.873102 9.15109L4.38286 5.65112L0.873102 2.15116C0.471987 1.75116 0.471987 1.15117 0.873102 0.751169C1.27422 0.351173 1.87589 0.351173 2.27701 0.751169L6.48871 4.95113C6.88983 5.35113 6.88983 5.95112 6.48871 6.35112L2.27701 10.5511C2.07645 10.7511 1.77561 10.8511 1.57505 10.8511Z"
          fill="currentColor"
        />
      </svg>
    </span>
  );
}

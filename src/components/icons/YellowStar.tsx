import { ComponentProps } from 'react';

interface YellowStarIconProps extends ComponentProps<'span'> {}

export function YellowStarIcon({ ...props }: YellowStarIconProps) {
  return (
    <span {...props}>
      <svg
        width={14}
        height={15}
        viewBox="0 0 14 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7 12.4532L3.43074 14.4147C2.91697 14.6971 2.31846 14.2374 2.4171 13.6362L3.09765 9.48853L0.213886 6.5502C-0.203981 6.12442 0.0251203 5.37905 0.600728 5.29162L4.59003 4.68568L6.37322 0.908861C6.6306 0.363713 7.3694 0.363713 7.62678 0.908861L9.40997 4.68568L13.3993 5.29162C13.9749 5.37905 14.204 6.12442 13.7861 6.5502L10.9023 9.48853L11.5829 13.6362C11.6815 14.2374 11.083 14.6971 10.5693 14.4147L7 12.4532Z"
          fill="#FFD166"
        />
      </svg>
    </span>
  );
}

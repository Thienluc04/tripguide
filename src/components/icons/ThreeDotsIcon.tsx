import { ComponentProps } from 'react';

interface ThreeDotsIconProps extends ComponentProps<'svg'> {}

export function ThreeDotsIcon(props: ThreeDotsIconProps) {
  return (
    <span>
      <svg
        width="6"
        height="22"
        viewBox="0 0 6 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <circle cx="3.2832" cy="2.8938" r="2.5" fill="currentColor" />
        <circle cx="3.2832" cy="11.0178" r="2.5" fill="currentColor" />
        <circle cx="3.2832" cy="19.1418" r="2.5" fill="currentColor" />
      </svg>
    </span>
  );
}

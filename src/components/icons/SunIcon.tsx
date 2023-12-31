import { ComponentProps } from 'react';

interface SunIconProps extends ComponentProps<'span'> {}

export function SunIcon(props: SunIconProps) {
  return (
    <span {...props}>
      <svg
        width="19"
        height="20"
        viewBox="0 0 19 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="9.32715" cy="10.0005" r="6" fill="currentColor" />
        <ellipse
          cx="9.76705"
          cy="1.00049"
          rx="0.97213"
          ry="1"
          fill="currentColor"
        />
        <ellipse
          cx="15.6103"
          cy="3.76303"
          rx="0.97213"
          ry="1"
          fill="currentColor"
        />
        <ellipse
          cx="17.9546"
          cy="9.97523"
          rx="0.97213"
          ry="1"
          fill="currentColor"
        />
        <ellipse
          cx="15.3667"
          cy="15.8238"
          rx="0.97213"
          ry="1"
          fill="currentColor"
        />
        <ellipse
          cx="9.76705"
          cy="18.5883"
          rx="0.97213"
          ry="1"
          fill="currentColor"
        />
        <ellipse
          cx="3.644"
          cy="15.8238"
          rx="0.97213"
          ry="1"
          fill="currentColor"
        />
        <ellipse
          cx="1.29928"
          cy="9.79642"
          rx="0.97213"
          ry="1"
          fill="currentColor"
        />
        <ellipse
          cx="3.644"
          cy="3.41143"
          rx="0.97213"
          ry="1"
          fill="currentColor"
        />
      </svg>
    </span>
  );
}

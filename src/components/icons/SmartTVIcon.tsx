import { ComponentProps } from 'react';

interface SmartTVIconProps extends ComponentProps<'span'> {}

export function SmartTVIcon(props: SmartTVIconProps) {
  return (
    <span {...props}>
      <svg
        width={22}
        height={18}
        viewBox="0 0 22 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3 2C2.44771 2 2 2.44771 2 3V12C2 12.5523 2.44771 13 3 13H19C19.5523 13 20 12.5523 20 12V3C20 2.44771 19.5523 2 19 2H3ZM0 3C0 1.34315 1.34315 0 3 0H19C20.6569 0 22 1.34315 22 3V12C22 13.6569 20.6569 15 19 15H3C1.34315 15 0 13.6569 0 12V3Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6 17C6 16.4477 6.44772 16 7 16V17V18C6.44772 18 6 17.5523 6 17ZM7 17V18H15C15.5523 18 16 17.5523 16 17C16 16.4477 15.5523 16 15 16H7V17Z"
          fill="currentColor"
        />
      </svg>
    </span>
  );
}

import { ComponentProps } from 'react';

interface ParkingIconProps extends ComponentProps<'span'> {}

export function ParkingIcon(props: ParkingIconProps) {
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
          d="M5.19199 11.3933V8.68125H6.70091C7.54644 8.68125 8.20315 8.4824 8.67103 8.0847C9.14225 7.687 9.37786 7.13056 9.37786 6.41536C9.37786 5.71688 9.13724 5.15543 8.65599 4.73099C8.17808 4.30655 7.5314 4.09434 6.71595 4.09434H3.9237V11.3933H5.19199ZM6.71595 7.66361H5.19199V5.11699H6.75104C7.17214 5.12368 7.50299 5.24566 7.74362 5.48294C7.98424 5.71688 8.10456 6.03103 8.10456 6.42539C8.10456 6.82643 7.98592 7.1339 7.74863 7.34779C7.51135 7.55833 7.16712 7.66361 6.71595 7.66361Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M-0.000244141 1.78333C-0.000244141 1.07457 0.574324 0.5 1.28309 0.5H12.7164C13.4252 0.5 13.9998 1.07457 13.9998 1.78333V13.2167C13.9998 13.9254 13.4252 14.5 12.7164 14.5H1.28309C0.574324 14.5 -0.000244141 13.9254 -0.000244141 13.2167V1.78333ZM1.28309 1.78333H12.7164V13.2167H1.28309V1.78333Z"
          fill="currentColor"
        />
      </svg>
    </span>
  );
}

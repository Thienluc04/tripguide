import { ComponentProps } from "react";

interface DesktopIconProps extends ComponentProps<"svg"> {}

export function DesktopIcon(props: DesktopIconProps) {
  return (
    <span>
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <rect
          x="0.5"
          y="0.5"
          width="46.9471"
          height="47"
          rx="7.5"
          stroke="#E7ECF3"
        />
        <path
          d="M13.9846 18C13.9846 16.8954 14.8791 16 15.9824 16H31.9648C33.0682 16 33.9626 16.8954 33.9626 18V27C33.9626 28.1046 33.0682 29 31.9648 29H15.9824C14.8791 29 13.9846 28.1046 13.9846 27V18Z"
          stroke="#B1B5C4"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M19.978 32C19.978 32 21.8254 32 23.9736 32C25.3135 32 26.7704 32 27.9692 32"
          stroke="#B1B5C4"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </span>
  );
}

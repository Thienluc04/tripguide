import { ComponentProps } from "react";

interface ArrowDownIconProps extends ComponentProps<"svg"> {}

export function ArrowDownIcon(props: ArrowDownIconProps) {
  return (
    <span>
      <svg
        width={10}
        height={6}
        viewBox="0 0 10 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.93248 0C9.3564 0 9.58798 0.494429 9.31659 0.820092L5.38411 5.53907C5.18421 5.77894 4.81579 5.77894 4.61589 5.53907L0.68341 0.820091C0.412024 0.494428 0.643601 0 1.06752 0L8.93248 0Z"
          fill="currentColor"
        />
      </svg>
    </span>
  );
}

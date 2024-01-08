import { ComponentProps } from "react";

interface ClockIconProps extends ComponentProps<"svg"> {}

export function ClockIcon(props: ClockIconProps) {
  return (
    <span>
      <svg
        width={22}
        height={23}
        viewBox="0 0 22 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M10.9979 21.4686C15.9683 21.4686 19.9977 17.4393 19.9977 12.4688C19.9977 7.49835 15.9683 3.46899 10.9979 3.46899C6.0274 3.46899 1.99805 7.49835 1.99805 12.4688C1.99805 17.4393 6.0274 21.4686 10.9979 21.4686Z"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.4999 8.96912L11 12.469"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.0005 18.4686L19.0005 21.4686"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.00096 18.4686L3.00098 21.4686"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1 4.46918L3.99994 1.46924"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.0005 1.46924L21.0004 4.46918"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11 3.4692V1.46924"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

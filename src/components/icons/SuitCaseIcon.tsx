import { ComponentProps } from "react";

interface SuitCaseIconProps extends ComponentProps<"svg"> {}

export function SuitCaseIcon(props: SuitCaseIconProps) {
  return (
    <span>
      <svg
        width={16}
        height={17}
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.65625 5.83211H4.32315V13.8321H11.6445V5.83211H11.3111H4.65625ZM12.9755 5.83211V13.8321H13.3093C13.6768 13.8321 13.9748 13.5336 13.9748 13.1654V6.49878C13.9748 6.13059 13.6768 5.83211 13.3093 5.83211H12.9755ZM2.66158 5.83211H2.99219V13.8321H2.66158C2.29404 13.8321 1.99609 13.5336 1.99609 13.1654V6.49878C1.99609 6.13059 2.29404 5.83211 2.66158 5.83211ZM11.3111 4.50008H13.3082C14.4108 4.50008 15.3047 5.39551 15.3047 6.50008V13.1667C15.3047 14.2713 14.4108 15.1667 13.3082 15.1667H2.66051C1.5579 15.1667 0.664062 14.2713 0.664062 13.1667V6.50008C0.664062 5.39551 1.5579 4.50008 2.66051 4.50008H4.65625V4.49878C4.65625 3.39421 5.55009 2.49878 6.65269 2.49878H9.31462C10.4172 2.49878 11.3111 3.39421 11.3111 4.49878V4.50008ZM9.97726 4.50008C9.97726 4.13189 9.67932 3.83341 9.31178 3.83341H6.64986C6.28232 3.83341 5.98438 4.13189 5.98438 4.50008H9.97726Z"
          fill="currentColor"
        />
      </svg>
    </span>
  );
}

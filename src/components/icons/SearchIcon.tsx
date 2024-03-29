import { ComponentProps } from "react";

interface SearchIconProps extends ComponentProps<"svg"> {}

export function SearchIcon(props: SearchIconProps) {
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
          d="M6.49512 13.4902C2.90796 13.4902 0 10.5823 0 6.99512C0 3.40796 2.90796 0.5 6.49512 0.5C10.0823 0.5 12.9902 3.40796 12.9902 6.99512C12.9902 8.49625 12.481 9.87844 11.6258 10.9784L15.9993 15.3518L14.8511 16.5L10.4776 12.1265C9.37779 12.9812 7.9959 13.4902 6.49512 13.4902ZM11.3657 6.99634C11.3657 9.68671 9.18476 11.8677 6.49439 11.8677C3.80402 11.8677 1.62305 9.68671 1.62305 6.99634C1.62305 4.30597 3.80402 2.125 6.49439 2.125C9.18476 2.125 11.3657 4.30597 11.3657 6.99634Z"
          fill="currentColor"
        />
      </svg>
    </span>
  );
}

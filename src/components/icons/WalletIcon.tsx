import { ComponentProps } from 'react';

interface WalletIconProps extends ComponentProps<'svg'> {}

export function WalletIcon(props: WalletIconProps) {
  return (
    <span>
      <svg
        width="16"
        height="14"
        viewBox="0 0 16 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M13.6 3.11111H12.8V2.33333C12.8 1.71449 12.5471 1.121 12.0971 0.683418C11.647 0.245833 11.0365 0 10.4 0H2.4C1.76348 0 1.15303 0.245833 0.702944 0.683418C0.252856 1.121 0 1.71449 0 2.33333V11.6667C0 12.2855 0.252856 12.879 0.702944 13.3166C1.15303 13.7542 1.76348 14 2.4 14H13.6C14.2365 14 14.847 13.7542 15.2971 13.3166C15.7471 12.879 16 12.2855 16 11.6667V5.44444C16 4.82561 15.7471 4.23211 15.2971 3.79453C14.847 3.35694 14.2365 3.11111 13.6 3.11111ZM2.4 1.55556H10.4C10.6122 1.55556 10.8157 1.6375 10.9657 1.78336C11.1157 1.92922 11.2 2.12705 11.2 2.33333V3.11111H2.4C2.18783 3.11111 1.98434 3.02917 1.83431 2.88331C1.68429 2.73744 1.6 2.53961 1.6 2.33333C1.6 2.12705 1.68429 1.92922 1.83431 1.78336C1.98434 1.6375 2.18783 1.55556 2.4 1.55556ZM14.4 9.33333H13.6C13.3878 9.33333 13.1843 9.25139 13.0343 9.10553C12.8843 8.95967 12.8 8.76184 12.8 8.55556C12.8 8.34928 12.8843 8.15145 13.0343 8.00558C13.1843 7.85972 13.3878 7.77778 13.6 7.77778H14.4V9.33333ZM14.4 6.22222H13.6C12.9635 6.22222 12.353 6.46805 11.9029 6.90564C11.4529 7.34322 11.2 7.93672 11.2 8.55556C11.2 9.17439 11.4529 9.76789 11.9029 10.2055C12.353 10.6431 12.9635 10.8889 13.6 10.8889H14.4V11.6667C14.4 11.8729 14.3157 12.0708 14.1657 12.2166C14.0157 12.3625 13.8122 12.4444 13.6 12.4444H2.4C2.18783 12.4444 1.98434 12.3625 1.83431 12.2166C1.68429 12.0708 1.6 11.8729 1.6 11.6667V4.53444C1.85701 4.62235 2.12755 4.66706 2.4 4.66667H13.6C13.8122 4.66667 14.0157 4.74861 14.1657 4.89447C14.3157 5.04033 14.4 5.23816 14.4 5.44444V6.22222Z"
          fill="currentColor"
        />
      </svg>
    </span>
  );
}

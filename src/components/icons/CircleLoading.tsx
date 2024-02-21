import { ComponentProps } from "react";

interface CircleLoadingProps extends ComponentProps<"svg"> {}

export function CircleLoading(props: CircleLoadingProps) {
  return (
    <span>
      <svg
        width="18"
        height="19"
        viewBox="0 0 18 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M17.9969 9.03698L17.9963 9.05385C17.9546 10.1824 17.0625 11.0619 16.0021 11.0176C14.9939 10.976 14.1981 10.1049 14.1587 9.04925L14.1576 9.03276C14.1182 7.90324 14.9457 6.95377 16.0062 6.91158C17.067 6.86979 17.9578 7.75119 17.9972 8.8809C17.999 8.93171 17.999 8.98712 17.9969 9.03698Z"
          fill="currentColor"
        />
        <path
          d="M16.2297 14.5888L16.2211 14.6016C15.6509 15.4265 14.5624 15.6025 13.7878 14.9956C13.0549 14.4208 12.8713 13.3423 13.3385 12.5303L13.3466 12.5175C13.8519 11.6458 14.9235 11.3759 15.7416 11.9127C16.5599 12.4507 16.8138 13.5929 16.3086 14.4643C16.285 14.5056 16.2571 14.5497 16.2297 14.5888Z"
          fill="currentColor"
        />
        <path
          d="M11.9374 18.0678L11.9237 18.073C11.1139 18.3834 10.2207 17.9352 9.92947 17.0727C9.65352 16.2554 10.0225 15.3561 10.7499 15.0005L10.7634 14.9934C11.547 14.6137 12.4716 14.9813 12.8288 15.8165C13.1862 16.6513 12.8405 17.6361 12.0567 18.017C12.0184 18.0353 11.9763 18.0527 11.9374 18.0678Z"
          fill="currentColor"
        />
        <path
          d="M6.6565 18.3978L6.64156 18.3938C5.90355 18.198 5.4539 17.4009 5.63786 16.6152C5.81247 15.8686 6.50079 15.3998 7.20154 15.5225L7.21648 15.525C7.96745 15.659 8.47434 16.415 8.34924 17.215C8.22378 18.0141 7.51349 18.5548 6.7627 18.4212C6.72778 18.4152 6.69034 18.4064 6.6565 18.3978Z"
          fill="currentColor"
        />
        <path
          d="M2.19577 15.5859L2.18587 15.5739C1.74378 15.0506 1.78392 14.2449 2.27587 13.7733C2.74135 13.3273 3.44876 13.3461 3.89733 13.7938L3.90813 13.8047C4.38909 14.2879 4.41105 15.0951 3.95727 15.608C3.50348 16.1203 2.74567 16.1443 2.26435 15.6609C2.24113 15.6373 2.21683 15.6105 2.19577 15.5859Z"
          fill="currentColor"
        />
        <path
          d="M0.0120427 10.702L0.0100627 10.6857C-0.0682383 10.094 0.318947 9.54718 0.874614 9.46377C1.40094 9.38459 1.89091 9.7554 2.00719 10.2972L2.01061 10.3124C2.13373 10.896 1.78993 11.4749 1.24182 11.6072C0.694431 11.7383 0.150284 11.3717 0.0269829 10.7883C0.0210428 10.7601 0.0158228 10.7298 0.0120427 10.702Z"
          fill="currentColor"
        />
        <path
          d="M0.745515 5.46228L0.752535 5.44809C0.953238 5.00576 1.45292 4.82092 1.86801 5.03509C2.26185 5.23814 2.43664 5.73052 2.28237 6.15751L2.27697 6.17228C2.10957 6.63053 1.62591 6.85754 1.1957 6.67999C0.765496 6.50206 0.552013 5.98649 0.718875 5.52824C0.726975 5.50619 0.736335 5.48337 0.745515 5.46228Z"
          fill="currentColor"
        />
        <path
          d="M4.02733 1.63769L4.03975 1.63002C4.35133 1.43579 4.7522 1.54776 4.93436 1.87985C5.10716 2.1943 5.02004 2.59541 4.74518 2.80172L4.73312 2.81054C4.43737 3.03161 4.02895 2.9553 3.82177 2.63989C3.61422 2.32468 3.68604 1.88963 3.98197 1.66875C3.99637 1.6582 4.01221 1.64727 4.02733 1.63769Z"
          fill="currentColor"
        />
        <path
          d="M8.65462 0.442365L8.6701 0.443324C8.9311 0.459813 9.12964 0.698907 9.11416 0.976541C9.09922 1.24056 8.89348 1.44514 8.64922 1.45013L8.63374 1.45032C8.37219 1.45492 8.15673 1.2327 8.15241 0.9543C8.14809 0.675516 8.35671 0.446008 8.61826 0.441406C8.63014 0.441598 8.64292 0.44179 8.65462 0.442365Z"
          fill="currentColor"
        />
        <path
          d="M13.0233 2.16295L13.0346 2.17235C13.1628 2.27723 13.1867 2.4726 13.0883 2.60893C12.9949 2.73797 12.8246 2.76711 12.6975 2.68064L12.686 2.67201C12.5497 2.57825 12.5108 2.38536 12.5989 2.2406C12.6867 2.09604 12.8681 2.05443 13.0039 2.14857C13.0098 2.15279 13.0168 2.15816 13.0233 2.16295Z"
          fill="currentColor"
        />
        <path
          d="M15.683 6.10061L15.6875 6.11557C15.7066 6.1775 15.6752 6.2448 15.6175 6.26551C15.5622 6.28545 15.5019 6.25573 15.4796 6.19974L15.474 6.18594C15.4495 6.12535 15.4758 6.05556 15.5327 6.02929C15.589 6.00321 15.6551 6.03121 15.679 6.09179C15.6808 6.09467 15.6819 6.09755 15.683 6.10061Z"
          fill="currentColor"
        />
      </svg>
    </span>
  );
}

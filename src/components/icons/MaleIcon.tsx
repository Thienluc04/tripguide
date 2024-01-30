import { ComponentProps } from "react";

interface MaleIconProps extends ComponentProps<"svg"> {}

export function MaleIcon(props: MaleIconProps) {
  return (
    <span>
      <svg
        width="20"
        height="21"
        viewBox="0 0 20 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M7.5405 20.9161C5.60693 20.9161 3.67753 20.1785 2.20652 18.7075C-0.735506 15.7655 -0.735506 10.9774 2.20652 8.03538C5.14855 5.09335 9.93663 5.09335 12.8787 8.03538C15.8207 10.9774 15.8207 15.7655 12.8787 18.7075C11.4035 20.1785 9.46991 20.9161 7.5405 20.9161ZM7.5405 7.36863C6.00282 7.36863 4.46513 7.9562 3.29415 9.12301C0.9522 11.465 0.9522 15.2738 3.29415 17.6157C5.63611 19.9577 9.4449 19.9577 11.7869 17.6157C14.1288 15.2738 14.1288 11.465 11.7869 9.12301C10.6159 7.9562 9.07819 7.36863 7.5405 7.36863Z"
          fill="currentColor"
        />
        <path
          d="M12.3325 9.35284C12.1366 9.35284 11.9407 9.27783 11.7866 9.12781C11.4865 8.82777 11.4865 8.34021 11.7866 8.04018L18.6874 1.13933C18.9874 0.839297 19.475 0.839297 19.775 1.13933C20.0751 1.43937 20.0751 1.92693 19.775 2.22697L12.8784 9.12781C12.7242 9.27783 12.5283 9.35284 12.3325 9.35284Z"
          fill="currentColor"
        />
        <path
          d="M19.0199 8.14334C19.0116 8.14334 18.9991 8.14334 18.9907 8.14334C18.5657 8.12667 18.2365 7.77246 18.249 7.34741L18.4282 2.48432L13.5651 2.65934C13.1275 2.68017 12.7817 2.34263 12.7692 1.91758C12.7525 1.49253 13.0859 1.13415 13.5109 1.12165L19.2033 0.913291C19.4158 0.900789 19.6242 0.9883 19.7742 1.13832C19.9242 1.28834 20.0075 1.4967 19.9992 1.70922L19.7908 7.39742C19.7742 7.8183 19.4325 8.14334 19.0199 8.14334Z"
          fill="currentColor"
        />
      </svg>
    </span>
  );
}
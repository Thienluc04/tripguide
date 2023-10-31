import { ComponentProps } from 'react';

interface ATMIconProps extends ComponentProps<'span'> {}

export function ATMIcon(props: ATMIconProps) {
  return (
    <span {...props}>
      <svg
        width="22"
        height="20"
        viewBox="0 0 22 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.71 8.29C5.6128 8.20167 5.50118 8.13064 5.38 8.08C5.19789 8.00342 4.99718 7.9825 4.80319 8.01987C4.6092 8.05725 4.43062 8.15124 4.29 8.29C4.19896 8.3851 4.12759 8.49725 4.08 8.62C4.00342 8.80211 3.9825 9.00282 4.01987 9.19681C4.05725 9.3908 4.15124 9.56938 4.29 9.71C4.3872 9.79833 4.49882 9.86936 4.62 9.92C4.80173 9.99274 5.00081 10.0105 5.19256 9.97121C5.38431 9.93188 5.56031 9.83713 5.69872 9.69872C5.83713 9.56031 5.93188 9.38431 5.97121 9.19256C6.01055 9.00081 5.99274 8.80173 5.92 8.62C5.87241 8.49725 5.80104 8.3851 5.71 8.29ZM8.29 5.71C8.38344 5.80268 8.49426 5.87601 8.61609 5.92577C8.73793 5.97554 8.86839 6.00076 9 6C9.13118 6.00338 9.26132 5.97598 9.38 5.92C9.50119 5.86936 9.6128 5.79833 9.71 5.71C9.79833 5.6128 9.86936 5.50118 9.92 5.38C9.97291 5.2603 10.0002 5.13087 10.0002 5C10.0002 4.86913 9.97291 4.7397 9.92 4.62C9.86936 4.49882 9.79833 4.3872 9.71 4.29C9.61704 4.19627 9.50644 4.12188 9.38458 4.07111C9.26272 4.02034 9.13201 3.9942 9 3.9942C8.86799 3.9942 8.73728 4.02034 8.61542 4.07111C8.49356 4.12188 8.38296 4.19627 8.29 4.29C8.20167 4.3872 8.13064 4.49882 8.08 4.62C8.02709 4.7397 7.99977 4.86913 7.99977 5C7.99977 5.13087 8.02709 5.2603 8.08 5.38C8.13064 5.50118 8.20167 5.6128 8.29 5.71ZM5.71 4.29C5.57013 4.14897 5.39143 4.05279 5.19668 4.01372C5.00193 3.97465 4.79996 3.99446 4.61652 4.07063C4.43307 4.1468 4.27647 4.27587 4.16667 4.44139C4.05687 4.60691 3.99884 4.80138 4 5C4.00158 5.13068 4.02876 5.25978 4.08 5.38C4.13064 5.50118 4.20167 5.6128 4.29 5.71C4.38344 5.80268 4.49426 5.87601 4.61609 5.92577C4.73793 5.97554 4.86839 6.00076 5 6C5.13118 6.00338 5.26132 5.97598 5.38 5.92C5.50118 5.86936 5.6128 5.79833 5.71 5.71C5.79833 5.6128 5.86936 5.50118 5.92 5.38C5.97291 5.2603 6.00023 5.13087 6.00023 5C6.00023 4.86913 5.97291 4.7397 5.92 4.62C5.86936 4.49882 5.79833 4.3872 5.71 4.29ZM12.29 16.29L11 17.59L9.71 16.29C9.61676 16.1968 9.50607 16.1228 9.38425 16.0723C9.26243 16.0219 9.13186 15.9959 9 15.9959C8.86814 15.9959 8.73757 16.0219 8.61575 16.0723C8.49393 16.1228 8.38324 16.1968 8.29 16.29C8.19676 16.3832 8.1228 16.4939 8.07234 16.6158C8.02188 16.7376 7.99591 16.8681 7.99591 17C7.99591 17.1319 8.02188 17.2624 8.07234 17.3842C8.1228 17.5061 8.19676 17.6168 8.29 17.71L10.29 19.71C10.383 19.8037 10.4936 19.8781 10.6154 19.9289C10.7373 19.9797 10.868 20.0058 11 20.0058C11.132 20.0058 11.2627 19.9797 11.3846 19.9289C11.5064 19.8781 11.617 19.8037 11.71 19.71L13.71 17.71C13.8983 17.5217 14.0041 17.2663 14.0041 17C14.0041 16.7337 13.8983 16.4783 13.71 16.29C13.5217 16.1017 13.2663 15.9959 13 15.9959C12.7337 15.9959 12.4783 16.1017 12.29 16.29ZM17.71 4.29C17.5701 4.14897 17.3914 4.05279 17.1967 4.01372C17.0019 3.97465 16.8 3.99446 16.6165 4.07063C16.4331 4.1468 16.2765 4.27587 16.1667 4.44139C16.0569 4.60691 15.9988 4.80138 16 5C15.9966 5.13118 16.024 5.26132 16.08 5.38C16.1306 5.50118 16.2017 5.6128 16.29 5.71C16.383 5.80373 16.4936 5.87812 16.6154 5.92889C16.7373 5.97966 16.868 6.0058 17 6.0058C17.132 6.0058 17.2627 5.97966 17.3846 5.92889C17.5064 5.87812 17.617 5.80373 17.71 5.71C17.7983 5.6128 17.8694 5.50118 17.92 5.38C17.976 5.26132 18.0034 5.13118 18 5C17.9984 4.86932 17.9712 4.74022 17.92 4.62C17.8694 4.49882 17.7983 4.3872 17.71 4.29ZM13 8H9C8.73478 8 8.48043 8.10536 8.29289 8.29289C8.10536 8.48043 8 8.73478 8 9C8 9.26522 8.10536 9.51957 8.29289 9.70711C8.48043 9.89464 8.73478 10 9 10H13C13.2652 10 13.5196 9.89464 13.7071 9.70711C13.8946 9.51957 14 9.26522 14 9C14 8.73478 13.8946 8.48043 13.7071 8.29289C13.5196 8.10536 13.2652 8 13 8ZM19 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.31607 1.44129 0 2.20435 0 3V11C0 11.7956 0.31607 12.5587 0.87868 13.1213C1.44129 13.6839 2.20435 14 3 14H19C19.7956 14 20.5587 13.6839 21.1213 13.1213C21.6839 12.5587 22 11.7956 22 11V3C22 2.20435 21.6839 1.44129 21.1213 0.87868C20.5587 0.316071 19.7956 0 19 0ZM20 11C20 11.2652 19.8946 11.5196 19.7071 11.7071C19.5196 11.8946 19.2652 12 19 12H3C2.73478 12 2.48043 11.8946 2.29289 11.7071C2.10536 11.5196 2 11.2652 2 11V3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2H19C19.2652 2 19.5196 2.10536 19.7071 2.29289C19.8946 2.48043 20 2.73478 20 3V11ZM17.71 8.29C17.6149 8.19896 17.5028 8.12759 17.38 8.08C17.2606 8.02586 17.1311 7.99785 17 7.99785C16.8689 7.99785 16.7394 8.02586 16.62 8.08C16.4988 8.13064 16.3872 8.20167 16.29 8.29C16.1073 8.48163 16.0037 8.73523 16 9C15.9983 9.14876 16.0297 9.29605 16.0921 9.43111C16.1545 9.56617 16.2462 9.68561 16.3606 9.78072C16.475 9.87583 16.6092 9.94421 16.7534 9.98089C16.8976 10.0176 17.0481 10.0216 17.1941 9.99273C17.34 9.96384 17.4777 9.90276 17.597 9.81392C17.7164 9.72509 17.8144 9.61075 17.8839 9.47923C17.9535 9.34771 17.9928 9.20233 17.9991 9.05369C18.0053 8.90505 17.9783 8.75688 17.92 8.62C17.8724 8.49725 17.801 8.3851 17.71 8.29ZM12.62 4.08C12.4988 4.13064 12.3872 4.20167 12.29 4.29C12.1073 4.48163 12.0037 4.73523 12 5C12.0016 5.13068 12.0288 5.25978 12.08 5.38C12.1306 5.50118 12.2017 5.6128 12.29 5.71C12.3834 5.80268 12.4943 5.87601 12.6161 5.92577C12.7379 5.97554 12.8684 6.00076 13 6C13.1312 6.00338 13.2613 5.97598 13.38 5.92C13.5012 5.86936 13.6128 5.79833 13.71 5.71C13.7983 5.6128 13.8694 5.50118 13.92 5.38C13.976 5.26132 14.0034 5.13118 14 5C13.9963 4.73523 13.8927 4.48163 13.71 4.29C13.5694 4.15124 13.3908 4.05725 13.1968 4.01987C13.0028 3.9825 12.8021 4.00342 12.62 4.08Z"
          fill="currentColor"
        />
      </svg>
    </span>
  );
}
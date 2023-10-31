import { ComponentProps } from 'react';

interface PencilWriteIconProps extends ComponentProps<'svg'> {}

export function PencilWriteIcon(props: PencilWriteIconProps) {
  return (
    <span>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M3 15.9973H7.24C7.37161 15.998 7.50207 15.9728 7.62391 15.923C7.74574 15.8733 7.85656 15.8 7.95 15.7073L14.87 8.77935L17.71 6.00015C17.8037 5.90722 17.8781 5.79665 17.9289 5.67482C17.9797 5.553 18.0058 5.42233 18.0058 5.29036C18.0058 5.15838 17.9797 5.02772 17.9289 4.90589C17.8781 4.78407 17.8037 4.6735 17.71 4.58056L13.47 0.291806C13.377 0.198105 13.2664 0.123732 13.1446 0.0729784C13.0227 0.0222244 12.892 -0.00390625 12.76 -0.00390625C12.628 -0.00390625 12.4973 0.0222244 12.3754 0.0729784C12.2536 0.123732 12.143 0.198105 12.05 0.291806L9.23 3.12099L2.29 10.049C2.19732 10.1424 2.12399 10.2532 2.07423 10.375C2.02446 10.4968 1.99924 10.6272 2 10.7588V14.9975C2 15.2627 2.10536 15.517 2.29289 15.7044C2.48043 15.8919 2.73478 15.9973 3 15.9973ZM12.76 2.41119L15.59 5.24037L14.17 6.65996L11.34 3.83078L12.76 2.41119ZM4 11.1687L9.93 5.24037L12.76 8.06955L6.83 13.9978H4V11.1687ZM19 17.9967H1C0.734784 17.9967 0.48043 18.102 0.292893 18.2895C0.105357 18.477 0 18.7312 0 18.9964C0 19.2615 0.105357 19.5158 0.292893 19.7033C0.48043 19.8908 0.734784 19.9961 1 19.9961H19C19.2652 19.9961 19.5196 19.8908 19.7071 19.7033C19.8946 19.5158 20 19.2615 20 18.9964C20 18.7312 19.8946 18.477 19.7071 18.2895C19.5196 18.102 19.2652 17.9967 19 17.9967Z"
          fill="currentColor"
        />
      </svg>
    </span>
  );
}
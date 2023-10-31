import { ComponentProps } from 'react';

interface BreakfastIconProps extends ComponentProps<'span'> {}

export function BreakfastIcon(props: BreakfastIconProps) {
  return (
    <span {...props}>
      <svg
        width="16"
        height="20"
        viewBox="0 0 16 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 0C14.7348 0 14.4804 0.105357 14.2929 0.292893C14.1054 0.48043 14 0.734784 14 1V6.46L13 7.13V1C13 0.734784 12.8946 0.48043 12.7071 0.292893C12.5196 0.105357 12.2652 0 12 0C11.7348 0 11.4804 0.105357 11.2929 0.292893C11.1054 0.48043 11 0.734784 11 1V7.13L10 6.46V1C10 0.734784 9.89464 0.48043 9.70711 0.292893C9.51957 0.105357 9.26522 0 9 0C8.73478 0 8.48043 0.105357 8.29289 0.292893C8.10536 0.48043 8 0.734784 8 1V7C8.00085 7.16471 8.04237 7.32665 8.12088 7.47145C8.19938 7.61625 8.31244 7.73941 8.45 7.83L11 9.54V19C11 19.2652 11.1054 19.5196 11.2929 19.7071C11.4804 19.8946 11.7348 20 12 20C12.2652 20 12.5196 19.8946 12.7071 19.7071C12.8946 19.5196 13 19.2652 13 19V9.54L15.55 7.83C15.6876 7.73941 15.8006 7.61625 15.8791 7.47145C15.9576 7.32665 15.9991 7.16471 16 7V1C16 0.734784 15.8946 0.48043 15.7071 0.292893C15.5196 0.105357 15.2652 0 15 0ZM5 0C3.67392 0 2.40215 0.526784 1.46447 1.46447C0.526784 2.40215 0 3.67392 0 5V11C0 11.2652 0.105357 11.5196 0.292893 11.7071C0.48043 11.8946 0.734784 12 1 12H4V19C4 19.2652 4.10536 19.5196 4.29289 19.7071C4.48043 19.8946 4.73478 20 5 20C5.26522 20 5.51957 19.8946 5.70711 19.7071C5.89464 19.5196 6 19.2652 6 19V1C6 0.734784 5.89464 0.48043 5.70711 0.292893C5.51957 0.105357 5.26522 0 5 0ZM4 10H2V5C1.99967 4.37935 2.19186 3.77387 2.55006 3.26702C2.90826 2.76016 3.41484 2.37688 4 2.17V10Z"
          fill="currentColor"
        />
      </svg>
    </span>
  );
}
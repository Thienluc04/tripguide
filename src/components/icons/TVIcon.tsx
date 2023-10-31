import { ComponentProps } from 'react';

interface TVIconProps extends ComponentProps<'span'> {}

export function TVIcon(props: TVIconProps) {
  return (
    <span {...props}>
      <svg
        width="18"
        height="20"
        viewBox="0 0 18 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 4.00409H11.41L13.71 1.71409C13.8032 1.62085 13.8772 1.51016 13.9277 1.38834C13.9781 1.26652 14.0041 1.13595 14.0041 1.00409C14.0041 0.872232 13.9781 0.741664 13.9277 0.619842C13.8772 0.49802 13.8032 0.38733 13.71 0.294092C13.6168 0.200853 13.5061 0.126892 13.3842 0.0764319C13.2624 0.0259715 13.1319 0 13 0C12.7337 0 12.4783 0.105788 12.29 0.294092L9 3.54409L7.83 1.54409C7.76434 1.42984 7.67682 1.32964 7.57243 1.24922C7.46805 1.16879 7.34885 1.10971 7.22163 1.07536C7.09441 1.041 6.96168 1.03203 6.83099 1.04897C6.70031 1.06592 6.57425 1.10843 6.46 1.17409C6.34575 1.23975 6.24555 1.32727 6.16513 1.43166C6.0847 1.53604 6.02562 1.65525 5.99126 1.78246C5.95691 1.90968 5.94794 2.04242 5.96488 2.1731C5.98182 2.30378 6.02434 2.42984 6.09 2.54409L7 4.00409H3C2.20435 4.00409 1.44129 4.32016 0.87868 4.88277C0.316071 5.44538 0 6.20844 0 7.00409V15.0041C0 15.7997 0.316071 16.5628 0.87868 17.1254C1.44129 17.688 2.20435 18.0041 3 18.0041V19.0041C3 19.2693 3.10536 19.5237 3.29289 19.7112C3.48043 19.8987 3.73478 20.0041 4 20.0041C4.26522 20.0041 4.51957 19.8987 4.70711 19.7112C4.89464 19.5237 5 19.2693 5 19.0041V18.0041H13V19.0041C13 19.2693 13.1054 19.5237 13.2929 19.7112C13.4804 19.8987 13.7348 20.0041 14 20.0041C14.2652 20.0041 14.5196 19.8987 14.7071 19.7112C14.8946 19.5237 15 19.2693 15 19.0041V18.0041C15.7956 18.0041 16.5587 17.688 17.1213 17.1254C17.6839 16.5628 18 15.7997 18 15.0041V7.00409C18 6.20844 17.6839 5.44538 17.1213 4.88277C16.5587 4.32016 15.7956 4.00409 15 4.00409ZM16 15.0041C16 15.2693 15.8946 15.5237 15.7071 15.7112C15.5196 15.8987 15.2652 16.0041 15 16.0041H3C2.73478 16.0041 2.48043 15.8987 2.29289 15.7112C2.10536 15.5237 2 15.2693 2 15.0041V7.00409C2 6.73888 2.10536 6.48452 2.29289 6.29699C2.48043 6.10945 2.73478 6.00409 3 6.00409H15C15.2652 6.00409 15.5196 6.10945 15.7071 6.29699C15.8946 6.48452 16 6.73888 16 7.00409V15.0041Z"
          fill="currentColor"
        />
      </svg>
    </span>
  );
}
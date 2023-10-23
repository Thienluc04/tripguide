import { ComponentProps } from 'react';

interface CalendarIconProps extends ComponentProps<'span'> {}

export function CalendarIcon(props: CalendarIconProps) {
  return (
    <span {...props}>
      <svg
        width={21}
        height={20}
        viewBox="0 0 21 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.74726 3.8C6.69709 4.30533 6.27073 4.7 5.7522 4.7C5.23366 4.7 4.80731 4.30533 4.75713 3.8H2.2522V5.4H18.2522V3.8H16.6473C16.5971 4.30533 16.1707 4.7 15.6522 4.7C15.1337 4.7 14.7073 4.30533 14.6571 3.8H6.74726ZM6.74726 3.8H14.6571H6.74726ZM4.7522 1.8V1C4.7522 0.447715 5.19991 0 5.7522 0C6.30448 0 6.7522 0.447715 6.7522 1V1.8H14.6522V1C14.6522 0.447715 15.0999 0 15.6522 0C16.2045 0 16.6522 0.447715 16.6522 1V1.8H18.3522C19.4015 1.8 20.2522 2.65066 20.2522 3.7V17C20.2522 18.6569 18.9091 20 17.2522 20H3.2522C1.59534 20 0.252197 18.6569 0.252197 17V3.7C0.252197 2.65066 1.10286 1.8 2.1522 1.8H4.7522ZM18.2522 7.39844H2.2522V16.9984C2.2522 17.5507 2.69991 17.9984 3.2522 17.9984H17.2522C17.8045 17.9984 18.2522 17.5507 18.2522 16.9984V7.39844ZM4.8522 11C4.29991 11 3.8522 10.5523 3.8522 10C3.8522 9.44771 4.29991 9 4.8522 9H8.4522C9.00448 9 9.4522 9.44771 9.4522 10C9.4522 10.5523 9.00448 11 8.4522 11H4.8522ZM4.85181 14.6016C4.29952 14.6016 3.85181 14.1538 3.85181 13.6016C3.85181 13.0493 4.29952 12.6016 4.85181 12.6016H12.0518C12.6041 12.6016 13.0518 13.0493 13.0518 13.6016C13.0518 14.1538 12.6041 14.6016 12.0518 14.6016H4.85181Z"
          fill="currentColor"
        />
      </svg>
    </span>
  );
}

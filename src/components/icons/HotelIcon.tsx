import { ComponentProps } from 'react';

interface HotelIconProps extends ComponentProps<'span'> {
  variant?: string;
}

export function HotelIcon({ className = '', variant }: HotelIconProps) {
  return (
    <span className={className}>
      <svg
        width={25}
        height={25}
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.014 6.85452H18.2261C20.4026 6.85452 22.1655 8.65154 22.1655 10.8702V19.5147C22.1655 20.2503 21.5692 20.8467 20.8335 20.8467H20.7475C20.0119 20.8467 19.4155 20.2503 19.4155 19.5147V16.8937H4.74886V19.555C4.74886 20.2684 4.17056 20.8467 3.45719 20.8467C2.74383 20.8467 2.16553 20.2684 2.16553 19.555V5.83153C2.16553 5.28761 2.60646 4.84668 3.15038 4.84668C3.69429 4.84668 4.13522 5.28761 4.13522 5.83153V13.882H12.014V6.85452ZM11.0291 8.92485C11.0291 10.5863 9.70448 11.9366 8.07456 11.9366C6.44464 11.9366 5.12001 10.5863 5.12001 8.92485C5.12001 7.26336 6.44464 5.91309 8.07456 5.91309C9.70448 5.91309 11.0291 7.26336 11.0291 8.92485Z"
          fill={'currentColor' || '#84878B'}
        />
      </svg>
    </span>
  );
}

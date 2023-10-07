import { ComponentProps } from 'react';

interface FacebookIconProps extends ComponentProps<'span'> {}

export function FacebookIcon({ className = '' }: FacebookIconProps) {
  return (
    <span className={className}>
      <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.1601 9.2417V6.74172C14.1601 6.05167 14.7201 5.49169 15.4101 5.49169H16.6601V2.3667H14.1601C12.0889 2.3667 10.4101 4.04547 10.4101 6.11671V9.2417H7.91016V12.3667H10.4101V22.3667H14.1601V12.3667H16.6601L17.9102 9.2417H14.1601Z"
          fill={'currentColor' || '#84878B'}
        />
      </svg>
    </span>
  );
}

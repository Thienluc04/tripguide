import { ComponentProps } from 'react';

interface GoogleIconProps extends ComponentProps<'span'> {}

export function GoogleIcon({ className = '' }: GoogleIconProps) {
  return (
    <span className={className}>
      <svg
        width="21"
        height="21"
        viewBox="0 0 21 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.6251 8.49019H11.0884V12.353H16.5765C16.0657 14.8076 13.9275 16.218 11.0884 16.218C7.74071 16.218 5.04244 13.5809 5.04244 10.308C5.04244 7.03619 7.74071 4.39908 11.0884 4.39908C12.5303 4.39908 13.8336 4.89941 14.8563 5.71763L17.8341 2.80852C16.0199 1.26274 13.6939 0.309082 11.0884 0.309082C5.41465 0.309082 0.856445 4.76285 0.856445 10.3091C0.856445 15.8553 5.41351 20.3091 11.0884 20.3091C16.2043 20.3091 20.8564 16.6724 20.8564 10.3091C20.8564 9.71808 20.7637 9.08119 20.6251 8.49019Z"
          fill="white"
        />
      </svg>
    </span>
  );
}

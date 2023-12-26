import { ComponentProps } from 'react';

interface HeadphoneIconProps extends ComponentProps<'svg'> {}

export function HeadphoneIcon(props: HeadphoneIconProps) {
  return (
    <span>
      <svg
        width="23"
        height="21"
        viewBox="0 0 23 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M20.2267 11.7958V9.37212C20.2267 7.01326 19.297 4.75101 17.6421 3.08304C15.9872 1.41507 13.7426 0.478014 11.4022 0.478014C9.06182 0.478014 6.81727 1.41507 5.16235 3.08304C3.50743 4.75101 2.57771 7.01326 2.57771 9.37212V11.7958C1.93402 12.0251 1.37647 12.4496 0.981508 13.0109C0.586546 13.5721 0.373501 14.2428 0.371582 14.9309V17.1545C0.371582 18.039 0.720228 18.8874 1.34082 19.5129C1.96142 20.1384 2.80312 20.4898 3.68077 20.4898H6.98997C7.28252 20.4898 7.56309 20.3726 7.76995 20.1641C7.97681 19.9556 8.09303 19.6729 8.09303 19.378V12.7074C8.09303 12.4126 7.97681 12.1298 7.76995 11.9213C7.56309 11.7128 7.28252 11.5957 6.98997 11.5957H4.78384V9.37212C4.78384 7.60298 5.48113 5.90629 6.72232 4.65531C7.96351 3.40433 9.64692 2.70154 11.4022 2.70154C13.1575 2.70154 14.8409 3.40433 16.0821 4.65531C17.3233 5.90629 18.0206 7.60298 18.0206 9.37212V11.5957H15.8145C15.5219 11.5957 15.2414 11.7128 15.0345 11.9213C14.8276 12.1298 14.7114 12.4126 14.7114 12.7074V19.378C14.7114 19.6729 14.8276 19.9556 15.0345 20.1641C15.2414 20.3726 15.5219 20.4898 15.8145 20.4898H19.1237C20.0013 20.4898 20.843 20.1384 21.4636 19.5129C22.0842 18.8874 22.4329 18.039 22.4329 17.1545V14.9309C22.4309 14.2428 22.2179 13.5721 21.8229 13.0109C21.428 12.4496 20.8704 12.0251 20.2267 11.7958ZM5.8869 13.8192V18.2662H3.68077C3.38822 18.2662 3.10765 18.1491 2.90079 17.9406C2.69393 17.7321 2.57771 17.4493 2.57771 17.1545V14.9309C2.57771 14.6361 2.69393 14.3533 2.90079 14.1448C3.10765 13.9363 3.38822 13.8192 3.68077 13.8192H5.8869ZM20.2267 17.1545C20.2267 17.4493 20.1105 17.7321 19.9037 17.9406C19.6968 18.1491 19.4162 18.2662 19.1237 18.2662H16.9175V13.8192H19.1237C19.4162 13.8192 19.6968 13.9363 19.9037 14.1448C20.1105 14.3533 20.2267 14.6361 20.2267 14.9309V17.1545Z"
          fill="currentColor"
        />
      </svg>
    </span>
  );
}

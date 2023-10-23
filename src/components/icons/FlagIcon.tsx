import { ComponentProps } from 'react';

interface FlagIconProps extends ComponentProps<'span'> {}

export function FlagIcon(props: FlagIconProps) {
  return (
    <span {...props}>
      <svg
        width={14}
        height={17}
        viewBox="0 0 14 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.52966 16.8498H1.01154V16.8492H0.252197V15.3311H1.01154V0.150391H2.52966V0.908203L2.53009 0.908203H13.2516L10.9754 5.46251L13.2526 10.0169H2.53009H2.52966V15.3311H3.28845V16.8492H2.52966V16.8498ZM2.52966 2.42383V8.49632H10.7957L9.27761 5.46014L10.7952 2.42383H2.52966Z"
          fill="currentColor"
        />
      </svg>
    </span>
  );
}

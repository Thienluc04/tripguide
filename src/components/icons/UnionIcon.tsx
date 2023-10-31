import { ComponentProps } from 'react';

interface UnionIconProps extends ComponentProps<'svg'> {}

export function UnionIcon(props: UnionIconProps) {
  return (
    <span>
      <svg
        width={29}
        height={29}
        viewBox="0 0 29 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.3027 0.0178223H17.4711V28.0178H11.3027V6.38292H0.386812V5.01786C0.386812 2.25644 2.62539 0.0178581 5.38681 0.0178581H11.3027V0.0178223ZM28.3867 6.69535H20.6366V0.0179011H23.3867C26.1481 0.0179011 28.3867 2.25648 28.3867 5.0179V6.69535ZM0.386719 9.73571H8.13685V16.3839H0.386719V9.73571ZM0.386719 19.7364H8.13685V28.0179H5.38672C2.62529 28.0179 0.386719 25.7793 0.386719 23.0179V19.7364ZM20.6366 19.7364H28.3867V23.0179C28.3867 25.7793 26.1481 28.0179 23.3867 28.0179H20.6366V19.7364ZM28.3297 9.73571H20.5796V16.3839H28.3297V9.73571Z"
          fill="#3B3E44"
        />
      </svg>
    </span>
  );
}

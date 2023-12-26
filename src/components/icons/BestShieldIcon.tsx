import { ComponentProps } from 'react';

interface BestShieldIconProps extends ComponentProps<'svg'> {}

export function BestShieldIcon(props: BestShieldIconProps) {
  return (
    <span>
      <svg
        width="19"
        height="23"
        viewBox="0 0 19 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M18.0029 2.28655C17.8718 2.18308 17.7187 2.10959 17.5547 2.07149C17.3907 2.03338 17.22 2.03162 17.0552 2.06635C15.8498 2.31291 14.6053 2.31605 13.3985 2.07558C12.1918 1.83511 11.0482 1.35612 10.0382 0.668093C9.84939 0.540238 9.62504 0.471725 9.3952 0.471725C9.16537 0.471725 8.94101 0.540238 8.75217 0.668093C7.74221 1.35612 6.59864 1.83511 5.39187 2.07558C4.18509 2.31605 2.94065 2.31291 1.73517 2.06635C1.57039 2.03162 1.39973 2.03338 1.23574 2.07149C1.07175 2.10959 0.918595 2.18308 0.787533 2.28655C0.656647 2.39017 0.551213 2.5211 0.47898 2.66971C0.406747 2.81832 0.369551 2.98084 0.370124 3.14532V11.3477C0.369121 12.9262 0.754562 14.4822 1.49435 15.8859C2.23414 17.2897 3.30686 18.5007 4.62319 19.418L8.74088 22.2805C8.93195 22.4133 9.16066 22.4846 9.3952 22.4846C9.62975 22.4846 9.85846 22.4133 10.0495 22.2805L14.1672 19.418C15.4835 18.5007 16.5563 17.2897 17.2961 15.8859C18.0358 14.4822 18.4213 12.9262 18.4203 11.3477V3.14532C18.4209 2.98084 18.3837 2.81832 18.3114 2.66971C18.2392 2.5211 18.1338 2.39017 18.0029 2.28655ZM16.164 11.3477C16.1649 12.575 15.8654 13.7848 15.2904 14.8764C14.7155 15.968 13.8818 16.9097 12.8586 17.6234L9.3952 20.0345L5.93183 17.6234C4.90865 16.9097 4.0749 15.968 3.49996 14.8764C2.92503 13.7848 2.62553 12.575 2.62639 11.3477V4.41146C4.99145 4.60902 7.36009 4.07348 9.3952 2.88108C11.4303 4.07348 13.799 4.60902 16.164 4.41146V11.3477ZM11.1325 8.82644L8.09785 11.7991L7.09381 10.8082C6.88138 10.6009 6.59326 10.4844 6.29283 10.4844C5.99241 10.4844 5.70429 10.6009 5.49186 10.8082C5.27942 11.0155 5.16008 11.2967 5.16008 11.5899C5.16008 11.8831 5.27942 12.1643 5.49186 12.3716L7.29687 14.1332C7.40175 14.2364 7.52652 14.3183 7.66399 14.3742C7.80147 14.4301 7.94892 14.4589 8.09785 14.4589C8.24678 14.4589 8.39423 14.4301 8.5317 14.3742C8.66918 14.3183 8.79395 14.2364 8.89882 14.1332L12.7796 10.3788C12.992 10.1715 13.1114 9.89032 13.1114 9.59713C13.1114 9.30393 12.992 9.02275 12.7796 8.81542C12.5672 8.6081 12.2791 8.49163 11.9786 8.49163C11.6782 8.49163 11.3901 8.6081 11.1777 8.81542L11.1325 8.82644Z"
          fill="currentColor"
        />
      </svg>
    </span>
  );
}

import { ComponentProps } from "react";

interface FeatureIconProps extends ComponentProps<"svg"> {}

export function FeatureIcon(props: FeatureIconProps) {
  return (
    <span>
      <svg
        width="20"
        height="23"
        viewBox="0 0 20 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M2.83324 4.25903L2.83324 4.62855L3.18648 4.73701C3.60765 4.86633 3.97325 5.12252 4.23161 5.46592C4.4898 5.80912 4.62793 6.222 4.62793 6.64453C4.62793 7.06707 4.4898 7.47995 4.23161 7.82314C3.97325 8.16654 3.60765 8.42274 3.18648 8.55205L2.83324 8.66051L2.83324 9.03003L2.83324 21.3945C2.83324 21.4567 2.80803 21.5189 2.75888 21.5669C2.7093 21.6152 2.63942 21.6445 2.56397 21.6445C2.48852 21.6445 2.41863 21.6152 2.36905 21.5669C2.3199 21.5189 2.2947 21.4567 2.2947 21.3945L2.2947 9.03003L2.2947 8.66051L1.94145 8.55205C1.52028 8.42274 1.15468 8.16654 0.896327 7.82314C0.638129 7.47995 0.499999 7.06707 0.499999 6.64453C0.499999 6.222 0.638129 5.80912 0.896326 5.46593L0.496775 5.16533L0.896327 5.46592C1.15468 5.12252 1.52028 4.86633 1.94145 4.73701L2.2947 4.62855L2.2947 4.25903L2.2947 0.894533C2.2947 0.832378 2.3199 0.770128 2.36905 0.722212C2.41863 0.673874 2.48851 0.644533 2.56397 0.644533C2.63942 0.644533 2.7093 0.673874 2.75888 0.72221C2.80803 0.770128 2.83324 0.832378 2.83324 0.894533L2.83324 4.25903ZM3.63828 5.57942C3.35124 5.29956 2.96457 5.14453 2.56397 5.14453C2.16337 5.14453 1.77669 5.29956 1.48965 5.57942C1.20218 5.85969 1.03827 6.24255 1.03827 6.64453C1.03827 7.04651 1.20218 7.42938 1.48965 7.70965C1.77669 7.9895 2.16336 8.14453 2.56397 8.14453C2.96457 8.14453 3.35124 7.9895 3.63828 7.70965C3.92575 7.42938 4.08966 7.04651 4.08966 6.64453C4.08966 6.24255 3.92575 5.85969 3.63828 5.57942Z"
          fill="#141416"
          stroke="#222529"
        />
        <path
          d="M10.6235 17.5521L10.2702 17.6605L10.2702 18.03L10.2702 21.3945C10.2702 21.4567 10.245 21.5189 10.1959 21.5669C10.1463 21.6152 10.0764 21.6445 10.001 21.6445C9.92553 21.6445 9.85564 21.6152 9.80606 21.5669L9.45987 21.9219L9.80606 21.5669C9.75691 21.5189 9.73171 21.4567 9.73171 21.3945L9.73171 18.03L9.73171 17.6605L9.37847 17.5521C8.9573 17.4227 8.59169 17.1665 8.33334 16.8231C8.07514 16.4799 7.93701 16.0671 7.93701 15.6445C7.93701 15.222 8.07514 14.8091 8.33334 14.4659C8.59169 14.1225 8.95729 13.8663 9.37847 13.737L9.73171 13.6286L9.73171 13.259L9.73171 0.894533C9.73171 0.83238 9.75691 0.77013 9.80606 0.722212C9.85564 0.673874 9.92553 0.644533 10.001 0.644533C10.0764 0.644533 10.1463 0.673874 10.1959 0.72221C10.245 0.77013 10.2702 0.83238 10.2702 0.894533L10.2702 13.259L10.2702 13.6286L10.6235 13.737C11.0447 13.8663 11.4103 14.1225 11.6686 14.4659C11.9268 14.8091 12.0649 15.222 12.0649 15.6445C12.0649 16.0671 11.9268 16.4799 11.6686 16.8231C11.4103 17.1665 11.0447 17.4227 10.6235 17.5521ZM8.92666 16.7096L9.2757 16.3516L8.92666 16.7096C9.2137 16.9895 9.60037 17.1445 10.001 17.1445C10.4016 17.1445 10.7883 16.9895 11.0753 16.7096C11.3628 16.4294 11.5267 16.0465 11.5267 15.6445C11.5267 15.2426 11.3628 14.8597 11.0753 14.5794C10.7883 14.2996 10.4016 14.1445 10.001 14.1445C9.60037 14.1445 9.2137 14.2996 8.92666 14.5794C8.63919 14.8597 8.47529 15.2426 8.47529 15.6445C8.47529 16.0465 8.63919 16.4294 8.92666 16.7096Z"
          fill="#141416"
          stroke="#222529"
        />
        <path
          d="M17.7053 4.62859L17.7053 4.25903L17.7053 0.894533C17.7053 0.832378 17.6801 0.770128 17.631 0.72221C17.5814 0.673874 17.5115 0.644533 17.436 0.644533C17.3606 0.644533 17.2907 0.673874 17.2411 0.722212C17.192 0.770128 17.1668 0.832378 17.1668 0.894533L17.1668 4.25903L17.1668 4.62855L16.8135 4.73701C16.3924 4.86633 16.0268 5.12252 15.7684 5.46592L15.3688 5.16533L15.7684 5.46593C15.5102 5.80912 15.3721 6.222 15.3721 6.64453C15.3721 7.06707 15.5102 7.47995 15.7684 7.82314C16.0268 8.16654 16.3924 8.42274 16.8135 8.55205L17.1668 8.66051L17.1668 9.03003L17.1668 21.3945C17.1668 21.4567 17.192 21.5189 17.2411 21.5669C17.2907 21.6152 17.3606 21.6445 17.436 21.6445C17.5115 21.6445 17.5814 21.6152 17.631 21.5669C17.6801 21.5189 17.7053 21.4567 17.7053 21.3945L17.7053 9.03003L17.7053 8.66047L18.0586 8.55204C18.4798 8.42276 18.8455 8.16658 19.1039 7.82317C19.3621 7.47998 19.5002 7.0671 19.5003 6.64455L17.7053 4.62859ZM17.7053 4.62859L18.0586 4.73703M17.7053 4.62859L18.0586 4.73703M18.0586 4.73703C18.4798 4.8663 18.8455 5.12248 19.1039 5.46589C19.3621 5.80908 19.5002 6.22197 19.5003 6.64451L18.0586 4.73703ZM18.9617 6.64453C18.9617 6.24256 18.7978 5.85969 18.5104 5.57942C18.2233 5.29956 17.8366 5.14453 17.436 5.14453C17.0354 5.14453 16.6488 5.29956 16.3617 5.57942C16.0742 5.85969 15.9103 6.24256 15.9103 6.64453C15.9103 7.04651 16.0742 7.42938 16.3617 7.70965C16.6488 7.9895 17.0354 8.14453 17.436 8.14453C17.8366 8.14453 18.2233 7.9895 18.5104 7.70965C18.7978 7.42938 18.9617 7.04651 18.9617 6.64453Z"
          fill="#141416"
          stroke="#222529"
        />
      </svg>
    </span>
  );
}

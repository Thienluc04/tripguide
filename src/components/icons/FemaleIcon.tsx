import { ComponentProps } from "react";

interface FemaleIconProps extends ComponentProps<"svg"> {}

export function FemaleIcon(props: FemaleIconProps) {
  return (
    <span>
      <svg
        fill="currentColor"
        height="20px"
        width="20px"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 64 64"
        enableBackground="new 0 0 64 64"
        xmlSpace="preserve"
        {...props}
      >
        <path
          id="Female_2_"
          d="M54,21.9985008C54,9.8685999,44.1307983,0.0005,32,0.0005
	c-12.1308994,0-21.9999981,9.8681002-21.9999981,21.9980011c0,11.7956009,9.3316994,21.4496994,21,21.9745979v10.2998009h-7
	c-0.5528011,0-1,0.4473-1,1c0,0.5527992,0.4471989,1,1,1h7v6.7266006c0,0.5527,0.4471989,1,0.9999981,1c0.5527,0,1-0.4473,1-1
	v-6.7266006h7c0.5527,0,1-0.4472008,1-1c0-0.5527-0.4473-1-1-1h-7V43.9730988C44.6681976,43.4482002,54,33.7941017,54,21.9985008z
	 M12.0000019,21.9985008C12.0000019,10.9712,20.9716015,2.0005,32,2.0005c11.0282974,0,20,8.9707003,20,19.9980011
	c0,11.0284004-8.9717026,20-20,20C20.9716015,41.9985008,12.0000019,33.0269012,12.0000019,21.9985008z"
        />
      </svg>
    </span>
  );
}

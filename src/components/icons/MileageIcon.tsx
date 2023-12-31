import { ComponentProps } from "react";

interface MileageIconProps extends ComponentProps<"svg"> {}

export function MileageIcon(props: MileageIconProps) {
  return (
    <span>
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M12.816 2.21494C12.8105 2.20908 12.8088 2.2013 12.8031 2.19558C12.7974 2.18986 12.7895 2.18812 12.7836 2.18259C11.3807 0.784858 9.48074 0 7.5 0C5.51926 0 3.6193 0.784858 2.21645 2.18259C2.21055 2.18812 2.20267 2.18981 2.1969 2.19558C2.19114 2.20134 2.18953 2.20907 2.18404 2.21494C1.13873 3.2648 0.427988 4.60065 0.141503 6.05389C-0.144983 7.50714 0.0056334 9.01265 0.574342 10.3804C1.14305 11.7482 2.10436 12.9169 3.33695 13.7391C4.56955 14.5612 6.01817 15 7.5 15C8.98184 15 10.4305 14.5612 11.6631 13.7391C12.8956 12.9169 13.857 11.7482 14.4257 10.3804C14.9944 9.01265 15.145 7.50714 14.8585 6.05389C14.572 4.60065 13.8613 3.2648 12.816 2.21494ZM7.49997 13.4941C6.60167 13.4938 5.71494 13.2916 4.90547 12.9022C4.09599 12.5129 3.38451 11.9466 2.82372 11.2451H5.83517C6.04373 11.4808 6.3 11.6695 6.587 11.7987C6.874 11.928 7.18519 11.9948 7.49997 11.9948C7.81475 11.9948 8.12594 11.928 8.41294 11.7987C8.69993 11.6695 8.9562 11.4808 9.16476 11.2451H12.1763C11.6155 11.9466 10.904 12.5129 10.0945 12.9022C9.28501 13.2916 8.39827 13.4939 7.49997 13.4941ZM6.74997 9.74577C6.74997 9.5975 6.79395 9.45256 6.87636 9.32928C6.95878 9.20599 7.07591 9.1099 7.21295 9.05316C7.35 8.99642 7.5008 8.98158 7.64628 9.0105C7.79177 9.03943 7.92541 9.11083 8.0303 9.21567C8.13519 9.32052 8.20662 9.4541 8.23556 9.59952C8.26449 9.74494 8.24964 9.89568 8.19288 10.0327C8.13611 10.1696 8.03998 10.2867 7.91664 10.3691C7.79331 10.4515 7.6483 10.4954 7.49997 10.4954C7.30112 10.4952 7.11046 10.4162 6.96986 10.2757C6.82925 10.1351 6.75016 9.94454 6.74997 9.74577ZM13.0576 9.74733L13.0499 9.74577H9.74997C9.74854 9.28218 9.60359 8.8304 9.33502 8.45245C9.06644 8.0745 8.68741 7.78891 8.24997 7.63489V5.24772C8.24997 5.0489 8.17095 4.85821 8.0303 4.71762C7.88964 4.57703 7.69888 4.49805 7.49997 4.49805C7.30105 4.49805 7.11029 4.57703 6.96964 4.71762C6.82898 4.85821 6.74997 5.0489 6.74997 5.24772V7.63489C6.31252 7.78891 5.93349 8.0745 5.66492 8.45245C5.39634 8.8304 5.25139 9.28218 5.24997 9.74577H1.95004L1.9423 9.74733C1.74722 9.2662 1.61603 8.76161 1.55206 8.24642H2.24997C2.44888 8.24642 2.63964 8.16744 2.7803 8.02685C2.92095 7.88626 2.99997 7.69557 2.99997 7.49675C2.99997 7.29792 2.92095 7.10724 2.7803 6.96665C2.63964 6.82606 2.44888 6.74707 2.24997 6.74707H1.55206C1.68608 5.68146 2.10563 4.67184 2.76637 3.82492L3.25741 4.31576C3.32705 4.38536 3.40972 4.44058 3.5007 4.47825C3.59169 4.51592 3.68921 4.53531 3.78769 4.53531C3.88617 4.53531 3.98368 4.51592 4.07467 4.47825C4.16565 4.44058 4.24832 4.38536 4.31796 4.31575C4.3876 4.24615 4.44283 4.16351 4.48052 4.07257C4.51821 3.98162 4.53761 3.88415 4.53761 3.78571C4.5376 3.68727 4.51821 3.5898 4.48052 3.49885C4.44283 3.40791 4.38759 3.32527 4.31796 3.25567L3.82696 2.76488C4.67418 2.10465 5.68408 1.68539 6.74997 1.55142V2.24902C6.74997 2.44785 6.82898 2.63853 6.96964 2.77912C7.11029 2.91972 7.30105 2.9987 7.49997 2.9987C7.69888 2.9987 7.88964 2.91972 8.0303 2.77912C8.17095 2.63853 8.24997 2.44785 8.24997 2.24902V1.55142C9.31585 1.68539 10.3258 2.10465 11.173 2.76488L10.682 3.25567C10.5413 3.39624 10.4623 3.5869 10.4623 3.78571C10.4623 3.98451 10.5413 4.17518 10.682 4.31575C10.8226 4.45633 11.0134 4.53531 11.2122 4.53531C11.4111 4.53531 11.6019 4.45633 11.7425 4.31576L12.2336 3.82492C12.8943 4.67184 13.3139 5.68146 13.4479 6.74707H12.75C12.5511 6.74707 12.3603 6.82606 12.2196 6.96665C12.079 7.10724 12 7.29792 12 7.49675C12 7.69557 12.079 7.88626 12.2196 8.02685C12.3603 8.16744 12.5511 8.24642 12.75 8.24642H13.4479C13.3839 8.76161 13.2527 9.2662 13.0576 9.74733Z"
          fill="currentColor"
        />
      </svg>
    </span>
  );
}

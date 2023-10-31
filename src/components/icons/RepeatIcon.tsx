import { ComponentProps } from 'react';

interface RepeatIconProps extends ComponentProps<'span'> {}

export function RepeatIcon(props: RepeatIconProps) {
  return (
    <span {...props}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.00001 12.5C4.86867 12.5 4.73862 12.5258 4.61728 12.5761C4.49594 12.6263 4.38569 12.7 4.29282 12.7928C4.19996 12.8857 4.1263 12.9959 4.07606 13.1173C4.02581 13.2386 3.99997 13.3687 4.00001 13.5V15.2823C2.71105 13.8246 1.99971 11.9458 2.00001 10C1.99982 9.70592 2.01743 9.41209 2.05274 9.12013C2.06893 8.98957 2.05919 8.8571 2.02409 8.73031C1.98899 8.60352 1.92922 8.4849 1.84819 8.38125C1.76717 8.2776 1.66648 8.19096 1.55191 8.1263C1.43734 8.06163 1.31114 8.02021 1.18053 8.0044C1.04992 7.9886 0.917482 7.99873 0.790794 8.0342C0.664107 8.06967 0.545666 8.1298 0.442258 8.21113C0.338849 8.29246 0.252507 8.3934 0.18818 8.50816C0.123852 8.62292 0.0828031 8.74925 0.0673856 8.8799C0.0220889 9.25155 -0.000413066 9.62562 5.73938e-06 10C0.00136446 12.3862 0.858962 14.6926 2.41688 16.5H1.00001C0.734789 16.5 0.480435 16.6054 0.292899 16.7929C0.105362 16.9804 5.73938e-06 17.2348 5.73938e-06 17.5C5.73938e-06 17.7652 0.105362 18.0196 0.292899 18.2071C0.480435 18.3947 0.734789 18.5 1.00001 18.5H5.00001C5.1564 18.498 5.31007 18.4587 5.4482 18.3854C5.58634 18.312 5.70494 18.2067 5.79414 18.0782C5.8058 18.0628 5.82069 18.0514 5.83155 18.0352C5.83821 18.0253 5.83839 18.0135 5.84461 18.0033C5.89226 17.9228 5.92797 17.8358 5.95061 17.745C5.96541 17.694 5.97592 17.6419 5.98204 17.5892C5.98491 17.5583 6.00004 17.5317 6.00004 17.5V13.5C6.00007 13.3687 5.97423 13.2386 5.92399 13.1173C5.87375 12.996 5.80009 12.8857 5.70722 12.7928C5.61435 12.7 5.50409 12.6263 5.38275 12.5761C5.2614 12.5258 5.13134 12.5 5.00001 12.5ZM6.50001 4.00001H4.71754C6.17534 2.71112 8.05413 1.99979 10 2.00001C10.2939 1.99931 10.5876 2.01692 10.8794 2.05275C11.0098 2.06859 11.1421 2.05858 11.2686 2.02331C11.3952 1.98803 11.5136 1.92817 11.617 1.84714C11.7204 1.76612 11.8069 1.66552 11.8714 1.55108C11.936 1.43664 11.9773 1.31062 11.9932 1.18019C12.009 1.04977 11.999 0.917502 11.9637 0.790945C11.9284 0.664387 11.8686 0.546018 11.7876 0.442595C11.7065 0.339172 11.6059 0.25272 11.4915 0.188176C11.3771 0.123633 11.251 0.0822608 11.1206 0.0664227C10.7488 0.0215637 10.3745 -0.000613791 10 1.29178e-05C7.61387 0.00131003 5.30742 0.858844 3.50001 2.4167V1.00001C3.50001 0.734796 3.39465 0.480442 3.20711 0.292906C3.01958 0.10537 2.76522 1.29178e-05 2.50001 1.29178e-05C2.23479 1.29178e-05 1.98044 0.10537 1.7929 0.292906C1.60536 0.480442 1.50001 0.734796 1.50001 1.00001V5.00001C1.50629 5.06611 1.51947 5.13137 1.53932 5.19472L1.53956 5.19594C1.56384 5.319 1.61178 5.43616 1.68073 5.54094L1.69215 5.55784C1.75822 5.65395 1.84104 5.73739 1.93665 5.80418C1.94758 5.81218 1.95301 5.82444 1.96436 5.83207C1.97865 5.84153 1.99482 5.84453 2.00941 5.85319C2.06612 5.88731 2.12621 5.91546 2.18873 5.93719C2.27321 5.96658 2.3613 5.98436 2.45057 5.99004C2.4679 5.99096 2.48249 6.00004 2.50001 6.00004H6.50001C6.76522 6.00004 7.01958 5.89469 7.20711 5.70715C7.39465 5.51961 7.50001 5.26526 7.50001 5.00004C7.50001 4.73483 7.39465 4.48047 7.20711 4.29294C7.01958 4.1054 6.76522 4.00004 6.50001 4.00004V4.00001ZM18.4605 14.8041C18.4362 14.681 18.3882 14.5638 18.3192 14.459L18.3079 14.4422C18.2418 14.3461 18.1589 14.2626 18.0632 14.1958C18.0523 14.1878 18.0469 14.1755 18.0356 14.1679C18.0248 14.1608 18.012 14.1606 18.001 14.1538C17.8742 14.0833 17.7352 14.0374 17.5913 14.0184C17.5597 14.0154 17.5324 14 17.5 14H13.5C13.2348 14 12.9804 14.1053 12.7929 14.2929C12.6054 14.4804 12.5 14.7347 12.5 15C12.5 15.2652 12.6054 15.5195 12.7929 15.7071C12.9804 15.8946 13.2348 16 13.5 16H15.2824C13.8246 17.2889 11.9459 18.0002 10 18C9.70604 18.0003 9.41234 17.9824 9.12061 17.9463C8.8572 17.9143 8.59188 17.9882 8.38301 18.1519C8.17413 18.3155 8.03882 18.5554 8.00684 18.8188C7.97485 19.0822 8.04881 19.3475 8.21245 19.5564C8.37608 19.7653 8.61599 19.9006 8.8794 19.9326C9.25125 19.9774 9.62546 19.9999 10 20C12.3861 19.9987 14.6926 19.1411 16.5 17.5833V19C16.5 19.2652 16.6054 19.5196 16.7929 19.7071C16.9804 19.8947 17.2348 20 17.5 20C17.7652 20 18.0196 19.8947 18.2071 19.7071C18.3946 19.5196 18.5 19.2652 18.5 19V15C18.4937 14.9339 18.4805 14.8687 18.4607 14.8053L18.4605 14.8041ZM19 3.50001C19.2652 3.50001 19.5196 3.39466 19.7071 3.20712C19.8946 3.01958 20 2.76523 20 2.50001C20 2.2348 19.8946 1.98044 19.7071 1.79291C19.5196 1.60537 19.2652 1.50001 19 1.50001H15C14.9349 1.50629 14.8706 1.51926 14.8082 1.53871L14.8015 1.54005C14.6801 1.56435 14.5644 1.61171 14.4608 1.67958L14.4412 1.69282C14.3456 1.7588 14.2625 1.84136 14.1959 1.9366C14.1881 1.9474 14.1759 1.95271 14.1685 1.96388C14.1613 1.97462 14.1611 1.98732 14.1544 1.99824C14.083 2.12584 14.0367 2.26591 14.018 2.4109C14.0151 2.44179 14 2.4684 14 2.50001V6.50001C14 6.76523 14.1054 7.01958 14.2929 7.20712C14.4804 7.39466 14.7348 7.50001 15 7.50001C15.2652 7.50001 15.5196 7.39466 15.7071 7.20712C15.8946 7.01958 16 6.76523 16 6.50001V4.71713C17.2889 6.1751 18.0002 8.05399 18 9.99996C18.0002 10.2941 17.9826 10.5879 17.9473 10.8799C17.9156 11.1431 17.9896 11.4081 18.1531 11.6168C18.3166 11.8255 18.5562 11.9609 18.8193 11.9931C18.8599 11.9978 18.9006 12.0001 18.9414 12C19.1856 11.9996 19.4212 11.91 19.6038 11.7479C19.7864 11.5858 19.9034 11.3625 19.9326 11.1201C19.9779 10.7485 20.0004 10.3744 20 10C19.9986 7.61383 19.141 5.30738 17.583 3.50001H19Z"
          fill="currentColor"
        />
      </svg>
    </span>
  );
}

import { ComponentProps } from "react";

interface YellowEmptyStarProps extends ComponentProps<"svg"> {}

export function YellowEmptyStar(props: YellowEmptyStarProps) {
  return (
    <span>
      <svg
        width="14"
        height="15"
        viewBox="0 0 21 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M10.275 16.4073L10.6221 15.7424L10.275 15.5612L9.92789 15.7424L10.275 16.4073ZM5.51634 18.8916L5.16924 18.2268H5.16924L5.51634 18.8916ZM15.0336 18.8916L15.3807 18.2268H15.3807L15.0336 18.8916ZM16.385 17.9056L15.646 18.0332L16.385 17.9056ZM15.4777 12.6522L14.9561 12.1133L14.6712 12.3891L14.7386 12.7799L15.4777 12.6522ZM19.3224 8.93061L19.8441 9.4695L19.3224 8.93061ZM18.8067 7.33653L18.9138 6.59422L18.8067 7.33653ZM13.488 6.56906L12.8164 6.90285L12.9915 7.25518L13.3809 7.31137L13.488 6.56906ZM11.1106 1.78543L10.439 2.11922V2.11922L11.1106 1.78543ZM9.43934 1.78543L10.111 2.11922V2.11922L9.43934 1.78543ZM7.06195 6.56906L7.16906 7.31137L7.55847 7.25518L7.73358 6.90285L7.06195 6.56906ZM1.74329 7.33653L1.8504 8.07884H1.85041L1.74329 7.33653ZM1.22754 8.93061L0.705909 9.4695H0.705909L1.22754 8.93061ZM5.07226 12.6522L5.81132 12.7799L5.87881 12.3891L5.5939 12.1133L5.07226 12.6522ZM4.16493 17.9056L3.42587 17.778H3.42587L4.16493 17.9056ZM9.92789 15.7424L5.16924 18.2268L5.86344 19.5565L10.6221 17.0721L9.92789 15.7424ZM15.3807 18.2268L10.6221 15.7424L9.92789 17.0721L14.6865 19.5565L15.3807 18.2268ZM15.646 18.0332C15.6718 18.1827 15.5152 18.297 15.3807 18.2268L14.6865 19.5565C15.922 20.2015 17.3613 19.1514 17.1241 17.778L15.646 18.0332ZM14.7386 12.7799L15.646 18.0332L17.1241 17.778L16.2168 12.5246L14.7386 12.7799ZM18.8008 8.39173L14.9561 12.1133L15.9993 13.1911L19.8441 9.4695L18.8008 8.39173ZM18.6996 8.07884C18.8502 8.10058 18.9101 8.28588 18.8008 8.39173L19.8441 9.4695C20.8489 8.4968 20.298 6.79396 18.9138 6.59422L18.6996 8.07884ZM13.3809 7.31137L18.6996 8.07884L18.9138 6.59422L13.5951 5.82675L13.3809 7.31137ZM10.439 2.11922L12.8164 6.90285L14.1597 6.23527L11.7823 1.45164L10.439 2.11922ZM10.111 2.11922C10.1783 1.9837 10.3717 1.9837 10.439 2.11922L11.7823 1.45164C11.1633 0.206223 9.38666 0.206223 8.76771 1.45164L10.111 2.11922ZM7.73358 6.90285L10.111 2.11922L8.76771 1.45164L6.39032 6.23527L7.73358 6.90285ZM1.85041 8.07884L7.16906 7.31137L6.95483 5.82675L1.63618 6.59422L1.85041 8.07884ZM1.74918 8.39173C1.63983 8.28588 1.69978 8.10058 1.8504 8.07884L1.63618 6.59422C0.25197 6.79396 -0.298967 8.4968 0.705909 9.4695L1.74918 8.39173ZM5.5939 12.1133L1.74918 8.39173L0.705909 9.4695L4.55063 13.1911L5.5939 12.1133ZM4.90399 18.0332L5.81132 12.7799L4.3332 12.5246L3.42587 17.778L4.90399 18.0332ZM5.16924 18.2268C5.0348 18.297 4.87818 18.1827 4.90399 18.0332L3.42587 17.778C3.18867 19.1514 4.62795 20.2015 5.86344 19.5565L5.16924 18.2268Z"
          fill="currentColor"
        />
      </svg>
    </span>
  );
}

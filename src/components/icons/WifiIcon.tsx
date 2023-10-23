import { ComponentProps } from 'react';

interface WifiIconProps extends ComponentProps<'span'> {}

export function WifiIcon(props: WifiIconProps) {
  return (
    <span {...props}>
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.682491 10.0192C0.24547 10.4568 0 11.05 0 11.6684C0 12.2868 0.24547 12.8799 0.682491 13.3175C1.12006 13.7545 1.7132 14 2.33162 14C2.95005 14 3.54319 13.7545 3.98075 13.3175C4.39297 12.8751 4.61739 12.29 4.60672 11.6854C4.59606 11.0808 4.35114 10.504 3.92357 10.0764C3.496 9.64886 2.91916 9.40394 2.31458 9.39328C1.71 9.38261 1.12488 9.60703 0.682491 10.0192ZM2.88393 12.2207C2.73745 12.3672 2.53878 12.4495 2.33162 12.4495C2.12447 12.4495 1.9258 12.3672 1.77932 12.2207C1.63284 12.0742 1.55055 11.8755 1.55055 11.6684C1.55055 11.4612 1.63284 11.2626 1.77932 11.1161C1.85163 11.0432 1.93767 10.9853 2.03246 10.9458C2.12726 10.9063 2.22893 10.886 2.33162 10.886C2.43431 10.886 2.53599 10.9063 2.63078 10.9458C2.72557 10.9853 2.81161 11.0432 2.88393 11.1161C2.95684 11.1884 3.01471 11.2744 3.0542 11.3692C3.09369 11.464 3.11402 11.5657 3.11402 11.6684C3.11402 11.7711 3.09369 11.8727 3.0542 11.9675C3.01471 12.0623 2.95684 12.1484 2.88393 12.2207ZM2.33162 6.22313C2.12531 6.22313 1.92745 6.30509 1.78157 6.45097C1.63569 6.59686 1.55373 6.79472 1.55373 7.00103C1.55373 7.20734 1.63569 7.4052 1.78157 7.55108C1.92745 7.69696 2.12531 7.77892 2.33162 7.77892C3.36317 7.77892 4.35247 8.1887 5.08189 8.91811C5.8113 9.64753 6.22108 10.6368 6.22108 11.6684C6.22108 11.8747 6.30304 12.0725 6.44892 12.2184C6.5948 12.3643 6.79266 12.4463 6.99897 12.4463C7.20528 12.4463 7.40314 12.3643 7.54903 12.2184C7.69491 12.0725 7.77687 11.8747 7.77687 11.6684C7.77687 10.2242 7.20317 8.83919 6.18199 7.81801C5.16081 6.79683 3.77579 6.22313 2.33162 6.22313ZM2.33162 3.11157C2.12531 3.11157 1.92745 3.19352 1.78157 3.33941C1.63569 3.48529 1.55373 3.68315 1.55373 3.88946C1.55373 4.09577 1.63569 4.29363 1.78157 4.43951C1.92745 4.58539 2.12531 4.66735 2.33162 4.66735C4.18841 4.66735 5.96915 5.40496 7.2821 6.7179C8.59504 8.03085 9.33265 9.81159 9.33265 11.6684C9.33265 11.8747 9.41461 12.0725 9.56049 12.2184C9.70637 12.3643 9.90423 12.4463 10.1105 12.4463C10.3169 12.4463 10.5147 12.3643 10.6606 12.2184C10.8065 12.0725 10.8884 11.8747 10.8884 11.6684C10.8824 9.40003 9.98241 7.22551 8.38362 5.61638C6.77449 4.01759 4.59997 3.1176 2.33162 3.11157ZM10.5851 3.41495C8.39046 1.23493 5.42495 0.00792223 2.33162 0C2.12531 0 1.92745 0.0819564 1.78157 0.227839C1.63569 0.373722 1.55373 0.571582 1.55373 0.777892C1.55373 0.984202 1.63569 1.18206 1.78157 1.32794C1.92745 1.47383 2.12531 1.55578 2.33162 1.55578C5.01365 1.55578 7.58583 2.62121 9.48231 4.51769C11.3788 6.41417 12.4442 8.98635 12.4442 11.6684C12.4442 11.8747 12.5262 12.0725 12.6721 12.2184C12.8179 12.3643 13.0158 12.4463 13.2221 12.4463C13.4284 12.4463 13.6263 12.3643 13.7722 12.2184C13.918 12.0725 14 11.8747 14 11.6684C13.9921 8.57505 12.7651 5.60955 10.5851 3.41495Z"
          fill="currentColor"
        />
      </svg>
    </span>
  );
}

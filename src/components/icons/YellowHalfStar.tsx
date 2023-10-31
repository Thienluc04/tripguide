import { ComponentProps } from 'react';

interface Props extends ComponentProps<'span'> {}

export function YellowHalfStar(props: Props) {
  return (
    <span {...props}>
      <svg
        width={14}
        height={15}
        viewBox="0 0 14 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M140 18.4298L140.233 17.9871L140 17.8652L139.768 17.9871L140 18.4298ZM134.392 21.3721L134.159 20.9293L134.392 21.3721ZM145.609 21.3721L145.842 20.9293L145.609 21.3721ZM147.202 20.2043L147.695 20.1196L147.202 20.2043ZM146.133 13.9828L145.784 13.6244L145.595 13.808L145.64 14.0675L146.133 13.9828ZM150.664 9.5753L150.316 9.21687V9.21687L150.664 9.5753ZM150.056 7.68743L149.985 8.18226L150.056 7.68743ZM143.788 6.77852L143.339 7.0002L143.456 7.23565L143.716 7.27335L143.788 6.77852ZM140.985 1.11329L140.537 1.33497V1.33497L140.985 1.11329ZM139.016 1.11329L139.464 1.33497V1.33497L139.016 1.11329ZM136.213 6.77852L136.285 7.27335L136.545 7.23565L136.662 7.0002L136.213 6.77852ZM129.944 7.68743L130.016 8.18226H130.016L129.944 7.68743ZM129.337 9.5753L129.685 9.21687L129.685 9.21687L129.337 9.5753ZM133.868 13.9828L134.361 14.0675L134.406 13.808L134.217 13.6244L133.868 13.9828ZM132.799 20.2043L132.306 20.1196L132.799 20.2043ZM139.768 17.9871L134.159 20.9293L134.624 21.8149L140.233 18.8726L139.768 17.9871ZM145.842 20.9293L140.233 17.9871L139.768 18.8726L145.377 21.8149L145.842 20.9293ZM146.709 20.289C146.795 20.7879 146.277 21.1578 145.842 20.9293L145.377 21.8149C146.556 22.4334 147.919 21.4243 147.695 20.1196L146.709 20.289ZM145.64 14.0675L146.709 20.289L147.695 20.1196L146.626 13.8981L145.64 14.0675ZM150.316 9.21687L145.784 13.6244L146.481 14.3412L151.013 9.93372L150.316 9.21687ZM149.985 8.18226C150.475 8.25341 150.678 8.86501 150.316 9.21687L151.013 9.93373C151.965 9.00826 151.447 7.38375 150.128 7.19261L149.985 8.18226ZM143.716 7.27335L149.985 8.18226L150.128 7.19261L143.859 6.28369L143.716 7.27335ZM140.537 1.33497L143.339 7.0002L144.236 6.55684L141.434 0.891616L140.537 1.33497ZM139.464 1.33497C139.685 0.888344 140.316 0.888344 140.537 1.33497L141.434 0.891616C140.846 -0.297205 139.155 -0.297205 138.567 0.891616L139.464 1.33497ZM136.662 7.0002L139.464 1.33497L138.567 0.891616L135.765 6.55684L136.662 7.0002ZM130.016 8.18226L136.285 7.27335L136.142 6.28369L129.873 7.19261L130.016 8.18226ZM129.685 9.21687C129.323 8.86501 129.526 8.25341 130.016 8.18226L129.873 7.19261C128.554 7.38375 128.036 9.00826 128.988 9.93373L129.685 9.21687ZM134.217 13.6244L129.685 9.21687L128.988 9.93373L133.52 14.3412L134.217 13.6244ZM133.292 20.289L134.361 14.0675L133.375 13.8981L132.306 20.1196L133.292 20.289ZM134.159 20.9293C133.724 21.1578 133.206 20.7879 133.292 20.289L132.306 20.1196C132.082 21.4243 133.445 22.4334 134.624 21.8149L134.159 20.9293Z"
          fill="#FFC542"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M140.001 0.5C139.61 0.5 139.218 0.704431 139.016 1.11329L136.214 6.77852L129.945 7.68743C129.04 7.81858 128.68 8.93664 129.337 9.5753L133.869 13.9828L132.799 20.2043C132.644 21.1061 133.585 21.7956 134.392 21.3721L140.001 18.4298V0.5Z"
          fill="#FFC542"
        />
      </svg>
    </span>
  );
}

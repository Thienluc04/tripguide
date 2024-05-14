import { PlaneHorizontalIcon } from "../icons";

interface FlightTimeProps {}

export function FlightTime(props: FlightTimeProps) {
  return (
    <div>
      <div className="flex items-end gap-2">
        <span>
          <svg
            height="2"
            viewBox="0 0 40 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.25"
              y="0.677734"
              width="40.5"
              height="0.5"
              stroke="#B1B5C4"
              strokeWidth="0.5"
              stroke-dasharray="3 3"
            />
          </svg>
        </span>
        <span className="relative">
          <svg
            width="62"
            height="36"
            viewBox="0 0 62 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.32984 34.898C0.711309 34.9704 0.149093 34.5276 0.0992895 33.9069C-0.221933 29.9032 0.237724 25.8714 1.45665 22.0368C2.78954 17.8436 4.99979 13.9821 7.94045 10.7092C10.8811 7.43629 14.4848 4.82685 18.5119 3.05437C22.5391 1.28189 26.8974 0.386988 31.2971 0.429158C35.6969 0.471329 40.0372 1.4496 44.0296 3.29895C48.0221 5.14829 51.5751 7.82633 54.4524 11.155C57.3298 14.4837 59.4656 18.3868 60.7179 22.6048C61.8631 26.4621 62.2454 30.5019 61.8475 34.4987C61.7858 35.1184 61.2152 35.5503 60.5982 35.4661C59.9812 35.3819 59.5515 34.8136 59.6114 34.1937C59.9672 30.5143 59.6101 26.7971 58.556 23.2466C57.3948 19.3355 55.4144 15.7163 52.7463 12.6298C50.0783 9.54327 46.7837 7.06005 43.0818 5.34525C39.3798 3.63044 35.3552 2.72333 31.2755 2.68423C27.1958 2.64512 23.1546 3.47492 19.4204 5.11846C15.6862 6.76199 12.3447 9.18161 9.61797 12.2164C6.89124 15.2513 4.84178 18.8318 3.60585 22.7199C2.4839 26.2495 2.05568 29.9592 2.3408 33.6448C2.38883 34.2657 1.94837 34.8257 1.32984 34.898Z"
              fill="#FFAF4E"
            />
          </svg>
          <PlaneHorizontalIcon className="absolute bottom-0 left-2/4 -translate-x-2/4 translate-y-2/4 text-blueFE" />
          <span className="absolute left-2/4 top-[14px] w-10 -translate-x-2/4 text-[10px] font-medium text-gray90">
            5h 20m
          </span>
        </span>
        <span>
          <svg
            height="2"
            viewBox="0 0 40 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.25"
              y="0.677734"
              width="40.5"
              height="0.5"
              stroke="#B1B5C4"
              strokeWidth="0.5"
              stroke-dasharray="3 3"
            />
          </svg>
        </span>
      </div>
      <p className="mt-2 text-center text-sm font-medium text-grayC3">
        nonstop
      </p>
    </div>
  );
}

import * as React from "react";

export interface DownarrowProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
}

const Downarrow: React.FC<DownarrowProps> = ({
  width = 237.66,
  height = 131.96,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 237.66 131.96"
    width={width}
    height={height}
    {...props}
  >
    <path
      d="M13.43 0c4.69.09 8 2.67 11.15 5.83 29.86 29.93 59.77 59.8 89.67 89.69q4.6 4.6 9.36-.15c30.02-30 60.03-60.01 90.05-90.01 6.48-6.47 14.21-7.13 19.87-1.7 5.83 5.6 5.47 13.72-1.07 20.26a99553.26 99553.26 0 0 1-102.83 102.67c-7.25 7.22-14.38 7.16-21.73-.16C73.61 92.22 39.34 57.99 5.09 23.75 0 18.68-1.22 13.38 1.19 7.95 3.39 2.99 8.12-.08 13.43 0Z"
      style={{
        fill: "#f8f9fa",
        strokeWidth: 0,
      }}
    />
  </svg>
);

export default Downarrow;

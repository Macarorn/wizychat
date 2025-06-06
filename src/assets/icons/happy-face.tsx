import * as React from "react";

const Happyface = ({
  width = 90.36,
  height = 90.33,
  ...props
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 90.36 90.33"
    width={width}
    height={height}
    {...props}
  >
    <path
      d="M44.99 0C70.4-.04 90.32 19.81 90.36 45.23c.04 25.05-19.9 45.04-45 45.1C19.96 90.39-.05 70.43 0 45.1.05 19.95 19.91.04 44.99 0Z"
      style={{
        strokeWidth: 0,
        fill: "#6f6f6f",
      }}
    />
    <path
      d="M45.49 4.3c22.45.04 40.72 18.63 40.57 41.3-.14 22.29-18.56 40.47-40.94 40.42-22.43-.05-40.81-18.3-40.82-40.53C4.28 22.53 22.55 4.26 45.49 4.3Z"
      style={{
        fill: "#fefefe",
        strokeWidth: 0,
      }}
    />
    <path
      d="M45.09 75c-8.78-.35-16.3-3.24-21.94-10.13-1.1-1.34-2.77-3.03-.74-4.73 2.2-1.84 3.12.45 4.24 1.78 9.38 11.1 27.36 11.2 36.9.24 1.1-1.26 2-3.78 4.21-2.13 2.37 1.77.4 3.73-.76 5.11-5.72 6.78-13.28 9.62-21.91 9.86Z"
      style={{
        fill: "#727272",
        strokeWidth: 0,
      }}
    />
    <path
      d="M19.24 33.33c.3-3.68 2.25-5.99 5.98-5.97 3.47.02 5.67 2.21 5.74 5.66.08 3.72-2.18 5.99-5.89 6.01-3.5.01-5.34-2.25-5.83-5.69Z"
      style={{
        fill: "#757575",
        strokeWidth: 0,
      }}
    />
    <path
      d="M59.3 33.21c.42-3.61 2.36-5.97 6.09-5.86 3.39.1 5.64 2.18 5.63 5.74-.02 3.75-2.22 5.97-5.96 5.9-3.46-.07-5.36-2.26-5.75-5.77Z"
      style={{
        fill: "#747474",
        strokeWidth: 0,
      }}
    />
  </svg>
);

export default Happyface;

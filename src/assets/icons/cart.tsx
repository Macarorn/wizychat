import * as React from "react";

export interface CartProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
}

const Cart: React.FC<CartProps> = ({
  width = 126.06,
  height = 126.52,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 126.06 126.52"
    width={width}
    height={height}
    {...props}
  >
    <defs>
      <style>{".cls-1{fill:#fbfcfd;stroke-width:0}"}</style>
    </defs>
    <path
      d="M71.55 98.17c-11.98 0-23.96.11-35.94-.05-7.71-.1-13.54-4.8-14.95-11.55-1.35-6.46 1.67-12.98 7.43-16.05 2.57-1.37 5.35-1.9 8.2-1.8 3.03.1 3.74-1.24 3.18-3.97-3.65-17.75-7.29-35.5-10.83-53.26-.55-2.77-2.19-3.38-4.62-3.36-5.99.04-11.98 0-17.97 0C3.01 8.11-.07 7.66 0 3.86.06.33 3.05.02 5.87.03c6.32.01 12.65-.09 18.97.03C31.77.2 35.1 3.05 36.51 9.94c3.68 17.91 7.39 35.82 10.86 53.77.7 3.62 2.13 5.06 5.88 5.03 16.3-.14 32.61-.15 48.92 0 3.72.04 5.29-1.41 6.12-4.9 2.85-11.96 5.99-23.86 8.94-35.8 1.37-5.54.6-6.41-5.2-6.31-17.8.31-35.6.63-53.4.94-1 .02-2 .06-2.99.02-2.49-.12-4.18-1.21-4.22-3.9-.03-2.42 1.53-3.87 3.71-3.92 20.62-.43 41.24-1.02 61.86-.9 6.28.04 10.23 6.42 8.75 12.64-3.34 14.07-6.87 28.09-10.53 42.08-1.47 5.62-5.38 8.05-12.2 8.06-21.13.05-42.26.02-63.39.04-1.83 0-3.68-.02-5.47.25-3.36.51-5.44 2.49-5.64 5.96-.22 3.72 1.81 6 5.29 6.81 1.75.41 3.63.32 5.46.32 21.8.02 43.59.01 65.39.01 1.33 0 2.66.02 3.99 0 2.61-.02 4.77.73 4.85 3.75.08 3.27-2.22 4.19-5 4.23-3.83.06-7.65.03-11.48.03H71.55Z"
      style={{
        fill: "#f8fafc",
        strokeWidth: 0,
      }}
    />
    <path
      d="M83.27 113.01c-.01-7.56 6.13-13.69 13.63-13.59 7.22.09 13.32 6.17 13.45 13.4.14 7.52-5.93 13.67-13.5 13.7-7.74.03-13.56-5.76-13.57-13.5ZM53.12 99.43c7.47.07 13.51 6.32 13.4 13.86-.12 7.62-6.17 13.39-13.89 13.22-7.45-.16-13.16-6-13.16-13.45 0-7.49 6.21-13.69 13.64-13.63Z"
      className="cls-1"
    />
  </svg>
);

export default Cart;

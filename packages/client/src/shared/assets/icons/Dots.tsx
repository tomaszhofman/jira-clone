import * as React from 'react';

function SvgDots(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      {...props}
    >
      <g fill="currentColor" fillRule="evenodd">
        <circle cx={5} cy={12} r={2} />
        <circle cx={12} cy={12} r={2} />
        <circle cx={19} cy={12} r={2} />
      </g>
    </svg>
  );
}

export default SvgDots;

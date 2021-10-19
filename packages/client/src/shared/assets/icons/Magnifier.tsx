import * as React from 'react';

function SvgMagnifier(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      className="magnifier_svg__css-9uy14h magnifier_svg__e5qbe5m0"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 12a5 5 0 113.957-1.943l2.628 2.673a.667.667 0 01-.951.935l-2.625-2.671A4.978 4.978 0 017 12zm3.667-5a3.667 3.667 0 11-7.334 0 3.667 3.667 0 017.334 0z"
        fill="currentColor"
      />
      <mask
        id="magnifier_svg__a"
        maskUnits="userSpaceOnUse"
        x={2}
        y={2}
        width={12}
        height={12}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7 12a5 5 0 113.957-1.943l2.628 2.673a.667.667 0 01-.951.935l-2.625-2.671A4.978 4.978 0 017 12zm3.667-5a3.667 3.667 0 11-7.334 0 3.667 3.667 0 017.334 0z"
          fill="currentColor"
        />
      </mask>
      <g mask="url(#magnifier_svg__a)">
        <path clipRule="evenodd" d="M0 16h16V0H0v16z" />
      </g>
    </svg>
  );
}

export default SvgMagnifier;

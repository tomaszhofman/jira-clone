import * as React from 'react';

function SvgShortcut(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      {...props}
    >
      <g fill="currentColor" fillRule="evenodd">
        <path
          d="M16.002 3H4.995A1.995 1.995 0 003 4.995v14.01C3 20.107 3.893 21 4.995 21h14.01A1.995 1.995 0 0021 19.005V7.998 11h-2v8H5V5h8V3h3.002z"
          fillRule="nonzero"
        />
        <path d="M19 5V3.99A1 1 0 0018 3c-.556 0-1 .444-1 .99V5h-1a1 1 0 000 2h1v1.01A1 1 0 0018 9c.556 0 1-.444 1-.99V7h1a1 1 0 000-2h-1z" />
      </g>
    </svg>
  );
}

export default SvgShortcut;

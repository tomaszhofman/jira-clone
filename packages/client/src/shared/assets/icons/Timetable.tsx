import * as React from 'react';

function SvgTimetable(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      {...props}
    >
      <path
        d="M6 2h10a3 3 0 010 6H6a3 3 0 110-6zm0 2a1 1 0 100 2h10a1 1 0 000-2H6zm4 5h8a3 3 0 010 6h-8a3 3 0 010-6zm0 2a1 1 0 000 2h8a1 1 0 000-2h-8zm-4 5h6a3 3 0 010 6H6a3 3 0 010-6zm0 2a1 1 0 000 2h6a1 1 0 000-2H6z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgTimetable;

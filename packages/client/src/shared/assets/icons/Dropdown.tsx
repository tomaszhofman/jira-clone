import * as React from 'react';

interface Props {
  props?: React.SVGProps<SVGSVGElement>;
  width?: number;
  height?: number;
}

const SvgDropdown: React.FC<Props> = ({
  width = 24,
  height = 24,
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      {...props}
    >
      <path
        d="M8.292 10.293a1.009 1.009 0 000 1.419l2.939 2.965c.218.215.5.322.779.322s.556-.107.769-.322l2.93-2.955a1.01 1.01 0 000-1.419.987.987 0 00-1.406 0l-2.298 2.317-2.307-2.327a.99.99 0 00-1.406 0z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default SvgDropdown;
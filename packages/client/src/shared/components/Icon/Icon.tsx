import React, { SVGProps } from 'react';

interface Props {
  type: string;
  fill: string;
}

const iconType: Record<
  string,
  React.FunctionComponent<SVGProps<SVGSVGElement>>
> = {};

export const Icon: React.FC<Props> = ({ fill, type }) => {
  const Icon = iconType[type];
  return <Icon fill={fill} />;
};

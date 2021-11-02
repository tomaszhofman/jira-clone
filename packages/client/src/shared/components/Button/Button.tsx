/* eslint-disable react/prop-types */
import React, { Children } from 'react';
import SvgArrowRight from 'src/shared/assets/icons/ArrowRight';
import SvgDots from 'src/shared/assets/icons/Dots';
import styled, { css } from 'styled-components';

type Variants = 'primary' | 'gray';
type StylesOptions = {
  backgroundColor: string;
  color: string;
  active?: string;
  hover?: string;
};
type VariantsOptions = Record<Variants, StylesOptions>;

type Props = {
  children?: React.ReactChildren;
  onClick?: () => void;
  variant: Variants;
  icon?: React.SVGProps<SVGSVGElement>;
};

const variantOptions: VariantsOptions = {
  primary: {
    backgroundColor: 'rgb(0, 82, 204)',
    color: 'white',
  },
  gray: {
    backgroundColor: 'rgba(9, 30, 66, 0.04)',
    color: 'rgb(66, 82, 110)',
    hover: 'rgba(9, 30, 66, 0.08)',
  },
};

const ButtonStyles = styled.button<{ icon?: boolean; variant?: Variants }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ icon }) => (icon ? '0' : '0.6rem 1.2rem')};
  border: none;
  border-radius: 3px;
  font-size: 1.4rem;
  font-weight: 500;
  cursor: pointer;
  width: ${({ icon }) => (icon ? '3.2rem' : null)};
  height: ${({ icon }) => (icon ? '3.2rem' : null)};

  svg {
    fill: white;
  }

  ${({ variant }) =>
    variant &&
    variantOptions[variant] &&
    css`
      background-color: ${variantOptions[variant].backgroundColor};
      color: ${variantOptions[variant].color};

      :hover {
        background-color: ${variantOptions[variant].hover};
      }
    `}
`;

const Button = React.forwardRef<HTMLButtonElement, Props>(
  ({ icon, variant, children, ...props }, ref) => {
    return (
      <ButtonStyles icon={Boolean(icon)} variant={variant} ref={ref} {...props}>
        {!icon ? children : icon}
      </ButtonStyles>
    );
  }
);

export { Button };

import React from 'react';
import SvgMagnifier from 'src/shared/assets/icons/Magnifier';
import styled, { css } from 'styled-components';

interface Props {
  placeholder?: string;
  isResizible?: boolean;
}

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const StyledIcon = styled(SvgMagnifier)`
  position: absolute;
  pointer-events: none;

  ${({ isresizible }: { isresizible?: string }) =>
    isresizible
      ? css`
          top: 50%;
          right: 2%;
          transform: translate(-50%, -50%);
        `
      : css`
          top: 8px;
          left: 8px;
        `}
`;

const StyledInput = styled.input<Props>`
  width: ${({ isResizible }) => (isResizible ? '12rem' : '20rem')};
  height: ${({ isResizible }) => (isResizible ? '4rem' : '3.2rem')};
  padding: ${({ isResizible }) =>
    isResizible ? '0 0 0 0.8rem' : '0.8rem 0 0.8rem 3.4rem'};
  border: 2px solid #dfe1e6;
  border-radius: ${({ isResizible }) => (isResizible ? '3px' : '5px')};
  font-size: 1.4rem;
  font-weight: 500;
  color: #6b778c;
  transition: width ease-in 0.1s;

  ::placeholder {
    font-size: 1.4rem;
    font-weight: 500;
    color: #6b778c;
  }
  ${({ isResizible }) =>
    isResizible &&
    css`
      ::placeholder {
        color: transparent;
      }

      :focus {
        width: 18rem;
        ::placeholder {
          color: #6b778c;
          font-size: 1.4rem;
        }
      }
    `}
`;

export const Input: React.FC<Props> = ({ isResizible, ...props }) => {
  return (
    <Wrapper>
      <span>
        <StyledIcon isresizible={isResizible?.toString()} />
      </span>
      <StyledInput isResizible={isResizible} {...props} />
    </Wrapper>
  );
};

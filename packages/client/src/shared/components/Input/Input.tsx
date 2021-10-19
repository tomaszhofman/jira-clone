import React from 'react';
import SvgMagnifier from 'src/shared/assets/icons/Magnifier';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
`;

const StyledIcon = styled(SvgMagnifier)`
  position: absolute;
  top: 8px;
  left: 8px;
  pointer-events: none;
`;

const StyledInput = styled.input`
  width: 20rem;
  height: 3.2rem;
  padding: 0.8rem 0 0.8rem 3.4rem;
  border: 2px solid #dfe1e6;
  border-radius: 5px;
  font-size: 1.4rem;
  font-weight: 500;
  color: #6b778c;

  ::placeholder {
    font-size: 1.4rem;
    font-weight: 500;
    color: #6b778c;
  }
`;

interface Props {
  placeholder?: string;
}

export const Input: React.FC<Props> = ({ ...props }) => {
  return (
    <Wrapper>
      <StyledIcon />
      <StyledInput {...props} />
    </Wrapper>
  );
};

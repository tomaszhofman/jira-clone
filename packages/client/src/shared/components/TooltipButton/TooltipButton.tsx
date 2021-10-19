import React, { FC } from 'react';
import styled from 'styled-components';
import Tippy from '@tippyjs/react';

interface Props {
  label?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  photo?: string;
}

const TooltipBox = styled.div`
  background-color: #172b4d;

  padding: 0.2rem 0.6rem;
  max-width: 24rem;
  border-radius: 3px;
`;

const ProfileImg = styled.span`
  background-image: ${({ photoURL }: { photoURL: string }) =>
    photoURL ? `url(${photoURL})` : null};
  width: 2.4rem;
  height: 2.4rem;
  display: block;
  background-size: contain;
  background-repeat: no-repeat;
`;

const Button = styled.button`
  border: none;
  background-color: transparent;
  border-radius: 50%;
  padding: 0.4rem;
  margin: 0 0.2rem;
  height: 3.2rem;
  width: 3.2rem;
  color: #344563;

  &:hover,
  &:active {
    background-color: rgba(222, 235, 255, 0.9);
    color: #0052cc;
  }
`;

const TooltipText = styled.p`
  color: #ffff;
  font-size: 1.2rem;
  font-weight: 400;
`;

const StyledSpan = styled.span`
  margin-right: 0.4rem;
`;

const TooltipButton: FC<Props> = ({
  label,
  onClick,
  icon,
  photo,
  ...props
}) => {
  return (
    <Tippy
      duration={0}
      delay={500}
      content={
        <TooltipBox>
          <TooltipText>{label}</TooltipText>
        </TooltipBox>
      }
    >
      <StyledSpan>
        <Button type="button">
          {photo ? <ProfileImg photoURL={photo} /> : icon}
        </Button>
      </StyledSpan>
    </Tippy>
  );
};

export default TooltipButton;

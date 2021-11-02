import React from 'react';
import SvgDots from 'src/shared/assets/icons/Dots';
import { Button } from 'src/shared/components/Button';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 270px;
  cursor: pointer;
  user-select: none;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 2px 0px;
  border-radius: 3px;
  box-shadow: rgb(23 43 77 / 20%) 0px 1px 1px, rgb(23 43 77 / 20%) 0px 0px 1px;
  transition: background-color 140ms ease-in-out 0s, color 140ms ease-in-out 0s;
  background-color: rgb(255, 255, 255);
  color: rgb(23, 43, 77);
  filter: none;
  padding: 12px;
`;

const StyledButton = styled(Button)`
  opacity: 0;

  ${Wrapper}:hover & {
    opacity: 1;
  }
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.8rem;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 28px;
`;

const TicketNumber = styled.p``;

const Heading = styled.span``;

const Label = styled.span``;

const IssueCard = () => {
  return (
    <Wrapper>
      <Header>
        <Heading>test1</Heading>
        <StyledButton icon={<SvgDots />} variant="gray" />
      </Header>
      <Label>Label</Label>
      <Footer>
        <TicketNumber>JC-11</TicketNumber>
      </Footer>
    </Wrapper>
  );
};
export { IssueCard };

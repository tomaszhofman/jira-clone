/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import styled from 'styled-components';
import { Issue, Status } from '../../Filters';
import { IssueCard } from '../../IssueCard';

type Props = {
  status: Status;
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 27rem;
  min-width: 27rem;
  background-color: rgb(244, 245, 247);
  border-radius: 6px;
  flex: 1 1 auto;
  transition: opacity 0.2s ease 0s;

  margin-left: 0.6rem;
  margin-right: 0.6rem;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 48px;
  padding: 0 10rem 0 1rem;
  font-size: 1.2rem;
  text-transform: uppercase;
  width: 100%;

  p {
    font-weight: 500;
  }
`;

const List: React.FC<Props> = ({ status: { title, issuesIds } }) => {
  return (
    <Wrapper>
      <Header>
        <p>{title}</p>
      </Header>
      {issuesIds.map((issue) => (
        <IssueCard key={issue.id} />
      ))}
    </Wrapper>
  );
};

export { List };

import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { client } from 'src/shared/utils/api-client';

import styled from 'styled-components';
import { Filters, Project } from './Filters';
import { Header } from './Header';
import { Lists } from './Lists';

const MainWrapper = styled.div``;

// const ListsWrapper = styled.div`
//   flex: 1;
//   height: 100%;
//   padding: 0 4rem;
// `;

const TopWrapper = styled.div`
  padding: 0 4rem;
  margin: 24px 0 16px 0;
`;

const Board = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <MainWrapper>
      <TopWrapper>
        <Header />
        <Filters isActive={isActive} setIsActive={setIsActive} />
      </TopWrapper>

      <Lists />
    </MainWrapper>
  );
};

export { Board };

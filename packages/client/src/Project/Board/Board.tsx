import React, { useState } from 'react';
import EditableTitle from 'src/shared/components/EditableTitle/EditableTitle';
import styled from 'styled-components';
import { Filters } from './Filters';
import { Header } from './Header';

const Wrapper = styled.div`
  padding: 0 4rem;
`;

const Board = () => {
  return (
    <Wrapper>
      <Header />
      <Filters />
    </Wrapper>
  );
};

export { Board };

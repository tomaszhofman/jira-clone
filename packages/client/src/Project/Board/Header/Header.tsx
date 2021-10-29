import React, { useState } from 'react';
import EditableTitle from 'src/shared/components/EditableTitle/EditableTitle';
import styled from 'styled-components';

const Wrapper = styled.div``;

const HeaderContent = styled.div`
  margin: 2.4rem 0 1.6rem 0;
`;

const Header = () => {
  const [isTitleEditing, setIsTitleEditing] = useState(false);
  const [title, setTitle] = useState('Tablica JS');

  console.log(title);

  return (
    <Wrapper>
      <HeaderContent>Breadcrums/tEST</HeaderContent>

      <EditableTitle
        onClick={() => setIsTitleEditing(!isTitleEditing)}
        isEditing={isTitleEditing}
        title={title}
        setTitle={setTitle}
        setIsTitleEditing={setIsTitleEditing}
      />
    </Wrapper>
  );
};

export { Header };

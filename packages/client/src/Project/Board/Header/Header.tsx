import React, { useState } from 'react';
import { Breadcrumb } from 'src/shared/components/Breadcrumbs';
import EditableTitle from 'src/shared/components/EditableTitle/EditableTitle';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

const Wrapper = styled.div``;

const HeaderContent = styled.div`
  margin: 2.4rem 0 1.6rem 0;
`;

const Header = () => {
  const [isTitleEditing, setIsTitleEditing] = useState(false);
  const [title, setTitle] = useState('Tablica JS');
  const { pathname } = useLocation();

  const pathnames = pathname.split('/').slice(1);

  return (
    <Wrapper>
      <HeaderContent>
        <Breadcrumb items={pathnames} />
      </HeaderContent>

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

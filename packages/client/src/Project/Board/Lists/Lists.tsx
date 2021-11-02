import React from 'react';
import { useQuery } from 'react-query';
import { client } from 'src/shared/utils/api-client';
import styled from 'styled-components';
import { Project } from '../Filters';
import { List } from './List';

const Wrapper = styled.section`
  display: flex;
  overflow: auto;
  padding: 0px 0px 40px 34px;
  position: relative;
`;

const LeftSideBar = styled.div`
  position: sticky;
  background-color: red;
  margin-left: -40px;
  left: 0px;
  width: 40px;
  z-index: 90;
  opacity: 0;
`;

const Lists = () => {
  const { data: projects } = useQuery<Project[]>('project', async () => {
    const data = client<Project[]>('/project');
    return data ?? [];
  });

  const project = projects?.find((i) => i.id === i.id) ?? null;

  return (
    <Wrapper>
      <LeftSideBar />
      {project?.status.map((status) => (
        <List key={status.id} status={status} />
      ))}
    </Wrapper>
  );
};

export { Lists };

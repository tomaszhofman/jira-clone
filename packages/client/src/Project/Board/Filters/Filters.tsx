import React from 'react';
import { useQuery } from 'react-query';
import { Avatar } from 'src/shared/components/Avatar';
import { Input } from 'src/shared/components/Input';
import { client } from 'src/shared/utils/api-client';
import styled from 'styled-components';

type User = {
  id: number;
  email: string;
  name: string;
  avatarUrl: string;
};

type Project = {
  id: number;
  name: string;
  url: string;
  projectAvatarURL: string;
  description: string;
  category: string;
  users: User[];
  issues: any[];
};

const Wrapper = styled.div`
  margin-top: 1.6rem;
  display: flex;
  align-items: center;
`;

const Avatars = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1.2rem;
`;

const Filters: React.FC = () => {
  const { data: projects } = useQuery<Project[]>('project', async () => {
    const issues = await client<Project[]>('/project');
    return issues ?? [];
  });

  const project = projects?.find((i) => i.id === i.id) ?? null;

  return (
    <Wrapper>
      <Input isResizible placeholder="Filtruj zgłoszenie" />
      <Avatars>
        {project?.users.map((user) => (
          <Avatar key={user.id} name={user.name} avatarURL={user.avatarUrl} />
        ))}
      </Avatars>
    </Wrapper>
  );
};

export { Filters };

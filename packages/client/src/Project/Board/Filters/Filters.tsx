import React, { Dispatch, SetStateAction } from 'react';
import { useQuery } from 'react-query';
import { Avatar } from 'src/shared/components/Avatar';
import { MultiSelectButton } from 'src/shared/components/MultiSelectButton';
import { Input } from 'src/shared/components/Input';
import { client } from 'src/shared/utils/api-client';
import styled from 'styled-components';

type Props = {
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
};

type User = {
  id: number;
  email: string;
  name: string;
  avatarUrl: string;
};

export type Issue = {
  description: string;
  estimate: number;
  id: string;
  listPosition: number;
  priority: string;
  reporterId: string;
  title: string;
  type: string;
  users: User[];
};

export type Status = {
  id: number;
  title: string;
  issuesIds: Issue[];
};

export type Project = {
  id: number;
  name: string;
  url: string;
  projectAvatarURL: string;
  description: string;
  category: string;
  users: User[];
  status: Status[];
};

const Wrapper = styled.div`
  margin-top: 1.6rem;
  display: flex;
  align-items: center;
`;

const MultiSelectButtonBox = styled.div`
  margin-left: 0.8rem;
`;

const Avatars = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1.2rem;
`;

const AvatarIsActiveBorder = styled.div<{ isActive?: boolean }>`
  box-shadow: ${({ isActive }) =>
    isActive ? '0 0 0 4px rgb(0, 82, 204)' : null};
  border-radius: 50%;
  margin-left: -4px;
`;

const StyledAvatar = styled(Avatar)`
  box-shadow: 0 0 0 2px #ffff;
`;

const Filters: React.FC<Props> = ({ isActive, setIsActive }) => {
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
          <AvatarIsActiveBorder key={user.id} isActive={isActive}>
            <StyledAvatar
              key={user.id}
              name={user.name}
              avatarURL={user.avatarUrl}
              onClick={() => setIsActive(!isActive)}
            />
          </AvatarIsActiveBorder>
        ))}
      </Avatars>
      <MultiSelectButtonBox>
        <MultiSelectButton items={['ddddd']} />
      </MultiSelectButtonBox>
    </Wrapper>
  );
};

export { Filters };

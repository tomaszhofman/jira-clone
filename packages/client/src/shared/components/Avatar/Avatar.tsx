import React, { memo } from 'react';
import styled from 'styled-components';

type Props = {
  name: string;
  avatarURL: string;
  onClick: () => void;
};

const Image = styled.div<Props>`
  background-image: url(${({ avatarURL }) => avatarURL});
  background-size: cover;
  background-position: center;
  width: 3.2rem;
  height: 3.2rem;
  padding-bottom: 40%;
  border-radius: 50%;
`;

const Initials = styled.div``;

const BaseAvatar: React.FC<Props> = ({ name, avatarURL, ...props }) => {
  //   const customProps = {
  //     name,
  //     avatarURL,
  //     ...props,
  //   };

  return avatarURL ? (
    <Image avatarURL={avatarURL} name={name} {...props} />
  ) : (
    <Initials {...props}>
      <span>{name.charAt(0)}</span>
    </Initials>
  );
};

const Avatar = memo(BaseAvatar);

export { Avatar };

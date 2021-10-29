import React from 'react';
import styled from 'styled-components';

type Props = {
  name: string;
  avatarURL: string;
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

const Avatar: React.FC<Props> = ({ name, avatarURL, ...props }) => {
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

export { Avatar };

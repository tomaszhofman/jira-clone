import React, { Dispatch, SetStateAction, useState } from 'react';
import styled from 'styled-components';

interface Props {
  title: string;
  isEditing: boolean;
  onClick: () => void;
  setTitle: Dispatch<SetStateAction<string>>;
  setIsTitleEditing: Dispatch<SetStateAction<boolean>>;
}

const Wrapper = styled.h1`
  font-size: 2.4rem;
  font-weight: 500;
  max-width: 3.6rem;
  color: '#172b4D';
  cursor: pointer;
`;

const EditableTitle = ({
  title,
  isEditing,
  setTitle,
  setIsTitleEditing,
  ...props
}: Props) => {
  const [value, setValue] = useState('');

  return isEditing ? (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setTitle(value);
        setIsTitleEditing(false);
      }}
    >
      <input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button type="submit">stm</button>
    </form>
  ) : (
    <Wrapper {...props}>{title}</Wrapper>
  );
};

export default EditableTitle;

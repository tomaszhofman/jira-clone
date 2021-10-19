import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import SvgDropdown from 'src/shared/assets/icons/Dropdown';
import Logo from 'src/shared/components/Logo/Logo';
import SvgNavMenu from 'src/shared/assets/icons/NavMenu';

const Wrapper = styled.nav`
  display: flex;
  flex: 1;
  align-items: center;
`;

const StyledMenuIcon = styled(SvgNavMenu)`
  margin-right: 0.7rem;
`;

const List = styled.ul`
  margin-left: 2.4rem;
  list-style: none;
  display: flex;
  align-items: center;
`;

const LinkText = styled.span`
  font-size: 1.4rem;
  color: hsla(218, 31%, 30%, 1);
  font-weight: 500;
  font-family: inherit;
  margin: 0 0.2rem;
`;

const IconBox = styled.span`
  display: flex;
  align-self: center;
  line-height: 0;
  margin: 0 0.2rem;

  span {
    align-self: center;
    margin-left: -8px;
    margin-right: -8px;
  }
`;

const StyledIcon = styled(SvgDropdown)`
  opacity: 0.51;
  fill: hsla(218, 31%, 30%, 1);
`;

const Link = styled(NavLink)<{ as?: React.ElementType; to?: any }>`
  display: flex;
  align-items: center;
  text-decoration: none;
  border: none;
  background-color: transparent;
  padding: 0.4rem 0.8rem;
  border-radius: 3px;
  font-family: inherit;
  cursor: pointer;
  margin-right: 0.8rem;

  &:hover,
  &:active {
    background-color: rgba(222, 235, 255, 0.9);
    box-shadow: 0 0 0 2px transparent;

    ${LinkText} {
      color: #0052cc;
    }

    ${StyledIcon} {
      path {
        fill: #0052cc;
      }
    }
  }
`;

export const Navigation = () => {
  return (
    <Wrapper>
      <StyledMenuIcon />
      <Logo />
      <List>
        <li>
          <Link to="/" as="button">
            <LinkText>Twoja praca</LinkText>
            <IconBox>
              <span>
                <StyledIcon />
              </span>
            </IconBox>
          </Link>
        </li>
        <li>
          <Link to="/" as="button">
            <LinkText>Projekty</LinkText>
            <IconBox>
              <span>
                <StyledIcon />
              </span>
            </IconBox>
          </Link>
        </li>
        <li>
          <Link to="/" as="button">
            <LinkText>Filtry</LinkText>
            <IconBox>
              <span>
                <StyledIcon />
              </span>
            </IconBox>
          </Link>
        </li>
        <li>
          <Link to="/" as="button">
            <LinkText>Pulpity</LinkText>
            <IconBox>
              <span>
                <StyledIcon />
              </span>
            </IconBox>
          </Link>
        </li>
      </List>
    </Wrapper>
  );
};

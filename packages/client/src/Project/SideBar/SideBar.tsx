import React, { useMemo } from 'react';
import SvgArrowRight from 'src/shared/assets/icons/ArrowRight';
import SvgNotification from 'src/shared/assets/icons/Notification';
import TooltipButton from 'src/shared/components/TooltipButton/TooltipButton';
import { Link, SIDEBAR_LINKS } from 'src/shared/constants/sideBarLinks';

import useResize from 'src/shared/hooks/useResize';
import styled, { css } from 'styled-components';

const Wrapper = styled.aside<{ width: number }>`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: var(--topNavigationHeight);
  /* left: var(--leftSidebarWidth, 0px); */
  width: ${({ width }) => `${width}px`};
  bottom: 0px;
  background-color: #fafbfc;
`;

const ResizableArea = styled.div`
  left: 100%;
  top: 0;
  bottom: 0;
  position: absolute;
  outline: none;
  height: 100%;
  width: 2.4rem;
  background-color: transparent;
  cursor: ew-resize;
`;

const ResizableAreaLine = styled.div`
  background: linear-gradient(
    to left,
    rgba(9, 30, 66, 0.13) 0%,
    rgba(9, 30, 66, 0.13) 25%,
    rgba(9, 30, 66, 0.08) 25.01%,
    rgba(9, 30, 66, 0) 100%
  );

  bottom: 0;
  top: 0;
  opacity: 1;
  position: absolute;
  width: 3px;
  height: 100%;

  &:hover {
    background-color: rgb(38, 132, 255);
  }
`;

const ProjectNavigation = styled.nav`
  flex: 1;
`;

const ProjectNavHeader = styled.header`
  padding: 2.4rem 0.8rem 0.8rem 0.8rem;
  width: 100%;
`;

const ProjectInfo = styled.div`
  display: flex;
  padding: 0.8rem 1rem;
`;

const ProjectTexts = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-left: 1.6rem;
`;

const ProjectName = styled.h2`
  letter-spacing: -0.003em;
  font-weight: 600;
  color: #42526e;
  font-size: 1.4rem;
`;

const ProjectNavItems = styled.div`
  margin-left: 0.8rem;
  margin-right: 0.8rem;
  margin-top: 0;
`;

const ProjectCategory = styled.p`
  margin-top: 0.3rem;
  font-size: 1.2rem;
  color: #6b778c;
`;

const LinkItem = styled.div<{ isImplemented: string }>`
  display: flex;
  align-items: center;
  position: relative;
  display: flex;
  padding: 0.8rem 1.2rem;
  border-radius: 3px;
  font-size: 14px;
  color: #42526e;
  font-weight: 400;
  cursor: pointer;
  border-radius: 3px;

  ${({ isImplemented }) =>
    isImplemented
      ? css`
          &:hover {
            background-color: #ebecf0;
          }
        `
      : css`
          cursor: not-allowed;
        `}
`;

const LinkText = styled.h2`
  padding-top: 2px;
  font-size: 1.4rem;
  margin-left: 1.6rem;
  font-weight: inherit;
`;

const NotImplemented = styled.div`
  opacity: 0;
  position: absolute;
  background-color: #42526e;
  width: 14rem;
  color: white;
  top: 10px;
  left: 50px;
  padding: 5px 0 5px 8px;
  font-size: 1.2rem;
  font-weight: 500;
  border-radius: 3px;

  ${LinkItem}:hover & {
    opacity: 1;
  }
`;

const Footer = styled.div`
  padding: 0.8rem 0.8rem 1.4rem 0.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.2rem;
  text-align: center;
`;

const FooterText = styled.div``;

const FooterSubText = styled.button`
  width: 100%;

  border: none;
  background-color: transparent;
  color: #6b778c;
  font-size: inherit;
  font-weight: 500;
  cursor: pointer;
`;

const ProfilePhoto = styled.div<{ avatarImg?: string }>`
  background-image: ${({ avatarImg }) =>
    avatarImg ? `url(${avatarImg})` : null};
  background-color: transparent;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  border-radius: 2px;
`;

const ProfilePhotoBox = styled.div`
  width: 2.4rem;
  height: 2.4rem;
`;

const ResizableAreaLineButton = styled.button`
  position: absolute;
  background-color: rgb(255, 255, 255);
  border-radius: 50%;
  color: rgb(107, 119, 140);
  width: 24px;
  height: 24px;
  display: flex;
  top: 5%;
  left: 50%;
  transform: translate(-50%, -50%);
  align-items: center;
  box-shadow: rgb(9 30 66 / 8%) 0px 0px 0px 1px,
    rgb(9 30 66 / 8%) 0px 2px 4px 1px;
  border: none;
`;

const SideBar = () => {
  const { width, enableResize } = useResize(200);

  // console.log(width, enableResize);

  return (
    <Wrapper width={width}>
      <ProjectNavigation>
        <ProjectNavHeader>
          <ProjectInfo>
            <ProfilePhotoBox>
              <ProfilePhoto />
            </ProfilePhotoBox>
            <ProjectTexts>
              <ProjectName>jira-clone</ProjectName>
              <ProjectCategory>Project opgorgramowania</ProjectCategory>
            </ProjectTexts>
          </ProjectInfo>
        </ProjectNavHeader>
        <ProjectNavItems>
          {SIDEBAR_LINKS.map((link) => {
            return renderLinkItem(link);
          })}
        </ProjectNavItems>
      </ProjectNavigation>
      <ResizableArea onMouseDown={enableResize}>
        <ResizableAreaLine>
          <ResizableAreaLineButton>
            <SvgArrowRight />
          </ResizableAreaLineButton>
        </ResizableAreaLine>
      </ResizableArea>
      <Footer>
        <FooterText>Korzystasz z projektu zarządzanego przez zespół</FooterText>
        <div style={{ margin: '0.6rem' }}>
          <FooterSubText>Dowiedz się wiecej</FooterSubText>
        </div>
      </Footer>
    </Wrapper>
  );
};

const renderLinkItem = (link: Link) => {
  const isImplemented = !!link.to;
  const Icon = link.icon;

  return (
    <LinkItem isImplemented={link.to || ''}>
      <Icon />
      <LinkText>{link.name}</LinkText>
      {!isImplemented && <NotImplemented>NOT IMPLEMENTED</NotImplemented>}
    </LinkItem>
  );
};

export default SideBar;

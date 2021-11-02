import React from 'react';
import styled from 'styled-components';

type CrumbProps = {
  href: string;
};

const BreadcrumbList = styled.ol`
  padding: 0;
  margin: 0;
  list-style: none;
`;

const CrumbWrapper = styled.li`
  display: inline;

  &:not(:first-of-type) {
    margin-left: 8px;

    &::before {
      content: '/';
      margin-right: 8px;
      opacity: 0.25;
    }
  }
`;

const CrumbLink = styled.a`
  color: inherit;
  text-decoration: none;

  &:hover {
    text-decoration: revert;
  }
`;

const Breadcrumbs: React.FC = ({ ...props }) => {
  return (
    <nav aria-label="Breadcrumb">
      <BreadcrumbList {...props} />
    </nav>
  );
};

const Crumb: React.FC<CrumbProps> = ({ href, children }) => {
  return (
    <CrumbWrapper>
      <CrumbLink href={href}> {children}</CrumbLink>
    </CrumbWrapper>
  );
};

const Breadcrumb = ({ items }: any) => {
  return (
    <Breadcrumbs>
      {items.map((item: any) => (
        <Crumb key={item} href="/">
          {item}
        </Crumb>
      ))}
    </Breadcrumbs>
  );
};

export { Breadcrumb };

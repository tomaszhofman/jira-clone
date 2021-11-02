import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import styled from 'styled-components';
import { Badge } from './index';

const Wrapper = styled.div`
  width: 30px;
`;

export default {
  title: 'Project/Badge',
  component: Badge,
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => (
  <Wrapper>
    <Badge>23</Badge>
  </Wrapper>
);

export const Primary = Template.bind({});

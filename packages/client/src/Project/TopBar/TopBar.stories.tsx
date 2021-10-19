import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TopBar from './TopBar';

export default {
  title: 'Project/TopBar',
  component: TopBar,
} as ComponentMeta<typeof TopBar>;

const Template: ComponentStory<typeof TopBar> = (args) => <TopBar />;

export const Default = Template.bind({});

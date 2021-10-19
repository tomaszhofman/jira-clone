import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SvgNotification from 'src/shared/assets/icons/Notification';

import TooltipButton from './TooltipButton';

export default {
  title: 'Project/TooltipButton',
  component: TooltipButton,
} as ComponentMeta<typeof TooltipButton>;

const Template: ComponentStory<typeof TooltipButton> = (args) => (
  <TooltipButton {...args} />
);

export const Default = Template.bind({});

Default.args = {
  icon: <SvgNotification />,
};

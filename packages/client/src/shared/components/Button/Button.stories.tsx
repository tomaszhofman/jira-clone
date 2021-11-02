import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SvgDots from 'src/shared/assets/icons/Dots';
import { Button } from './index';

export default {
  title: 'Project/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Template.args = {
  variant: 'primary',
};

export const IconButton = Template.bind({});
IconButton.args = {
  icon: <SvgDots />,
  variant: 'gray',
};

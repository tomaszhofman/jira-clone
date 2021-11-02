import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MultiSelectButton } from './index';

export default {
  title: 'Project/MultiSelectButton',
  component: MultiSelectButton,
} as ComponentMeta<typeof MultiSelectButton>;

const Template: ComponentStory<typeof MultiSelectButton> = (args) => (
  <MultiSelectButton />
);

export const Primary = Template.bind({});
// Primary.args = {
//   label: 'Create',
// };

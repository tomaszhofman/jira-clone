import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IssueCard } from './index';

export default {
  title: 'Project/IssueCard',
  component: IssueCard,
} as ComponentMeta<typeof IssueCard>;

const Template: ComponentStory<typeof IssueCard> = (args) => <IssueCard />;

export const Primary = Template.bind({});
// Primary.args = {
//   label: 'Create',
// };

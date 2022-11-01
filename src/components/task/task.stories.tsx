import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Task from '.';

export default {
  title: 'Task',
  component: Task,
	parameters: {
    xstate: true,
  },
} as ComponentMeta<typeof Task>;

export const Default = (args) => <Task {...args} />;

Default.args = {
  title: 'Title',
	children: 'this is the message text',
	person:{
		name: 'Per Person',
	}
};


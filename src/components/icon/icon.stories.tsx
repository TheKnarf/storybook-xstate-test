import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import * as Icon from '.';

export default {
  title: 'Icon',
  component: Icon,
} as ComponentMeta<typeof Button>;

export const Bear = (args) => <Icon.Bear {...args} />;
export const Cat = (args) => <Icon.Cat {...args} />;
export const Duck = (args) => <Icon.Duck {...args} />;

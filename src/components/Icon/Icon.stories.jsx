import React from 'react';
import { Icon } from './Icon';
import IconNames from '../../icons';

export default {
  title: 'Icon',
  component: Icon,
  argTypes: {
    name: {
      options: [...IconNames],
      control: { type: 'select' },
    },
    color: { control: { type: 'color' } },
    secondaryColor: { control: { type: 'color' } },
  },
};

const Template = args => <Icon {...args} />;
export const DefaultIcon = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DefaultIcon.args = {
  name: IconNames[0],
  color: '#333333',
  secondaryColor: '#000000',
  height: 24,
  width: 30,
};

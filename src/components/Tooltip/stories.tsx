import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';
import { Tooltip, TooltipProps } from '.';

export default {
  title: 'Tooltip',
  component: Tooltip,
  argTypes: {
    children: {
      type: 'string',
    },
  },
} as Meta;

export const Default: Story<TooltipProps> = (args) => (
  <div>
    <Tooltip {...args} />
  </div>
);

Default.args = {
  title: 'Mortal Kombat',
  variant: 'error',
  children: 'Subzero wins',
};

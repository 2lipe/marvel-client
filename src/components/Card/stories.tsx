import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';
import { Card, CardProps } from '.';
import { Images } from '../../shared/utils/images';

export default {
  title: 'Card',
  component: Card,
  args: {
    title: 'Marvel Vilains',
    description: 'Marvel',
    img: Images.marvelVilains,
  },

  argTypes: {
    onFav: { action: 'clicked' },
  },

  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta;

export const Default: Story<CardProps> = (args) => (
  <div style={{ width: '30rem', margin: '0 auto' }}>
    <Card {...args} />
  </div>
);

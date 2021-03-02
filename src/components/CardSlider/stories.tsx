import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { CardProps } from '../Card';
import { CardSlider } from '.';

import items from './mock';

export default {
  title: 'CardSlider',
  component: CardSlider,
  args: { items },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta;

export const Default: Story<CardProps[]> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <CardSlider items={args} {...args} />
  </div>
);

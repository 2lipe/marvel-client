import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';
import { Highlight, HighlightProps } from '.';
import { Images } from '../../shared/utils/images';

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: 'Marvel Comics',
    subtitle: 'Busque aqui por sua comic favorita!',
    buttonLabel: 'Comics',
    buttonLink: '/ddr4',
    backgroundImage: Images.marvelComics,
  },
} as Meta;

export const Default: Story<HighlightProps> = (args) => (
  <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
    <Highlight {...args} />
  </div>
);

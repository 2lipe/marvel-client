import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';
import Banner, { BannerProps } from '.';
import { Images } from '../../shared/utils/images';

export default {
  title: 'Banner',
  component: Banner,
  args: {
    img: Images.marvelVilains,
    title: 'Marvel Vilains',
    subtitle: '<p>Busque aqui os<strong>Marvel Vilains</strong>',
    buttonLabel: 'Vilains',
    buttonLink: '/vilains/',
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: Story<BannerProps> = (args) => (
  <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
    <Banner {...args} />
  </div>
);

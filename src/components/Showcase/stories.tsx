import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';
import highlightMock from '../Highlight/mock';
import gamesMock from '../CardSlider/mock';
import Showcase, { ShowcaseProps } from '.';

export default {
  title: 'Showcase',
  component: Showcase,
  decorators: [
    // eslint-disable-next-line no-shadow
    (Story) => (
      <div style={{ margin: '0 auto' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark',
    },
  },
} as Meta;

export const Default: Story<ShowcaseProps> = (args) => <Showcase {...args} />;

Default.args = {
  title: 'Most Popular',
  highlight: highlightMock,
  items: gamesMock,
};

export const WithoutHighlight: Story<ShowcaseProps> = (args) => <Showcase {...args} />;

WithoutHighlight.args = {
  title: 'Most Popular',
  items: gamesMock,
};

export const WithoutGames: Story<ShowcaseProps> = (args) => <Showcase {...args} />;

WithoutGames.args = {
  title: 'Most Popular',
  highlight: highlightMock,
};

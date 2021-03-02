import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';
import { HeaderLogo, LogoProps } from '.';

export default {
  title: 'HeaderLogo',
  component: HeaderLogo,
} as Meta;

export const Default: Story<LogoProps> = (args) => <HeaderLogo {...args} />;

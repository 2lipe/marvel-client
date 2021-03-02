import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { render, RenderResult } from '@testing-library/react';

import theme from '../../styles/theme/light';

export const renderWithTheme = (children: ReactNode): RenderResult =>
  // eslint-disable-next-line implicit-arrow-linebreak
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);

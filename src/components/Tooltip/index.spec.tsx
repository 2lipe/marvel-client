import React from 'react';

import { screen } from '@testing-library/react';

import { Tooltip } from '.';
import { renderWithTheme } from '../../shared/helpers/test-helper';

describe('<Tooltip />', () => {
  it('should be render tooltip correctly', () => {
    renderWithTheme(<Tooltip title="Mortal Kombat">Subzero wins</Tooltip>);

    expect(screen.getByText(/Subzero wins/i)).toBeInTheDocument();
  });
});

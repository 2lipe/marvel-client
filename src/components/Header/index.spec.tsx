import React from 'react';

import { render, screen } from '@testing-library/react';

import { Header } from '.';

describe('<Header />', () => {
  it('should be render the heading', () => {
    render(<Header />);

    expect(screen.getByRole('heading', { name: /Header/i })).toBeInTheDocument();
  });
});

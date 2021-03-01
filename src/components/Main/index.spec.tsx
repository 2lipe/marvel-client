import React from 'react';

import { render, screen } from '@testing-library/react';

import { Main } from '.';

describe('<Main />', () => {
  it('should be render the heading', () => {
    render(<Main />);

    expect(screen.getByRole('heading', { name: /Main/i })).toBeInTheDocument();
  });
});

import React from 'react';

import { screen } from '@testing-library/react';

import { Card } from '.';
import { renderWithTheme } from '../../shared/helpers/test-helper';

const props = {
  title: 'Marvel Vilains',
  description: 'Marvel',
  img: '/img/marvel-vilains-img.jpg',
};

describe('<Card />', () => {
  it('should be render correctly', () => {
    renderWithTheme(<Card {...props} />);

    expect(screen.getByRole('heading', { name: props.title })).toBeInTheDocument();

    expect(screen.getByRole('heading', { name: props.description })).toBeInTheDocument();

    expect(screen.getByLabelText(/add to favorites/i)).toBeInTheDocument();
  });
});

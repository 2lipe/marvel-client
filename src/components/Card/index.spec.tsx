import React from 'react';

import { fireEvent, screen } from '@testing-library/react';

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

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img,
    );

    expect(screen.getByLabelText(/add to favorites/i)).toBeInTheDocument();
  });

  it('should be render a field favorite icon when favorite is true', () => {
    renderWithTheme(<Card favorite {...props} />);

    expect(screen.getByLabelText(/remove from favorites/i)).toBeInTheDocument();
  });

  it('should be call onFav method when favorite is clicked', () => {
    const onFav = jest.fn();

    renderWithTheme(<Card favorite onFav={onFav} {...props} />);

    fireEvent.click(screen.getAllByRole('button')[0]);

    expect(onFav).toBeCalled();
  });
});

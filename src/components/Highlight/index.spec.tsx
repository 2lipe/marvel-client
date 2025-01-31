import React from 'react';

import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../shared/helpers/test-helper';

import { Highlight } from '.';

import * as S from './styles';

const props = {
  title: 'Heading 1',
  subtitle: 'Heading 2',
  buttonLabel: 'Buy now',
  buttonLink: '/ddr4',
  backgroundImage: '/img/red-dead-img.jpg',
};

describe('<Highlight />', () => {
  it('should be render headings and button', () => {
    renderWithTheme(<Highlight {...props} />);

    expect(screen.getByRole('heading', { name: /Heading 1/i })).toBeInTheDocument();

    expect(screen.getByRole('heading', { name: /Heading 2/i })).toBeInTheDocument();
  });

  it('should be render background image', () => {
    const { container } = renderWithTheme(<Highlight {...props} />);

    expect(container.firstChild).toHaveStyle({
      backgroundImage: `url(${props.backgroundImage})`,
    });
  });

  it('should be render align right by default', () => {
    const { container } = renderWithTheme(<Highlight {...props} />);

    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      "'floatimage content'",
    );

    expect(container.firstChild).toHaveStyleRule('text-align', 'right', {
      modifier: `${S.Content}`,
    });
  });

  it('should be render align left with alignment is passed', () => {
    const { container } = renderWithTheme(<Highlight alignment="left" {...props} />);

    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      "'content floatimage'",
    );

    expect(container.firstChild).toHaveStyleRule('text-align', 'left', {
      modifier: `${S.Content}`,
    });
  });
});

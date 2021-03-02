import React from 'react';

import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../helpers/test-helper';

import { Button } from '.';

describe('<Button />', () => {
  it('should be render the medium size by default', () => {
    renderWithTheme(<Button>Sign in</Button>);

    expect(screen.getByRole('button', { name: /Sign in/i })).toHaveStyle({
      height: '5rem',
      padding: '0.8rem 5.6rem',
      'font-size': '1.4rem',
    });
  });

  it('should be render the small size', () => {
    renderWithTheme(<Button size="small">Sign in</Button>);

    expect(screen.getByRole('button', { name: /Sign in/i })).toHaveStyle({
      height: '3rem',
      padding: '0.8rem',
      'font-size': '1.2rem',
    });
  });

  it('should be render the large size', () => {
    renderWithTheme(<Button size="large">Sign in</Button>);

    expect(screen.getByRole('button', { name: /Sign in/i })).toHaveStyle({
      height: '5rem',
      padding: '1.6rem 10rem',
      'font-size': '1.6rem',
    });
  });

  it('should be render fullWidth version', () => {
    renderWithTheme(<Button fullWidth>Sign in</Button>);

    expect(screen.getByRole('button', { name: /Sign in/i })).toHaveStyle({
      width: '100%',
    });
  });

  it('should be render Button as a link', () => {
    renderWithTheme(
      <Button as="a" href="/link">
        Sign in
      </Button>,
    );

    expect(screen.getByRole('link', { name: /Sign in/i })).toHaveAttribute(
      'href',
      '/link',
    );
  });
});

import 'jest-styled-components';
import React from 'react';

import { screen } from '@testing-library/react';

import { renderWithTheme } from '../../shared/helpers/test-helper';
import { HeaderLogo } from '.';

describe('<HeaderLogo />', () => {
  it('should be render a red label by default', () => {
    renderWithTheme(<HeaderLogo />);

    expect(screen.getByLabelText(/Marvel 'M' Logo/i).parentElement).toHaveStyle({
      color: '#c53030',
    });
  });

  it('should be render a white label when color is passed', () => {
    renderWithTheme(<HeaderLogo color="white" />);

    expect(screen.getByLabelText(/Marvel 'M' Logo/i).parentElement).toHaveStyle({
      color: '#FAFAFA',
    });
  });

  it('should be render a large logo when size large is passed', () => {
    renderWithTheme(<HeaderLogo size="large" />);

    expect(screen.getByLabelText(/Marvel 'M' Logo/i).parentElement).toHaveStyle({
      width: '20rem',
    });
  });

  it('should be render a normal logo when size is default or equal normal', () => {
    renderWithTheme(<HeaderLogo size="normal" />);

    expect(screen.getByLabelText(/Marvel 'M' Logo/i).parentElement).toHaveStyle({
      width: '11rem',
    });
  });
});

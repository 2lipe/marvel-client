import '@testing-library/jest-dom';
import React from 'react';
import { screen } from '@testing-library/react';

import { renderWithTheme } from '../../shared/helpers/test-helper';
import { Modal } from '.';

describe('<Modal />', () => {
  it('should be render correctly', () => {
    renderWithTheme(<Modal title="Warning" description="Test" open />);

    expect(screen.getByText(/Test/i)).toBeInTheDocument();
  });
});

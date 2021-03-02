import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { SnackbarProvider } from 'notistack';

import theme from '../styles/theme/light';

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => (
  <>
    <ThemeProvider theme={theme}>
      <SnackbarProvider
        maxSnack={3}
        autoHideDuration={5000}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
        {children}
      </SnackbarProvider>
    </ThemeProvider>
  </>
);

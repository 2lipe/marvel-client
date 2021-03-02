import React from 'react';
import { ThemeProvider } from 'styled-components';

import Routes from './routes/routes';

import GlobalStyles from './styles/global';
import light from './styles/theme/light';

function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
}

export default App;

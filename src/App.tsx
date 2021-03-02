import React from 'react';
import { ThemeProvider } from 'styled-components';

import { SignIn } from './pages/SignIn';

import GlobalStyles from './styles/global';
import light from './styles/theme/light';

function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyles />
      <SignIn />
    </ThemeProvider>
  );
}

export default App;

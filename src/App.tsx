import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './styles/global';
import light from './styles/theme/light';

function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyles />
      <h1>Hello World</h1>
    </ThemeProvider>
  );
}

export default App;

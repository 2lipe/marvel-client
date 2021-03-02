import React from 'react';

import { AppProvider } from './context';
import Routes from './routes/routes';

import GlobalStyles from './styles/global';

function App() {
  return (
    <AppProvider>
      <GlobalStyles />
      <Routes />
    </AppProvider>
  );
}

export default App;

// In App.js in a new project

import React from 'react';
import {Provider} from 'react-redux';
import Navigation from './Navigation';
import {Store} from './Store';
import {Provider as PaperProvider} from 'react-native-paper';
function App() {
  return (
    <PaperProvider>
      <Provider store={Store}>
        <Navigation />
      </Provider>
    </PaperProvider>
  );
}

export default App;

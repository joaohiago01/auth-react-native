import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './contexts/auth';
import Routes from './routes';

// import { Container } from './styles'

const App = () => (
  <NavigationContainer>
    <AuthProvider value={{ signed: false }}>
      <Routes />
    </AuthProvider>
  </NavigationContainer>
);

export default App;

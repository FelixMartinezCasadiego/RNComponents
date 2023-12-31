import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';
import {ThemeProvider} from './src/context/themeContext/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <Navigation />
    </ThemeProvider>
  );
};

export default App;

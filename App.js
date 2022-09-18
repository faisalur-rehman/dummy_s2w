/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {MenuProvider} from 'react-native-popup-menu';
import {Routes} from './src/navigations/routes';
import DashboardScreen from './src/screens/dashboard/DashboardScreen';

const App = () => {
  return (
    <MenuProvider>
      <Routes />
    </MenuProvider>
  );
};

export default App;

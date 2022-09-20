/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Platform} from 'react-native';
import {MenuProvider} from 'react-native-popup-menu';
import Toast, {ErrorToast} from 'react-native-toast-message';

import {Routes} from './src/navigations/routes';
import {fonts} from './src/utils/theme';

const toastConfig = {
  error: props => (
    <ErrorToast
      {...props}
      text1NumberOfLines={2}
      text1Style={{
        color: 'white',
        fontSize: 14,
        fontFamily: fonts.nunito_regular,
        paddingTop: 15,
      }}
      text2Style={{
        color: 'white',
        fontSize: 12,
        fontFamily: fonts.nunito_regular,
      }}
      text2NumberOfLines={6}
      style={{
        backgroundColor: '#f56342',
        borderRadius: 8,
        width: '100%',
        height: 'auto',
        paddingBottom: 15,
        borderLeftWidth: 0,
      }}
    />
  ),
};

const App = () => {
  return (
    <MenuProvider>
      <Routes />
      <Toast
        config={toastConfig}
        position="top"
        topOffset={Platform.OS === 'ios' ? 40 : 10}
      />
    </MenuProvider>
  );
};

export default App;

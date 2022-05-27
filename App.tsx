/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView
} from 'react-native';

import Entry from '@src/entry';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ThemeProvider } from '@src/misc/hooks/useTheme/provider';

const App = () => {

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <Entry />
        </SafeAreaView>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
};

export default App;

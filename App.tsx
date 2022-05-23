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

const App = () => {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Entry />
    </SafeAreaView>
  );
};

export default App;

import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Paragraph } from './components/Paragraph';
import { ThemeProvider } from './misc/hooks/useTheme';

export default function Entry() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider>
        <Paragraph size="sm">small</Paragraph>
        <Paragraph size="md">medium</Paragraph>
        <Paragraph size="lg">large</Paragraph>
      </ThemeProvider>
    </GestureHandlerRootView>
  )
}

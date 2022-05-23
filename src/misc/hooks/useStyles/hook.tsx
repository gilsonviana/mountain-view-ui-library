import { useCallback } from 'react';
import { StyleSheet } from 'react-native';

import { useTheme } from '../useTheme';
import { ITheme } from '@src/misc/theme';

type StyleFunction = (
  theme: ITheme,
  sheet: typeof StyleSheet
) => StyleSheet.NamedStyles<any>;

export const useStyles = (style: StyleFunction) => {
  const { theme } = useTheme();
  const styles = useCallback(
    () => getStyles(theme, StyleSheet, style),
    [style, theme]
  );
  return styles();
};

const getStyles = (
  theme: ITheme,
  sheet: typeof StyleSheet,
  styles: StyleFunction
) => StyleSheet.create(styles(theme, sheet));

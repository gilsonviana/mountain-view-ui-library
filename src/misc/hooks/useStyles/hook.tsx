import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

import { useTheme } from '../useTheme/hook';
import type { StyleFunction, StyleFunctionParams, StyleGetColorParams, StyleGetVariableParams } from './types';

export const useStyles = (styles: StyleFunction) => {
  const { theme, variant } = useTheme();

  const getVariable = ({ key }: StyleGetVariableParams) => {
    return theme.config.variables[key]
  }

  const getColor = ({ color = 'body' }: StyleGetColorParams) => {
    return theme.color[color][variant!];
  }

  const hook = useMemo(
    () => getStyles({ theme, variant, sheet: StyleSheet, styles, getColor, getVariable }),
    [styles, theme]
  );

  return hook;
};

const getStyles = (params: StyleFunctionParams) => StyleSheet.create(params.styles(params));

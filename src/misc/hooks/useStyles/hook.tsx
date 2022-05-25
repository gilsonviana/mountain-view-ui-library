import { useMemo } from 'react';
import { ColorSchemeName, StyleSheet } from 'react-native';

import { useTheme } from '../useTheme';
import type { ColorKeys, ITheme, ThemeVariableTypographyProps } from '@src/misc/theme';

type StyleGetColorParams = {
  color: ColorKeys
}

type StyleGetVariableParams = {
  key: keyof ITheme['config']['variables']
}

type StyleFunctionParams = {
  theme: ITheme
  variant: ColorSchemeName
  sheet: typeof StyleSheet
  styles: StyleFunction
  getColor: (params: StyleGetColorParams) => string
  getVariable: (params: StyleGetVariableParams) => ThemeVariableTypographyProps
}

type StyleFunction = (params: StyleFunctionParams) => StyleSheet.NamedStyles<any>;

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

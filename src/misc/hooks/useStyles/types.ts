
import type { ColorKeys, ITheme, ThemeVariableTypographyProps } from "@src/misc/theme/types"
import type { ColorSchemeName, StyleSheet } from "react-native"

export type StyleGetColorParams = {
  color: ColorKeys
}

export type StyleGetVariableParams = {
  key: keyof ITheme['config']['variables']
}

export type StyleFunctionParams = {
  theme: ITheme
  variant: ColorSchemeName
  sheet: typeof StyleSheet
  styles: StyleFunction
  getColor: (params: StyleGetColorParams) => string
  getVariable: (params: StyleGetVariableParams) => ThemeVariableTypographyProps
}

export type StyleFunction = (params: StyleFunctionParams) => StyleSheet.NamedStyles<any>;
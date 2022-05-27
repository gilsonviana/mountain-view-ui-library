
import type { ColorKeys, ITheme } from "@src/misc/theme/types"
import type { ColorSchemeName, StyleSheet } from "react-native"

export type StyleGetColorParams = {
  color: ColorKeys
}

export type StyleGetVariableParams = {
  key: string
}

export type StyleFunctionParams = {
  theme: ITheme
  variant: ColorSchemeName
  sheet: typeof StyleSheet
  styles: StyleFunction
  getColor: (params: StyleGetColorParams) => string
  getVariable: (params: StyleGetVariableParams) => {}
}

export type StyleFunction = (params: StyleFunctionParams) => StyleSheet.NamedStyles<any>;
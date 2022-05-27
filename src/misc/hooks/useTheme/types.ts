import type { ITheme } from "@src/misc/theme/types"
import type { ColorSchemeName } from "react-native"

export interface IThemeContext {
  theme: ITheme
  setDefaultTheme: (theme: ITheme) => void
  variant: ColorSchemeName
}
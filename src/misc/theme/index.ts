import defaultTheme from './default.json';

type ThemeColorSupport = { 
  light: string
  dark: string
}

type ThemeVariableTypographyProps = {
  fontSize: number
  lineHeight: number
}

type ColorKeys = 
  'body' | 
  'heading' | 
  'bgColor' | 
  'success' | 
  'danger' | 
  'info' | 
  'warning' |
  'muted'

type VariableKeys =
  'paragraph-sm' |
  'paragraph-md' |
  'paragraph-lg'

export interface ITheme {
  color: Record<ColorKeys, ThemeColorSupport>
  config: {
    variables: Record<VariableKeys, ThemeVariableTypographyProps>
  }
}

export const DefaultTheme = defaultTheme as ITheme

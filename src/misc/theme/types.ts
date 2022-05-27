type ThemeColorSupport = { 
  light: string
  dark: string
}

export type ThemeVariableTypographyProps = any

export type ColorKeys = 
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
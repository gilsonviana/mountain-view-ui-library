type ThemeColorSupport = { 
  light: string
  dark: string
}

export type ColorKeys = 
  'body' | 
  'heading' | 
  'bgColor' | 
  'success' | 
  'danger' | 
  'info' | 
  'warning' |
  'muted'

export interface ITheme {
  color: Record<ColorKeys, ThemeColorSupport>
  config: {
    variables: Record<string, {}>
  }
}
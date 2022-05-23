import defaultTheme from './default.json';

type ThemeSupport = { 
  light: string
  dark: string
}

type ColorKeys = 
  'body' | 
  'heading' | 
  'bgColor' | 
  'success' | 
  'danger' | 
  'info' | 
  'muted'

export interface ITheme {
  color: Record<ColorKeys, ThemeSupport>
}

const themeColors: ITheme['color'] = defaultTheme;

import React, { createContext, useState  } from 'react';
import { useColorScheme } from 'react-native';

import { WithChildren } from '@src/misc/generic-types';
import { DefaultTheme, ITheme } from '@src/misc/theme';
import type { IThemeContext } from './types';

interface Props extends WithChildren {
  defaultTheme?: ITheme
}

export const ThemeContext = createContext({} as IThemeContext)

export const ThemeProvider = ({ children, defaultTheme = DefaultTheme }: Props) => {
  const [theme, setTheme] = useState(defaultTheme)
  const variant = useColorScheme()
  const setDefaultTheme = (theme: ITheme) => setTheme(theme)

  return (
    <ThemeContext.Provider value={{ theme, setDefaultTheme, variant }}>
      {children}
    </ThemeContext.Provider>
  )
}
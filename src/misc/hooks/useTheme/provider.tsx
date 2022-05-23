import React, { createContext, useState  } from 'react';

import { WithChildren } from '@src/misc/generic-types';
import { DefaultTheme, ITheme } from '@src/misc/theme';

interface IThemeContext {
  theme: ITheme
  setDefaultTheme: (theme: ITheme) => void
}

interface Props extends WithChildren {
  defaultTheme?: ITheme
}

export const ThemeContext = createContext({} as IThemeContext)

export const ThemeProvider = ({ children, defaultTheme = DefaultTheme }: Props) => {
  const [theme, setTheme] = useState(defaultTheme)

  const setDefaultTheme = (theme: ITheme) => setTheme(theme)

  return (
    <ThemeContext.Provider value={{ theme, setDefaultTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
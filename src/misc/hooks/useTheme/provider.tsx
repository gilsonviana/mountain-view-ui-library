import React, { createContext  } from 'react';

import { WithChildren } from '@src/misc/generic-types';

interface IThemeContext {}

export const ThemeContext = createContext({} as IThemeContext)

export const ThemeProvider = ({ children }: WithChildren) => {
  return (
    <ThemeContext.Provider value={{}}>
      {children}
    </ThemeContext.Provider>
  )
}
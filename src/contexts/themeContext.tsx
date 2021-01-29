import React, { createContext, useState } from 'react'

import { ThemeProviderProps, AvailableThemes } from '../types'

export const ThemeContext = createContext({})

const purpleTheme = {
  name: 'purple',
  backgroundColor: '#9d28b0',
  color: '#9d28b0',
}

const blueTheme = {
  name: 'blue',
  backgroundColor: '#2296f3',
  color: '#2296f3',
}

const greenTheme = {
  name: 'green',
  backgroundColor: '#26a69a',
  color: '#26a69a',
}

const redTheme = {
  name: 'red',
  backgroundColor: '#e91e63',
  color: '#e91e63',
}

const availableThemes: AvailableThemes[] = [
  purpleTheme,
  blueTheme,
  greenTheme,
  redTheme,
]

export const ThemeProvider: React.FC<ThemeProviderProps> = (props) => {
  const [selectedTheme, setSelectedTheme] = useState(greenTheme)

  const selectTheme = (name: string) => {
    const theme = availableThemes.find((theme) => theme.name === name)
    if (theme) {
      setSelectedTheme(theme)
    }
  }

  return (
    <ThemeContext.Provider
      value={{ selectedTheme, selectTheme, availableThemes }}
    >
      {props.children}
    </ThemeContext.Provider>
  )
}

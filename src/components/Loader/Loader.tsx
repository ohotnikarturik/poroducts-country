import React, { useContext } from 'react'
import { ThemeContext } from '../../contexts/themeContext'

export const Loader = () => {
  const { selectedTheme } = useContext<any>(ThemeContext)

  return (
    <div className="progress">
      <div
        style={{ backgroundColor: selectedTheme.backgroundColor }}
        className="indeterminate"
      />
    </div>
  )
}

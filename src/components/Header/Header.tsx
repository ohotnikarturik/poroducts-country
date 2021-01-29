import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'

import { SideNavLeft } from '../SideNavLeft/SideNavLeft'
import { SideNavRight } from '../SideNavRight/SideNavRight'
import { ThemeContext } from '../../contexts/themeContext'

export const Header = () => {
  const { selectedTheme } = useContext<any>(ThemeContext)

  return (
    <>
      <nav style={{ backgroundColor: selectedTheme.backgroundColor }}>
        <div className="nav-wrapper container">
          <SideNavLeft />
          <div>
            <NavLink
              to="#"
              style={{ marginLeft: 20 }}
              href="#"
              className="brand-logo"
            >
              Products
            </NavLink>
          </div>
          <SideNavRight />
        </div>
      </nav>
    </>
  )
}

import React, { useContext, useEffect } from 'react'
import M from 'materialize-css'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../../contexts/themeContext'

export const SideNavLeft = () => {
  const { selectedTheme, selectTheme } = useContext<any>(ThemeContext)

  useEffect(() => {
    const elems = document.querySelectorAll('#sidenav-left')
    M.Sidenav.init(elems, { edge: 'left' })
  }, [])

  return (
    <>
      <Link
        to="#"
        style={{ marginLeft: 0 }}
        href="#"
        data-target="sidenav-left"
        className="sidenav-trigger show-on-large"
      >
        <i className="fas fa-bars" />
      </Link>
      <div style={{ width: 200 }} className="sidenav" id="sidenav-left">
        <h5
          style={{
            color: selectedTheme.color,
            marginLeft: 30,
            marginTop: 30,
            marginBottom: 20,
          }}
        >
          Switch Theme
        </h5>
        <ul style={{ marginLeft: 50 }}>
          <li style={{ marginBottom: 20 }}>
            <button
              onClick={() => selectTheme('purple')}
              style={{ backgroundColor: '#9d28b0' }}
              className="btn-floating pulse"
            >
              P
            </button>
          </li>
          <li style={{ marginBottom: 20 }}>
            <button
              onClick={() => selectTheme('blue')}
              style={{ backgroundColor: '#2296f3' }}
              className="btn-floating pulse"
            >
              B
            </button>
          </li>
          <li style={{ marginBottom: 20 }}>
            <button
              onClick={() => selectTheme('green')}
              style={{ backgroundColor: '#26a69a' }}
              className="btn-floating pulse"
            >
              G
            </button>
          </li>
          <li style={{ marginBottom: 20 }}>
            <button
              onClick={() => selectTheme('red')}
              style={{ backgroundColor: '#e91e63' }}
              className="btn-floating pulse"
            >
              R
            </button>
          </li>
        </ul>
      </div>
    </>
  )
}

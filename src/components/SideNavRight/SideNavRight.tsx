import React, { useContext, useEffect } from 'react'
import M from 'materialize-css'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import './SideNavRight.css'
import { CartItem } from '../CartItem/CartItem'
import { AppState, Country } from '../../types'
import { ThemeContext } from '../../contexts/themeContext'

export const SideNavRight = () => {
  const { selectedTheme } = useContext<any>(ThemeContext)
  const country = useSelector((state: AppState) => state.countries.inCart)

  useEffect(() => {
    const elems = document.querySelectorAll('#sidenav-right')
    M.Sidenav.init(elems, { edge: 'right' })
  }, [])

  return (
    <>
      <Link
        to="#"
        style={{ marginRight: 0 }}
        href="#"
        data-target="sidenav-right"
        className="sidenav-trigger show-on-large right"
      >
        <div style={{ position: 'relative' }}>
          <i className="fas fa-cart-arrow-down" />
          {country.length === 0 ? (
            <div
              style={{ backgroundColor: selectedTheme.backgroundColor }}
              className="cartImg__counter"
            >
              {country.length}
            </div>
          ) : (
            <div
              style={{ backgroundColor: 'red' }}
              className="cartImg__counter"
            >
              {country.length}
            </div>
          )}
        </div>
      </Link>
      <div style={{ width: 400 }} className="sidenav" id="sidenav-right">
        <div style={{ position: 'relative' }}>
          <h5
            style={{
              color: selectedTheme.color,
              marginLeft: 30,
              marginTop: 30,
            }}
          >
            Flags Cart
          </h5>
          {country.length === 0 ? (
            <div
              style={{
                right: 55,
                backgroundColor: selectedTheme.backgroundColor,
              }}
              className="cartImg__counter"
            >
              {country.length}
            </div>
          ) : (
            <div
              style={{ right: 55, backgroundColor: 'red' }}
              className="cartImg__counter"
            >
              {country.length}
            </div>
          )}
        </div>
        <ul className="collection">
          {country.map((country: Country) => (
            <li
              key={country.flag}
              style={{ display: 'flex', justifyContent: 'space-between' }}
              className="collection-item"
            >
              <CartItem country={country} />
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

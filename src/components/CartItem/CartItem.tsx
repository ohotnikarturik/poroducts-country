import React, { useContext } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { removeCountry } from '../../redux/actions'
import { ThemeContext } from '../../contexts/themeContext'

// @ts-ignore
export const CartItem = ({ country }) => {
  const { selectedTheme } = useContext<any>(ThemeContext)
  const dispatch = useDispatch()

  return (
    <>
      <div
        style={{ display: 'flex', alignItems: 'center' }}
        className="teal-text"
      >
        <img
          style={{ width: 40, height: 30 }}
          src={country.flag}
          alt={country.name}
        />
        <Link
          to={`/country/${country.name}`}
          style={{ marginLeft: 20, color: '#039be5' }}
        >
          {country.name}
        </Link>
      </div>
      <Link to="#" onClick={() => dispatch(removeCountry(country))} href="#">
        <i
          style={{ margin: 0, color: selectedTheme.color }}
          className="fas fa-trash-alt"
        />
      </Link>
    </>
  )
}

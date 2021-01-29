import React, { useContext } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { addCountry } from '../../redux/actions/'
import { ThemeContext } from '../../contexts/themeContext'

// @ts-ignore
export const CountriesItem = ({ country }) => {
  const { selectedTheme } = useContext<any>(ThemeContext)
  const dispatch = useDispatch()

  return (
    <>
      <td>
        <img
          style={{ width: 60, height: 40 }}
          src={country.flag}
          alt={country.name}
        />
      </td>
      <td>
        <Link to={`/country/${country.name}`}>{country.name}</Link>
      </td>
      <td>
        {country.languages.map((l: any) => (
          <div>{l.name}</div>
        ))}
      </td>
      <td>{country.population}</td>
      <td>{country.region}</td>
      <td className="right">
        <button
          style={{ backgroundColor: selectedTheme.backgroundColor }}
          onClick={() => dispatch(addCountry(country))}
          className="btn-small"
        >
          Add
        </button>
      </td>
    </>
  )
}

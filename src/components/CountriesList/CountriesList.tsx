import React, { useContext, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchCountriesData, reverseCountry } from '../../redux/actions'
import { CountriesItem } from '../CountriesItem/CountriesItem'
import { AppState, Country } from '../../types'
import { Loader } from '../Loader/Loader'
import { SearchFilter } from '../SearchFilter/SearchFilter'
import { ThemeContext } from '../../contexts/themeContext'

export const CountriesList = () => {
  const { selectedTheme } = useContext<any>(ThemeContext)
  const dispatch = useDispatch()
  const loading = useSelector((state: AppState) => state.loader.loading)
  const searchValue = useSelector(
    (state: AppState) => state.countries.searchCountry
  )
  const countries = useSelector(
    (state: AppState) => state.countries.dataCountries
  )

  const [arrowStyle, setArrowStyle] = useState({
    transform: 'rotate(0deg)',
  })

  if (loading) return <Loader />

  if (!countries.length) {
    return (
      <div style={{ paddingTop: 20 }}>
        <button
          style={{ backgroundColor: selectedTheme.backgroundColor }}
          className="btn btn-primary"
          onClick={() => dispatch(fetchCountriesData())}
        >
          Show all List of Products
        </button>
      </div>
    )
  }

  const onclickReverseHandler = () => {
    dispatch(reverseCountry())
    if (arrowStyle.transform === 'rotate(0deg)') {
      setArrowStyle(() => {
        return { transform: 'rotate(180deg)' }
      })
    } else {
      setArrowStyle(() => {
        return {
          transform: 'rotate(0deg)',
        }
      })
    }
  }

  return (
    <div style={{ paddingTop: 20 }}>
      <SearchFilter />
      <table className="striped">
        <thead>
          <tr>
            <th>Flag</th>
            <th>
              Name
              <Link
                to="#"
                onClick={onclickReverseHandler}
                style={{ marginLeft: 10 }}
                href="#"
              >
                <i style={arrowStyle} className="fas fa-arrow-down" />
              </Link>
            </th>
            <th>Languages</th>
            <th>Population</th>
            <th>Region</th>
            <th className="right">Add to cart</th>
          </tr>
        </thead>
        <tbody>
          {countries
            .filter((country) =>
              country.name.toLowerCase().startsWith(searchValue.toLowerCase())
            )
            .map((country: Country) => (
              <tr key={country.flag}>
                <CountriesItem country={country} />
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

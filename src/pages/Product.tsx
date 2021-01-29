import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { AppState, ParamTypes } from '../types'
import { CountryCard } from '../components/CountryCard/CountryCard'

export const Product = () => {
  const { name } = useParams<ParamTypes>()
  const country = useSelector((state: AppState) =>
    state.countries.dataCountries.find((country) => country.name === name)
  )

  console.log(country)
  if (!country) {
    return (
      <div className="container">
        <h3>Country not found</h3>
        <div className="card-action">
          <Link to="/">Back to Home page</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <h3>{country.name}</h3>
      <CountryCard country={country} />
    </div>
  )
}

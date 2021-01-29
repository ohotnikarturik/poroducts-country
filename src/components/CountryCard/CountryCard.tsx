import React from 'react'
import { Link } from 'react-router-dom'

// @ts-ignore
export const CountryCard = ({ country }) => {
  return (
    <div className="row">
      <div className="col s8">
        <div className="card">
          <div className="card-image">
            <img src={country.flag} alt={country.name} />
            <span className="card-title">{country.name}</span>
          </div>
          <div className="card-content">
            <p>
              Here you can find all information about {country.name} country
            </p>
          </div>
          <div className="card-action">
            <Link style={{ color: '#039be5' }} to="/">
              Back to Home page
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

import { Dispatch } from 'redux'
import {
  ADD_COUNTRY,
  FETCH_COUNTRIES,
  REMOVE_COUNTRY,
  SEARCH_COUNTRY,
  REVERSE_COUNTRY,
  CountriesActions,
  Country,
} from '../../types'
import { hideLoader, showLoader } from './loader'

export function fetchCountries(data: Country[]): CountriesActions {
  return {
    type: FETCH_COUNTRIES,
    payload: {
      countries: data,
    },
  }
}

export function addCountry(country: Country): CountriesActions {
  return {
    type: ADD_COUNTRY,
    payload: {
      country: country,
    },
  }
}

export function removeCountry(country: Country): CountriesActions {
  return {
    type: REMOVE_COUNTRY,
    payload: {
      country: country,
    },
  }
}

export function searchCountry(searchCountry: string): CountriesActions {
  return {
    type: SEARCH_COUNTRY,
    payload: {
      searchCountry: searchCountry,
    },
  }
}

export function reverseCountry(): CountriesActions {
  return {
    type: REVERSE_COUNTRY,
  }
}

// An Example of Async action processed by redux-thunk middleware
export function fetchCountriesData() {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(showLoader())
      const response = await fetch('https://restcountries.com/v2/all')
      const data = await response.json()
      setTimeout(() => {
        dispatch(fetchCountries(data))
        dispatch(hideLoader())
      }, 1500)
    } catch (e) {
      console.log(e)
      dispatch(hideLoader())
    }
  }
}

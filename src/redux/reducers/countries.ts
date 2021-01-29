import {
  ADD_COUNTRY,
  CountriesActions,
  CountriesState,
  FETCH_COUNTRIES,
  REMOVE_COUNTRY,
  REVERSE_COUNTRY,
  SEARCH_COUNTRY,
} from '../../types'

export default function countries(
  state: CountriesState = {
    dataCountries: [],
    inCart: [],
    searchCountry: '',
  },
  action: CountriesActions
): CountriesState {
  switch (action.type) {
  case FETCH_COUNTRIES: {
    const { countries } = action.payload
    return { ...state, dataCountries: [...countries] }
  }
  case ADD_COUNTRY: {
    const { country } = action.payload
    if (state.inCart.find((p) => p.name === country.name)) {
      return state
    }
    // Always return new state (e.g, new object) if changed
    return { ...state, inCart: [...state.inCart, country] }
  }
  case REMOVE_COUNTRY: {
    const { country } = action.payload
    const index = state.inCart.findIndex((p) => p.name === country.name)
    if (index >= 0) {
      state.inCart.splice(index, 1)
      return { ...state, inCart: [...state.inCart] }
    }
    return state
  }
  case SEARCH_COUNTRY: {
    const { searchCountry } = action.payload
    console.log('payload:', searchCountry)
    return { ...state, searchCountry: searchCountry }
  }

  case REVERSE_COUNTRY: {
    const reverseArray = state.dataCountries.reverse()
    return { ...state, dataCountries: reverseArray }
  }
  default:
    return state
  }
}

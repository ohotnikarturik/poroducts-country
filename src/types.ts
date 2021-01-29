import React from 'react'

// Action types
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const TOGGLE_DIALOG = 'TOGGLE_DIALOG'
export const FETCH_COUNTRIES = 'COUNTRIES/FETCH_COUNTRIES'
export const SHOW_LOADER = 'SHOW_LOADER'
export const HIDE_LOADER = 'HIDE_LOADER'
export const ADD_COUNTRY = 'ADD_COUNTRY'
export const REMOVE_COUNTRY = 'REMOVE_COUNTRY'
export const SEARCH_COUNTRY = 'SEARCH_COUNTRY'
export const REVERSE_COUNTRY = 'REVERSE_COUNTRY'
export const SORT_COUNTRY = 'SORT_COUNTRY'

// Enum
export enum DialogType {
  SignIn = 'signIn',
  SignUp = 'signUp',
}

// A product
export type Product = {
  id: string
  name: string
  price: number
}

// A Country
export interface Country {
  flag: string
  name: string
  languages: [string]
  population: number
  region: string
}

export type AddProductAction = {
  type: typeof ADD_PRODUCT
  payload: {
    product: Product
  }
}

export type RemoveProductAction = {
  type: typeof REMOVE_PRODUCT
  payload: {
    product: Product
  }
}

export type ToggleDialogAction = {
  type: typeof TOGGLE_DIALOG
  payload: {
    dialog: DialogType
  }
}

export type FetchCountriesAction = {
  type: typeof FETCH_COUNTRIES
  payload: {
    countries: Country[]
  }
}

export type ShowLoaderAction = {
  type: typeof SHOW_LOADER
}

export type HideLoaderAction = {
  type: typeof HIDE_LOADER
}

export type AddCountryAction = {
  type: typeof ADD_COUNTRY
  payload: {
    country: Country
  }
}

export type RemoveCountryAction = {
  type: typeof REMOVE_COUNTRY
  payload: {
    country: Country
  }
}

export type SearchCountryAction = {
  type: typeof SEARCH_COUNTRY
  payload: {
    searchCountry: string
  }
}

export type ReverseCountryAction = {
  type: typeof REVERSE_COUNTRY
}

export interface ThemeProviderProps {
  children: React.ReactNode
}

export interface AvailableThemes {
  name: string
  backgroundColor: string
  color: string
}

export type UiActions = ToggleDialogAction

// Use this union in reducer
export type ProductActions = AddProductAction | RemoveProductAction

export type CountriesActions =
  | FetchCountriesAction
  | AddCountryAction
  | RemoveCountryAction
  | SearchCountryAction
  | ReverseCountryAction

export type LoaderActions = ShowLoaderAction | HideLoaderAction

export type ProductState = {
  inCart: Product[]
}

export type CountriesState = {
  dataCountries: Country[]
  inCart: Country[]
  searchCountry: string
}

export type LoaderState = {
  loading: boolean
}

// Using dynamic keys from an enum
export type UiState = {
  dialogOpen: {
    [key in DialogType]?: boolean
  }
}

export type AppState = {
  product: ProductState
  ui: UiState
  countries: CountriesState
  loader: LoaderState
}

export interface ParamTypes {
  name: string
}

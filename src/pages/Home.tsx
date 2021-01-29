import React from 'react'
import { Header } from '../components/Header/Header'
import { CountriesList } from '../components/CountriesList/CountriesList'

export const Home = () => {
  return (
    <>
      <Header />
      <div className="container">
        <h3>Home page</h3>
        <CountriesList />
      </div>
    </>
  )
}

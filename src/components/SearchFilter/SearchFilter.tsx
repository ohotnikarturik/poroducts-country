import React from 'react'
import { useDispatch } from 'react-redux'

import { searchCountry } from '../../redux/actions'
import './SearchFilter.css'

export const SearchFilter = () => {
  const dispatch = useDispatch()

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    dispatch(searchCountry(value))
  }

  return (
    <form>
      <div className="row">
        <div className="input-field col s12">
          <input
            onChange={onChangeHandler}
            id="country"
            type="text"
            className="validate"
            name="country"
          />
          <label htmlFor="country">SEARCH COUNTRY</label>
        </div>
      </div>
    </form>
  )
}

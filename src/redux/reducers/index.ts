import { combineReducers } from 'redux'

import product from './product'
import ui from './ui'
import countries from './countries'
import loader from './loader'

const createRootReducer = () =>
  combineReducers({
    product,
    ui,
    countries,
    loader,
  })

export default createRootReducer

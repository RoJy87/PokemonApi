import { configureStore, combineReducers } from '@reduxjs/toolkit'
import pokemonReducer from './reducers/pokemonReducer'
import paginationReducer from './reducers/paginationReducer'
import themeReducer from './reducers/themeReducer'

const rootReducer = combineReducers({
  pokemon: pokemonReducer,
  pagination: paginationReducer,
  theme: themeReducer,
})

export const createReduxStore = (initialState = {}) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
  })
}

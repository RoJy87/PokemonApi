import { configureStore, combineReducers } from '@reduxjs/toolkit'
import pokemonReducer from './reducers/pokemonReducer'
import paginationSlice from './reducers/paginationReducer'
import themeSlice from './reducers/themeReducer'

const rootReducer = combineReducers({
  pokemon: pokemonReducer,
  pagination: paginationSlice,
  theme: themeSlice,
})

export const createReduxStore = (initialState = {}) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
  })
}

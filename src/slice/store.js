import { configureStore } from '@reduxjs/toolkit'
import pokemonReducer from './pokemonSlice'
import paginationSlice from './paginationSlice'
import themeSlice from './themeSlice'

export default configureStore({
  reducer: {
    pokemon: pokemonReducer,
    pagination: paginationSlice,
    theme: themeSlice,
  },
})

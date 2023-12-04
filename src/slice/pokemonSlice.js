import { createSlice } from '@reduxjs/toolkit'

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    pokemons: [],
    searchPoke: [],
    pokemon: {},
  },
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = action.payload
    },
    setSearchPoke: (state, action) => {
      state.searchPoke = action.payload
    },
    setPokemon: (state, action) => {
      state.pokemon = action.payload
    },
  },
})

export const { setPokemon, setPokemons, setSearchPoke } = pokemonSlice.actions

export default pokemonSlice.reducer

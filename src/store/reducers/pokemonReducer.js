import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  totalPokemons: 0,
  pokemons: [],
  searchedPokemon: [],
  pokemon: {},
  status: 'idle',
  error: null,
}

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/'

export const fetchAllPokemons = createAsyncThunk('pokemon/setPokemons', async ({ limit, offset }) => {
  try {
    const res = await axios.get(`${BASE_URL}?offset=${offset}&limit=${limit}`)
    const { count, results } = res.data
    const pokemons = results.sort((a, b) => {
      const nameA = a.name.toUpperCase()
      const nameB = b.name.toUpperCase()
      return nameA < nameB ? -1 : nameA > nameB ? 1 : 0
    })
    return { totalPages: count, pokemons }
  } catch (err) {
    console.log(err)
    throw new Error('Что-то пошло не так')
  }
})

export const fetchPokemon = createAsyncThunk('pokemon/setPokemon', async (name) => {
  try {
    const res = await axios.get(`${BASE_URL}${name}`)
    return { pokemon: res.data }
  } catch (err) {
    console.log(err)
    throw new Error('Что-то пошло не так')
  }
})

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = action.payload
    },
    setSearchedPokemon: (state, action) => {
      state.searchedPokemon = action.payload
    },
    setPokemon: (state, action) => {
      state.pokemon = action.payload
    },
    setTotalPokemons: (state, action) => {
      state.totalPokemons = action.payload
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchAllPokemons.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchAllPokemons.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.pokemons = action.payload.pokemons
        state.searchedPokemon = action.payload.pokemons
        state.totalPokemons = action.payload.totalPages
      })
      .addCase(fetchAllPokemons.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(fetchPokemon.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchPokemon.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.pokemon = action.payload.pokemon
        state.searchedPokemon = [action.payload.pokemon]
      })
      .addCase(fetchPokemon.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export const { setPokemon, setPokemons, setSearchedPokemon, setTotalPokemons } = pokemonSlice.actions

export default pokemonSlice.reducer

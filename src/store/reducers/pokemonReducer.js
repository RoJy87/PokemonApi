import { buildCreateSlice, asyncThunkCreator } from '@reduxjs/toolkit'
import axios from 'axios'

export const createSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
})

const initialState = {
  totalPokemons: 0,
  pokemons: [],
  pokemon: {},
  status: 'idle',
  error: null,
}

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/'

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: (create) => ({
    setPokemons: create.reducer((state, action) => {
      console.log('no-fetch')
      console.log(action.payload)
      state.pokemons = action.payload
    }),
    setPokemon: create.reducer((state, action) => {
      console.log(action.payload)
      state.pokemon = action.payload.pokemon
    }),
    setTotalPokemons: create.reducer((state, action) => {
      state.totalPokemons = action.payload.totalPokemons
    }),
    fetchAllPokemons: create.asyncThunk(
      async ({ limit, offset }) => {
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
      },
      {
        pending: (state) => {
          state.status = 'loading'
        },
        rejected: (state, action) => {
          state.status = 'failed'
          state.error = action.error.message
        },
        fulfilled: (state, action) => {
          console.log('fetch')
          state.status = 'succeeded'
          state.pokemons = action.payload.pokemons
          state.totalPokemons = action.payload.totalPages
        },
      },
    ),
    fetchPokemon: create.asyncThunk(
      async (name) => {
        try {
          const res = await axios.get(`${BASE_URL}${name}`)
          return { pokemon: res.data }
        } catch (err) {
          console.log(err)
          throw new Error('Что-то пошло не так')
        }
      },
      {
        pending: (state) => {
          state.status = 'loading'
        },
        rejected: (state, action) => {
          state.status = 'failed'
          state.error = action.error.message
        },
        fulfilled: (state, action) => {
          state.status = 'succeeded'
          state.pokemon = action.payload.pokemon
        },
      },
    ),
  }),
})

export const { setPokemon, setPokemons, setTotalPokemons, fetchPokemon, fetchAllPokemons } = pokemonSlice.actions

export default pokemonSlice.reducer

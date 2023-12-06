import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/'

export const fetchAllPokemons = createAsyncThunk('pokemon/getAllPokemons', async (limit, offset) => {
  try {
    console.log('api')
    const res = await axios.get(`${BASE_URL}?offset=${offset}&limit=${limit}`)
    return { totalPages: res.data.count, pokemons: res.data.results }
  } catch (err) {
    console.log(err)
  }
})

export const fetchPokemon = createAsyncThunk('pokemon/getPokemon', async (name) => {
  try {
    const res = await axios.get(`${BASE_URL}${name}`)
    return res.data
  } catch (err) {
    console.log(err)
  }
})

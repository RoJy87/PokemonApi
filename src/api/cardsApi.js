import axios from 'axios'

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/'

class cardsApi {
  constructor() {
    this.url = BASE_URL
  }

  getAllCards = async (limit, offset) => {
    try {
      const res = await axios.get(`${this.url}?offset=${offset}&limit=${limit}`)
      return { totalCount: res.data.count, pokemons: res.data.results }
    } catch (err) {
      console.log(err)
    }
  }

  getCard = async (name) => {
    try {
      const res = await axios.get(`${this.url}${name}`)
      return res.data
    } catch (err) {
      console.log(err)
    }
  }
}

const getPokemonApi = new cardsApi()

export { getPokemonApi }

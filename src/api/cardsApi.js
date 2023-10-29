import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';

const getAllCards = async (cardsNumber) => {
  try {
    const res = await axios.get(`${BASE_URL}?offset=20&limit=${cardsNumber}`);
    return res.data.results;
  } catch (err) {
    console.log(err);
  }
};

const getCard = async (name) => {
  try {
    const res = await axios.get(`${BASE_URL}${name}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export { getAllCards, getCard };

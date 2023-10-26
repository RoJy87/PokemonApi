import axios from "axios";

const getAllCards = async (url) => {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

const getCard = async (url) => {
  try {
    const res = await axios.get(url);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export { getAllCards, getCard };

import { useEffect, useState } from "react";
import "./App.css";
import { getAllCards, getCard } from "../../api/cardsApi";
import CardList from "../CardList/CardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Details from "../Details/Details";

const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

function App() {
  const [url, setUrl] = useState(BASE_URL);
  const [prevCards, setPrevCards] = useState("");
  const [nextCards, setNextCards] = useState("");
  const [pokemons, setPokemons] = useState([]);
  const [pokemon, setPokemon] = useState({});
  const [isActive, setIsActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function getPokemon(res) {
    res.map(async (item) => {
      getCard(item.url)
        .then((result) => {
          setPokemons((prev) => {
            const isExist = prev.some((item) => item.id === result.data.id);
            if (!isExist) {
              return [...prev, result.data];
            }
            return prev;
          });
        })
        .catch((err) => console.log(err));
    });
  }

  useEffect(() => {
    setIsLoading(true);
    getAllCards(url)
      .then((data) => {
        getPokemon(data.results);
        setPrevCards(data.previous);
        setNextCards(data.next);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, [url]);

  function onCloseHandler() {
    setPokemon({});
    setIsActive(false);
  }

  return (
    <div className='App'>
      <Header />
      <div className={`wrapper ${isActive ? "wrapper_active" : ""}`}>
        {!isLoading ? (
          <CardList
            isActive={isActive}
            cards={pokemons}
            onClickHandler={(item) => {
              setIsActive(true);
              setPokemon(item);
            }}
          />
        ) : (
          <h1>Идет загрузка...</h1>
        )}
        {Object.keys(pokemon).length ? (
          <Details data={pokemon} onClose={onCloseHandler} />
        ) : null}
      </div>
      <div className='pagination'>
        {prevCards && (
          <button
            className='pagination-btn'
            onClick={() => {
              setPokemons([]);
              setUrl(prevCards);
            }}>
            Назад
          </button>
        )}
        {nextCards && (
          <button
            className='pagination-btn'
            onClick={() => {
              setPokemons([]);
              setUrl(nextCards);
            }}>
            Вперед
          </button>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;

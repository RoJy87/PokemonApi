import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from '../../Layout/Layout';
import Main from '../../pages/main/Main';
import CardInfo from '../../pages/cardInfo/CardInfo';
import { useEffect, useState } from 'react';
import { getAllCards } from '../../api/cardsApi';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [onPageNumber, setOnPageNumber] = useState(20);
  const [isLoading, setIsLoading] = useState(false);

  async function getAllPokemons(cardsNumber) {
    setIsLoading(true);
    try {
      const pokemons = await getAllCards(cardsNumber);
      pokemons.forEach((poke) => {
        setPokemons((prev) => {
          const isExist = prev.some((item) => item.name === poke.name);
          if (!isExist) {
            return [...prev, poke];
          }
          return prev;
        });
      });
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }
  function onSearchHandler(text) {
    console.log(text);
  }

  function onClickFilter(num) {
    setOnPageNumber(num);
  }

  function onPaginationHandler() {}

  useEffect(() => {
    setPokemons([]);
    getAllPokemons(onPageNumber);
  }, [onPageNumber]);

  return (
    <div className='App'>
      <Routes>
        <Route
          path='/'
          element={<Layout />}>
          <Route
            path='/'
            element={
              <Main
                pokemons={pokemons}
                isLoading={isLoading}
                onSearchHandler={onSearchHandler}
                onClickFilter={onClickFilter}
                onPaginationHandler={onPaginationHandler}
              />
            }>
            {' '}
            <Route
              path='details/:nameId'
              element={
                <CardInfo
                  pokemons={pokemons}
                  isLoading={isLoading}
                />
              }
            />
          </Route>

          <Route
            path='*'
            element={<p>Not Found</p>}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from '../../layouts/main';
import PaginationButton from '../PaginationButton/PaginationButton';
import Main from '../../pages/main/Main';
import CardInfo from '../../pages/cardInfo/CardInfo';

function App() {
  return (
    <div className='App'>
      <Layout>
        <Routes>
          <Route
            path='/'
            element={<Main />}
          />
          <Route
            path='/details/:name'
            element={<CardInfo />}
          />
        </Routes>
      </Layout>
      <div className='pagination'>
        <PaginationButton
          className='pagination-btn'
          name='Назад'
        />
        <PaginationButton
          className='pagination-btn'
          name='Вперед'
        />
      </div>
    </div>
  );
}

export default App;

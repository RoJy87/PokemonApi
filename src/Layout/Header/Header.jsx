import React from 'react';
import logo from '../../image/icons8-покемон-96.png';
import './header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='header'>
      <Link
        to={'/'}
        className='header__link'
      >
        <img
          src={logo}
          alt='logo'
          className='header__logo'
        />
      </Link>
      <h1 className='header__title'>Pokemon stats</h1>
    </header>
  );
}

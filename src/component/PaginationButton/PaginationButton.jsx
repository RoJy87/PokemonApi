import React from 'react';

export default function PaginationButton({ onClick, name }) {
  return (
    <button
      className='pagination-btn'
      onClick={onClick}>
      {name}
    </button>
  );
}

import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import NavBar from '../components/NavBar';
import CategoryLabel from '../components/categoryComponents/CategoryLabel'

const CategoryContainer = () => {
    const location = useLocation();

    const [parts, setParts] = useState([]);

    useEffect(() => {
      fetch(`http://localhost:3001/api/inventory/category/${location.state.id}`)
      .then((data) => data.json())
      .then((data) => {
        setParts(data);
      });
    }, []);

    return (
      <div>
        <NavBar />
        <CategoryLabel />

      </div>
    )
}

export default CategoryContainer;

/*
<div class="flex items-center border border-gray-200 rounded">
    <button
      type="button"
      class="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"
    >
      &minus;
    </button>

    <input
      type="number"
      id="Quantity"
      value="1"
      class="h-10 w-16 border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
    />

    <button
      type="button"
      class="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"
    >
      &plus;
    </button>
  </div>

ml-10
w-3/4 

flex-row 
w-full
space-y-1

flex
flex-col
items-center
category-container
place-content-center

hover:bg-gray-50

category





*/
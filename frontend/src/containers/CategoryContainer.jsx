import React, { useEffect, useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { Context } from '../components/Context';

import NavBar from '../components/NavBar';
import CategoryLabel from '../components/categoryComponents/CategoryLabel'
import Parts from '../components/categoryComponents/Parts'

const CategoryContainer = () => {
    const location = useLocation();
    const { userId } = useContext(Context);
    const [parts, setParts] = useState([]);

    useEffect(() => {
      fetch(`http://localhost:3000/api/inventory/category/${location.state.id}`)
      .then((data) => data.json())
      .then((data) => setParts(data))
    }, []);

    return (
      <div>
        <div>{parts.id}</div>
        <NavBar />
        <CategoryLabel />
        <Parts />
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
*/
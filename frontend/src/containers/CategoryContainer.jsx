import React from 'react';
import { useLocation } from 'react-router-dom';

const CategoryContainer = () => {
    const location = useLocation();

    return (
      <div className='p-4 w-1/2 category border shadow-md rounded-md max-w-4xl border-solid'>
        <h2>{location.state.name}</h2>
        <img src={location.state.url}></img>
    </div>
    )
}

export default CategoryContainer;
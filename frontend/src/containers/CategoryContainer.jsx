import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const CategoryContainer = () => {
    const location = useLocation();

    const [parts, setParts] = useState([]);

    useEffect(() => {
      fetch(`http://localhost:3001/api/inventory/category/${location.state.id}`)
      .then((data) => data.json())
      .then((data) => {
        console.log('This is our console log:');
        console.log(data);
        setParts(data);
      });
    }, []);

    return (
      <div className='p-4 w-1/2 category border shadow-md rounded-md max-w-4xl border-solid'>
        <h2>{location.state.name}</h2>
        <img src={location.state.url}></img>
      </div>
    )
}

export default CategoryContainer;
import React, { useEffect, useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { Context } from '../components/Context';

const CategoryContainer = () => {
    const location = useLocation();
    const { userId } = useContext(Context);
    const [parts, setParts] = useState([]);

    useEffect(() => {
      fetch(`http://localhost:3000/api/inventory/category/${location.state.id}`)
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
        <h1>{userId}</h1>
        <img src={location.state.url}></img>
      </div>
    )
}

export default CategoryContainer;
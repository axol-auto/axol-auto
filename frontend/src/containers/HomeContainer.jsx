import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Category from '../components/Category';
import Hero from '../components/Hero';

const HomeContainer = () => {

  const navigate = useNavigate();

  const toCategory = (id, name, url) => {
    navigate('/category', {state: {id, name, url}});
  };

  const [categories, setCategories] = useState([]);
 
  useEffect(() => {
    fetch('http://localhost:3001/api/inventory/category')
    .then((data) => data.json())
    .then((data) => setCategories(data));
  }, []);

  // render Category components with array
  return (
    <div>
      <Hero />
      <div className='mt-4 place-content-center flex flex-col items-center category-container space-y-1'>
        {categories.map((obj) => {
          return (
            <a className='hover:bg-gray-50 p-4 w-5/6 category border shadow-md rounded-md border-solid' onClick={() => toCategory(obj.id, obj.name, obj.imageurl)}>
            <Category key={obj.id} category={obj.name} img={obj.imageurl}>
            </Category>
            </a>
          );
        })}
      </div>
    </div>
  );

}

export default HomeContainer;
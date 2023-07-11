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

  // pull category data from db
  /*
    GET '/api/inventory/category'
    // Get all category names and image urls
    // Array of categories
    [
      {
        "id": 2,
        "name": "test category 3",
        "imageurl": null
      }
    ]
  */
 
  useEffect(() => {
    fetch('http://localhost:3001/api/inventory/category')
    .then((data) => data.json())
    .then((data) => setCategories(data));
  }, []);

  // render Category components with array
  return (
    <div>
      <Hero />
      <div className='place-content-center flex flex-col items-center category-container'>
        {categories.map((obj) => {
          return (
            <a onClick={() => toCategory(obj.id, obj.name, obj.imageurl)}>
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
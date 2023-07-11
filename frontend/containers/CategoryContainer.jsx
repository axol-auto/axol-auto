import React from 'react';
import { useState, useEffect } from 'react';
import Category from '../components/Category';

const CategoryContainer = () => {

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
    fetch('/api/inventory/category')
    .then((data) => data.json())
    .then((data) => setCategories(data));
  }, []);
  

  //const categories = [{name: 'Wheels & Tires', imageurl: 'url3', id: 1}, {name: 'Brakes', imageurl: 'url1', id: 2}, {name: 'Engines', imageurl: 'url2', id: 3}]
  // render Category components with array
  return (
    <div className='category-container'>
      {categories.map((obj) => {
        return <Category id={obj.id} category={obj.name} img={obj.imageurl}></Category>
      })}
    </div>
  );

}

export default CategoryContainer;
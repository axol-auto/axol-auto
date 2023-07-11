import React from 'react';

const Category = (props) => {
  return (

    <div className='category'>
      <h2>{props.category}</h2>
      <img src={props.img}></img>

    </div>

  );
};

export default Category;
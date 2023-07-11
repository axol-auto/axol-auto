import React from 'react';

const Category = (props) => {
  return (
    <div className='p-4 w-1/2 category border shadow-md rounded-md max-w-4xl border-solid'>
      <h2>{props.category}</h2>
      <img src={props.img}></img>
    </div>

  );
};

export default Category;
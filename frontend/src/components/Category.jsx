import React from 'react';

const Category = (props) => {
  return (
    <div className='w-full flex flex-row items-center'>
      <h2 className='ml-7 text-xl inline'>{props.category}</h2>
      <img className='max-h-20 mr-7' src={props.img}></img>
    </div>

  );
};

export default Category;
import React from 'react';

const Category = (props) => {
  return (
    <div>
      <h2>{props.category}</h2>
      <img src={props.img}></img>
    </div>

  );
};

export default Category;
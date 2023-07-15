import React from 'react';

const Item = (props) => {
  return (
    <div className=''>
      {props.name}
      {props.price}
      {props.quantity}
    </div>
  );
};



export default Item;
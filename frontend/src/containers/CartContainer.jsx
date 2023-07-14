import React, { useState } from 'react';
import Item from '../components/Item';
import NavBar from '../components/NavBar';

const CartContainer = () => {

    // need to get user ID somehow
    const userId = null;

    const [items, setItems] = useState([]);

    // fetch data that is in cart, assign to state variable
    /*
    fetch(`http://localhost:3000/api/cart/?userId=${userId}`)
    .then((data) => data.json())
    .then((data) => setItems(data))
    .catch();
    */


    // 
    return (
      <div>
        <NavBar></NavBar>
        <button onClick={() => fetch('http://localhost:3000/api/checkout', {
          method: 'POST',
          body: JSON.stringify({ userId: 1 })
        })
        }>CLICK ME</button>
        {/*
        <div className=''>
          {items.map((obj) => {
            return (
              <Item name={obj.name} price={obj.price} quantity={obj.quantity}></Item>
            );
          })}
        </div>
        */}
      </div>
    );

};



export default CartContainer;
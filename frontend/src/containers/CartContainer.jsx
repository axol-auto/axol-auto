import React, { useState, useEffect } from 'react';
import Item from '../components/Item';
import NavBar from '../components/NavBar';

const CartContainer = () => {

    // need to get user ID somehow
    const userId = 1;

    const [items, setItems] = useState([]);

    useEffect(() => {
      // fetch data that is in cart, assign to state variable
      fetch(`http://localhost:3000/api/cart?userId=${userId}`)
      .then((data) => {
        console.log(data);
        return data.json();
      })
      .then((data) => setItems(data))
      .catch();
    }, []);

    // 
    return (
      <div>
        <NavBar></NavBar>
        <div className=''>
          {items.map((obj) => {
            return (
              <Item name={obj.name} price={obj.price} quantity={obj.quantity}></Item>
            );
          })}
        </div>
      </div>
    );
};

export default CartContainer;
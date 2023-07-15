import React from 'react';
import { useNavigate } from 'react-router-dom';


const NavBar = () => {
  // check whether user is logged in
  const navigate = useNavigate();
  const toCart = () => {
    navigate('/cart');
  }
  const toHome = () => {
    navigate('/');
  };
  const toLogin = () => {
    navigate('/login');
  };

  return (
    <div className='text-white flex h-14 bg-sky-600 items-center'>
      <button onClick={() => toHome()} className='p-2 logo ml-2 text-lg'>AXOL-AUTO</button>
      <div className='home-buttons'>
        <button onClick={() => toCart()}>Cart</button>
        <button onClick={() => toLogin()} className='p-2 hover:text-sky-800'>Log in</button>
      </div>
    </div>
  );
};


export default NavBar;
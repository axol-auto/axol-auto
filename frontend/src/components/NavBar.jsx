import React from 'react';


const NavBar = () => {
  // check whether user is logged in



  return (
    <div className='text-white flex h-14 bg-sky-600 items-center'>
      <button className='p-2 logo ml-2 text-lg'>AXOL-AUTO</button>
      <div className='home-buttons'>
      <button className='p-2 hover:text-sky-800'>Log in</button>
      <button className='p-2 mr-2 hover:text-sky-800'>Sign up</button>
      </div>
    </div>
  );
};


export default NavBar;
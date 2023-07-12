import React from 'react';
import NavBar from '../components/NavBar';
import { useNavigate } from 'react-router-dom';

const LoginContainer = () => {
  const navigate = navigate();
  const toHome = navigate('/');

  return (
    <div>
    <NavBar />
    <div className='flex place-content-center'>
    <div className='w-1/3 mt-10 flex flex-col place-content-center items-center border shadow-md rounded-lg'>
    <h2 className='mt-5 font-semibold'>Log in to Axol Auto</h2>
        <input className='mt-5 mb-2 p-2 block border rounded-md' type='email' placeholder='Enter email'></input>
        <input className='p-2 block border rounded-md mb-4' type='password' placeholder='Enter password'></input>
      <button onClick={() => {
        fetch('/api/users/login', {
          method: 'POST',
          body: JSON.stringify({
            input: null,
            password: null
          })})
        .then((data) => toHome())
        .catch((err) => {
          return;
        });
      }}
       className='text-white mb-5 submit-login hover:bg-sky-500 bg-sky-600 rounded-full text-md border-solid border border-sky-500'>Submit</button>
    </div>
    </div>
    </div>
  );
};



export default LoginContainer;
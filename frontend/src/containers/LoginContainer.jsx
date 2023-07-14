import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import { useNavigate } from 'react-router-dom';

const LoginContainer = () => {
  const [invalidLogin, setInvalidLogin] = useState(false);

  const navigate = useNavigate();

  const toHome = () => {
    navigate('/');
  };

  const toSignUp = () => {
    navigate('/signup');
  }

  return (
    <div>
    <NavBar />
    <div className='bg-slate-100 h-screen flex place-content-center'>
    <div className='bg-white w-1/3 h-1/3 mt-10 flex flex-col place-content-center items-center border shadow-md rounded-lg'>
    <h2 className='mt-5 font-semibold'>Log in to Axol Auto</h2>
        <input id='email' className='mt-5 mb-2 p-2 block border rounded-md' type='email' placeholder='Enter email'></input>
        <input id='password' className='p-2 block border rounded-md mb-4' type='password' placeholder='Enter password'></input>
      <button onClick={() => {
        fetch('http://localhost:3000/api/users/login', {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            input: document.querySelector('#email').value,
            password: document.querySelector('#password').value
          })})
        .then((data) => data.json())
        .then((data) => {
          if (data[0] === 'successful login and session created') {
            toHome();
          }
          else {
            // invalid credentials
            setInvalidLogin(true);
          }
        })
        .catch((err) => {
          console.log(err);
        });
      }}
       className='text-white mb-5 submit-login hover:bg-sky-500 bg-sky-600 rounded-full text-md border-solid border border-sky-500'>Submit</button>
      {invalidLogin && <div className='p-3 rounded-md border text-rose-900 bg-rose-100 border-rose-600'><p>Invalid credentials. Please try again.</p></div>}
      <button onClick={() => toSignUp()} className='text-sky-600 font-semibold'>First time here? Create an account!</button>

    </div>
    </div>
    </div>
  );
};



export default LoginContainer;
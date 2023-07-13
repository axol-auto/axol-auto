import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import { useNavigate } from 'react-router-dom';

const SignUpContainer = () => {
  const [invalidLogin, setInvalidLogin] = useState(false);

  const navigate = useNavigate();
  const toHome = () => {
    navigate('/');
  };

  return (
    <div>
    <NavBar />
    <div className='bg-slate-100 h-screen flex place-content-center'>
    <div className='bg-white w-1/3 h-1/3 mt-10 flex flex-col place-content-center items-center border shadow-md rounded-lg'>
    <h2 className='mt-5 font-semibold'>Sign up to Axol Auto!</h2>
        <input id='email' className='mt-5 mb-2 p-2 block border rounded-md' type='email' placeholder='Enter email'></input>
        <input id='username' className='mt-5 mb-2 p-2 block border rounded-md' type='text' placeholder='Enter username'></input>
        <input id='password' className='p-2 block border rounded-md mb-4' type='password' placeholder='Enter password'></input>
      <button onClick={() => {
        fetch('http://localhost:3000/api/users/create', {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: document.querySelector('#email').value,
            username: document.querySelector('#username').value,
            password: document.querySelector('#password').value
          })})
        .then((data) => data.json())
        .then((data) => {
          console.log('WAS THE USER CREATED???');  // user created message is sent back even if user is NOT actually added to db!
          console.log(data);
          if (data === 'user created') toHome();
          else {
            // invalid credentials
            console.log('FAIL');
            setInvalidLogin(true);
          }
        })
        .catch((err) => {
          console.log(err);
          console.log('hi, you hit me!');
          return;
        });
      }}
       className='text-white mb-5 submit-login hover:bg-sky-500 bg-sky-600 rounded-full text-md border-solid border border-sky-500'>Submit</button>
      {invalidLogin && <div className='p-3 rounded-md border text-rose-900 bg-rose-100 border-rose-600'><p>Invalid credentials. Please try again.</p></div>}

    </div>
    </div>
    </div>
  );
};



export default SignUpContainer;
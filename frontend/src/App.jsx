import React, { useState, useContext, useMemo } from 'react';
import HomeContainer from './containers/HomeContainer';
import NavBar from './components/NavBar';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LoginContainer from './containers/LoginContainer';
import CategoryContainer from './containers/CategoryContainer';
import SignUpContainer from './containers/SignUpContainer';
import CartContainer from './containers/CartContainer';
import { Context } from'./components/Context';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeContainer />
  },
  {
    path: '/category',
    element: <CategoryContainer />
  },
  {
    path: '/login',
    element: <LoginContainer />
  },
  {
    path: '/signup',
    element: <SignUpContainer />
  },
  {
    path: '/cart',
    element: <CartContainer />
  }
])


const App = () => {
  const [userId, setUserId] = useState(null);
  const value = useMemo(
    () => ({ userId, setUserId }),
    [userId]
  )

  return (
    <Context.Provider value={value}>
      {useMemo(() => (
      <div>
        <RouterProvider router={router} />
      </div> ), [])
      }
    </Context.Provider>
  );
};

export default App;
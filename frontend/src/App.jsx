import React from 'react';
import HomeContainer from './containers/HomeContainer';
import NavBar from './components/NavBar';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LoginContainer from './containers/LoginContainer';
import CategoryContainer from './containers/CategoryContainer';

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
  }
])


const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
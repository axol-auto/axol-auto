import React, { Fragment } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
import NavBar from './components/NavBar';
import CategoryContainer from './containers/CategoryContainer';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeContainer />
  },
  {
    path: '/category',
    element: <CategoryContainer />
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
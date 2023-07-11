import React, { Fragment } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './containers/HomePage';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import CategoryContainer from './containers/CategoryContainer'


/*
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
])
*/

const App = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Hero></Hero>
      <CategoryContainer></CategoryContainer>
    </div>
  );
};

export default App;
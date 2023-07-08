import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import HomePage from './containers/HomePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
])

const App = () => {
  return (
  <div>
    <h1>APP BAR</h1>
    <RouterProvider router={router} />
  </div>
  )
}

export default App;
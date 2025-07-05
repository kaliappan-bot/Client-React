import React from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';

import Home from './Page/Home';
import Login from './Auth/Login';
import Register from './Auth/Register';
import Header from './components/Nav/Header';
import TablePage from './Page/TablePage'; 

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      
      <Route path="/home" element={<TablePage />} />

      
      <Route path="/home" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

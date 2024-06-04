import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import React from 'react';
import logo from './images/store_logo.jpeg';
import Login from './components/login';
import SignUp from './components/signUp';
import HomePage from './components/homePage';
import SingleProduct from './components/singleProduct';
import { Users } from './components/Users';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Login />,
    },
    {
      path: '/signup',
      element: <SignUp />,
    },
    {
      path: '/home',
      element: <HomePage />,
    },
    {
      path: `/singleProduct/:productId`,
      element: <SingleProduct />,
    },
    {
      path: '/users',
      element: <Users />,
    },
    {
      path: '/users/addNewUser',
      element: <div>Add New User</div>,
    },
    {
      path: '/users/updateUser/:userId',
      element: <div>Update User</div>,
    },
    { path: '/users/deleteUser/:userId', element: <div>Delete User</div> },
    {
      path: '/cart',
      element: <div>Cart</div>,
    },
  ]);
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} alt="Store Logo" className="store-logo"></img>
        <h1 style={{ textAlign: 'center' }}>Welcome to K Store App</h1>
        <p></p>
      </div>
      <div>
        <RouterProvider router={router}></RouterProvider>
      </div>
    </div>
  );
}

export default App;

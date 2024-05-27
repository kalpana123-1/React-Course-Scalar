import "./App.css";
import React from "react";
import logo from "./images/store_logo.jpeg";
import Login from "./components/login";
import SignUp from "./components/signUp";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
  ]);
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} alt="Store Logo" className="store-logo"></img>
        <h1>Welcome to Store App</h1>
      </div>
      <div>
        <RouterProvider router={router}></RouterProvider>
      </div>
    </div>
  );
}

export default App;

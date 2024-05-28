import "./App.css";
import React from "react";
import logo from "./images/store_logo.jpeg";
import Login from "./components/login";
import SignUp from "./components/signUp";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import HomePage from "./components/homePage";

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
    {
      path: "/home",
      element: <HomePage />,
    }
  ]);
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} alt="Store Logo" className="store-logo"></img>
      </div>
      <div>
        <RouterProvider router={router}></RouterProvider>
      </div>
    </div>
  );
}

export default App;

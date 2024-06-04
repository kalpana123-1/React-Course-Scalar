import React from 'react';
import '../css/navBar.css';
import { useNavigate } from 'react-router-dom';
import Cart from '../images/cart.png';

function NavBar() {
  const navigate = useNavigate();

  return (
    <div className="Navbar">
      <h2 onClick={() => navigate("/home")}>Products</h2>
      <h2 onClick={() => navigate("/cart")}>
        Cart
        <img
          style={{
            width: "25px",
            marginLeft: "10px",
            marginBottom: "-5px",
          }}
          src={Cart}
          alt="Cart icon"
        />
      </h2>
      <h2 onClick={() => navigate("/users")}>Users</h2>
      <h2 onClick={() => navigate("/")}>Logout</h2>
    </div>
  );
}

function UserNavBar() {
  // const navigate = useNavigate();

  return (
    <div className="Navbar">
      <h2>Add User</h2>
      <h2>Update User</h2>
      <h2>Delete User</h2>
    </div>
  );
}

export { NavBar, UserNavBar };

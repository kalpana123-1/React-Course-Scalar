import React from "react";
import "../css/navBar.css";
import { useNavigate } from "react-router-dom";
import Cart from "../images/cart.png";

function NavBar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
  };
  return (
    <div className="Navbar">
      <h2 style={{ cursor: "pointer" }} onClick={() => navigate("/home")}>
        Products
      </h2>
      <h2 onClick={() => navigate("/cart")} style={{ cursor: "pointer" }}>
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
      <h2>Users</h2>
      <h2 onClick={handleLogout} style={{ cursor: "pointer" }}>
        Logout
      </h2>
    </div>
  );
}

function UserNavBar() {
  return (
    <div className="Navbar">
      <h2>View All Users</h2>
      <h2>Add User</h2>
      <h2>Update User</h2>
      <h2>Delete User</h2>
    </div>
  );
}

export { NavBar, UserNavBar };

import React from "react";
import "../css/navBar.css";
// import Cart from "../images/cart.png";

function NavBar() {
  return (
    <div className="Navbar">
      <h2>Products</h2>
      <h2>
        Cart
        {/* <img
          style={{
            width: "80px",
            marginLeft: "10px",
            marginBottom: "-5px",
          }}
          src={Cart}
          alt="Cart icon"
        /> */}
      </h2>
      <h2>Users</h2>
      <h2>Logout</h2>
    </div>
  );
}

export default NavBar;

import React from "react";
import NavBar from "./navBar";
// import Cart from "../images/cart.png";
// import Male from "../images/male.png";
// import Female from "../images/female.png";

function HomePage() {
  try {
  } catch (err) {
    console.log(err);
  }
  return (
    <div>
      <div style={{ display: "flex" }}>
        <NavBar />
        <div style={{ marginLeft: "150px" }}>
          <h1>Welcome to Store App</h1>
          <p>Discover the best products at unbeatable prices.</p>
        </div>
      </div>

      {/* <div
        style={{
          display: "flex",
          gap: "20%",
          alignItems: "center",
          margin: "10% 5%",
        }}
      > */}
      {/* <img style={{ width: "2%" }} src={Male} alt="Male icon" />
        <img style={{ width: "2%" }} src={Female} alt="Female icon" />
        <img style={{ width: "2%" }} src={Cart} alt="Cart icon" /> */}
      {/* </div> */}
      {/* <p style={{ textAlign: "center", fontSize: "20px", margin: "4% 2%" }}>
        We're delighted to have you here. Explore our wide range of products and
        find everything you need in one place. Whether you're looking for the
        latest gadgets, fashionable clothing, or everyday essentials, we've got
        you covered.
      </p> */}
    </div>
  );
}

export default HomePage;

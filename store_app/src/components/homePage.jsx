import React from "react";
import BackGround from '../images/backgroud.jpeg';

function HomePage() {
  return (
    <div>
      <h1>Welcome to Store App</h1>
      <img style={{ width: "100%" }} src={BackGround} alt="background" />
      <p style={{ textAlign: "center", fontSize: "20px", margin: "4% 2%" }} >
        We're delighted to have you here. Explore our wide range of products and
        find everything you need in one place. Whether you're looking for the
        latest gadgets, fashionable clothing, or everyday essentials, we've got
        you covered.
      </p>
    </div>
  );
}

export default HomePage;

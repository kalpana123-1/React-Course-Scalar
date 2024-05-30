import React, { useState, useEffect } from "react";
import NavBar from "./navBar";
import "../css/homePage.css"; // Make sure your CSS file is properly set up

function HomePage() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((json) => {
        setProducts(json);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  return (
    <div style={{ display: "flex", alignItems: "flex-start" }}>
      <NavBar />
      <div style={{ marginLeft: "60px" }}>
        <h1>Welcome to Store App</h1>
        <p>Discover the best products at unbeatable prices.</p>
        {isLoading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error}</div>
        ) : (
          <div className="product-grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>
        <strong style={{ color: "#e10736" }}>Price:</strong> ${product.price}
      </p>
      <p>
        <strong style={{ color: "#e10736" }}>Category:</strong>{" "}
        {product.category}
      </p>
      <p>
        <strong style={{ color: "#e10736" }}>Description:</strong>{" "}
        {product.description}
      </p>
    </div>
  );
}

export default HomePage;

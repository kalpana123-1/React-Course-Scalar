import React, { useState, useEffect } from "react";
import NavBar from "./navBar";
import "../css/homePage.css"; // Make sure your CSS file is properly set up

// function HomePage() {
//   const [products, setProducts] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products")
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error("Network response was not ok");
//         }
//         return res.json();
//       })
//       .then((json) => {
//         setProducts(json);
//         setIsLoading(false);
//       })
//       .catch((error) => {
//         setError(error.message);
//         setIsLoading(false);
//       });
//   }, []);

//   return (
//     <div style={{ display: "flex", alignItems: "flex-start" }}>
//       <NavBar />
//       <div style={{ marginLeft: "60px" }}>
//         {isLoading ? (
//           <div>Loading...</div>
//         ) : error ? (
//           <div>Error: {error}</div>
//         ) : (
//           <div className="product-grid">
//             {products.map((product) => (
//               <ProductCard key={product.id} product={product} />
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// function ProductCard({ product }) {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [isHovered, setIsHovered] = useState(false);

//   const toggleDescription = () => {
//     setIsExpanded(!isExpanded);
//   };

//   const handleMouseEnter = () => {
//     setIsHovered(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//   };

//   return (
//     <div
//       className="product-card"
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >
//       <button
//         style={{
//           color: "white",
//           backgroundColor: "#e10736",
//           padding: "5px 10px",
//           border: "none",
//           borderRadius: "5px",
//           cursor: "pointer",
//           justifyContent: "center",
//         }}
//       >
//         View Details
//       </button>
//       <img
//         style={{
//           transform: isHovered ? "scale(1.1)" : "scale(1)",
//           transition: "transform 0.3s",
//         }}
//         src={product.image}
//         alt={product.title}
//       />
//       <h3>{product.title}</h3>
//       <p>
//         <strong style={{ color: "#e10736" }}>Price:</strong> ${product.price}
//       </p>
//       <p>
//         <strong style={{ color: "#e10736" }}>Category:</strong>{" "}
//         {product.category}
//       </p>
//       <p>
//         <button
//           onClick={toggleDescription}
//           style={{
//             padding: "5px 10px",
//             border: "none",
//             borderRadius: "5px",
//             cursor: "pointer",
//             justifyContent: "center",
//             color: "white",
//             backgroundColor: "#e10736",
//           }}
//         >
//           {isExpanded ? "Read Less..." : "Read More..."}
//         </button>
//         {isExpanded && (
//           <p>
//             <strong style={{ color: "#e10736" }}>Description:</strong>{" "}
//             {product.description}
//           </p>
//         )}
//       </p>
//     </div>
//   );
// }

function ProductCard({ product }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [visibleDescription, setVisibleDescription] = useState(
    product.description.substring(0, 30)
  );

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
    setVisibleDescription(
      isExpanded ? product.description : product.description.substring(0, 30)
    );
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="product-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        position: "relative",
      }}
    >
      <div style={{ flex: 1 }}>
      <button
        style={{
          position: "absolute",
          top: 10,
          right: 10,
          color: "white",
          backgroundColor: "#e10736",
          padding: "5px 10px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        View More
      </button>
        <img
          style={{
            transform: isHovered ? "scale(1.1)" : "scale(1)",
            transition: "transform 0.3s",
          }}
          src={product.image}
          alt={product.title}
        />
        <h3>{product.title}</h3>
        <p>
          <strong style={{ color: "#e10736" }}>Price:</strong> ${product.price}
        </p>
        <p>
          <strong style={{ color: "#e10736" }}>Category:</strong>{" "}
          {product.category}
        </p>
        <p ><strong style={{ color: "#e10736" }}>Description:</strong>
          {isExpanded ? (
            <p> {product.description} <button
            onClick={toggleDescription}
            style={{
              padding: "5px 10px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              justifyContent: "center",
              color: "white",
              backgroundColor: "#e10736",
            }}
          >
            {isExpanded ? "Show Less" : "Show More"}
          </button></p>
          ) : (
            <p>{visibleDescription}... <button
            onClick={toggleDescription}
            style={{
              padding: "5px 10px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              justifyContent: "center",
              color: "white",
              backgroundColor: "#e10736",
            }}
          >
            {isExpanded ? "Show Less..." : "Show More..."}
          </button></p>
          )}
        </p>
      </div>
    </div>
  );
}

function HomePage() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchProducts();
  }, [currentPage]);

  const fetchProducts = () => {
    setIsLoading(true);
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
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * 4;
  const endIndex = startIndex + 4;
  const currentPageProducts = products.slice(startIndex, endIndex);

  return (
    <div style={{ display: "flex", alignItems: "flex-start" }}>
      <NavBar />
      <div style={{ marginLeft: "60px" }}>
        {isLoading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error}</div>
        ) : (
          <div className="product-grid">
            {currentPageProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
            <Pagination
              totalItems={products.length}
              pageSize={4}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </div>
        )}
      </div>
    </div>
  );
}

function Pagination({ totalItems, pageSize, currentPage, onPageChange }) {
  const totalPages = Math.ceil(totalItems / pageSize);

  const handlePageClick = (page) => {
    onPageChange(page);
  };

  return (
    <div>
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          id={`page-button-${index + 1}`}
          key={index}
          onClick={() => handlePageClick(index + 1)}
          style={{
            marginLeft: "10px",
            margin: "2px 10px",
            padding: "5px 10px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            justifyContent: "center",
            backgroundColor: currentPage === index + 1 ? "white" : "#e10736",
            color: currentPage === index + 1 ? "#e10736" : "white",
            boxShadow:
              currentPage === index + 1
                ? "0px 2px 4px rgba(0, 0, 0, 0.2)"
                : "none",
            transition: "box-shadow 0.3s",
          }}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
}

export default HomePage;
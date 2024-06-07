import React, { useState, useEffect } from 'react';
import { NavBar } from './navBar';
import '../css/homePage.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Tooltip } from 'bootstrap';

function ProductCard({ product }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [visibleDescription, setVisibleDescription] = useState(
    product.description.substring(0, 30),
  );
  const navigate = useNavigate();

  const toggleDescription = () => {
    setVisibleDescription(
      isExpanded ? product.description.substring(0, 30) : product.description,
    );
    setIsExpanded(!isExpanded);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const titleRestriction = (title) => {
    if (title.length > 45) {
      return title.substring(0, 45) + '...';
    } else {
      return title;
    }
  };

  useEffect(() => {
    // Select all elements with the data-bs-toggle="tooltip" attribute
    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]',
    );
    // Initialize a new Bootstrap Tooltip instance for each selected element
    const tooltipList = [...tooltipTriggerList].map(
      (tooltipTriggerEl) => new Tooltip(tooltipTriggerEl),
    );
    // Cleanup tooltips when the component unmounts
    return () => {
      tooltipList.forEach((tooltip) => tooltip.dispose());
    };
  }, []);

  return (
    <div className="card">
      <div
        className="card-body"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button
          onClick={() => navigate(`/singleProduct/${product.id}`)}
          className="btn btn-danger"
          style={{
            position: 'absolute',
            top: 10,
            right: 10,
            cursor: 'pointer',
          }}
        >
          View More
        </button>
        <img
          className="card-img-top w-50 p-auto"
          src={product.image}
          alt={product.title}
          style={{
            transform: isHovered ? 'scale(1.1)' : 'scale(1)',
            transition: 'transform 0.3s',
            // width: '40%',
            height: '30%',
            objectFit: 'contain',
            // padding: 'auto',
          }}
        />

        <h6 className="card-title mt-3" style={{ height: '50px' }}>
          <a
            href="#"
            data-bs-toggle="tooltip"
            data-bs-title={product?.title}
            data-bs-placement="bottom"
          >
            {titleRestriction(product?.title)}
          </a>
        </h6>

        <p>
          <strong className="text-danger">Price:</strong> ${product.price}
        </p>
        <p>
          <strong className="text-danger">Category:</strong> {product.category}
        </p>
        <p>
          <strong className="text-danger">Description:</strong>
          {isExpanded ? (
            <p>
              {product.description}{' '}
              <button
                onClick={toggleDescription}
                className="btn btn-danger"
                style={{
                  padding: '5px 10px',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
              >
                {isExpanded ? 'Show Less' : 'Show More'}
              </button>
            </p>
          ) : (
            <p className="w-100">
              {visibleDescription}...{' '}
              <button
                onClick={toggleDescription}
                className="btn btn-outline text-danger"
                style={{
                  padding: '5px 10px',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
              >
                {isExpanded ? 'Show Less...' : 'Show More...'}
              </button>
            </p>
          )}
        </p>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
};

function HomePage() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchProducts();
  }, [currentPage]);

  const fetchProducts = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * 4;
  const endIndex = startIndex + 4;
  const currentPageProducts = products.slice(startIndex, endIndex);

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        <NavBar />
        <div className="w-75" style={{ marginLeft: '40px' }}>
          {isLoading ? (
            <div>Loading...</div>
          ) : error ? (
            <div>Error: {error}</div>
          ) : (
            <div className="product-grid">
              {currentPageProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
          <br />
          <Pagination
            totalItems={products.length}
            pageSize={4}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
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
          className={`btn btn-sm ${currentPage === index + 1 ? 'btn-light' : 'btn-danger'}`}
          style={{
            margin: '2px 10px',
            padding: '5px 10px',
            borderRadius: '5px',
            cursor: 'pointer',
            justifyContent: 'center',
            boxShadow:
              currentPage === index + 1
                ? '0px 2px 4px rgba(0, 0, 0, 0.2)'
                : 'none',
            transition: 'box-shadow 0.3s',
          }}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
}

Pagination.propTypes = {
  totalItems: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default HomePage;

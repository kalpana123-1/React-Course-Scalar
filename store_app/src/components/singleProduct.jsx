import { NavBar } from './navBar';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../css/homePage.css';
import axios from 'axios';

function SingleProduct() {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  let { productId } = useParams();
  console.log('productId: ', productId);

  useEffect(() => {
    getSingleProduct(productId);
    return () => {};
  }, [productId]);

  const getSingleProduct = async (productId) => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${productId}`,
      );
      const data = response.data;
      setProduct(data);
      setIsLoading(false);
      console.log('data: ', data);

      return data;
    } catch (error) {
      throw new Error('Network response was not ok');
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'flex-start' }}>
      <NavBar />
      <div style={{ marginLeft: '60px', width: '100%' }}>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div
            style={{
              position: 'relative',
            }}
          >
            <img
              style={{
                width: '250px',
                height: '250px',
              }}
              src={product.image}
              alt={product.title}
            />
            <h3>{product.title}</h3>
            <p>
              <strong style={{ color: '#e10736' }}>Price:</strong> $
              {product.price}
            </p>
            <p>
              <strong style={{ color: '#e10736' }}>Category:</strong>{' '}
              {product.category}
            </p>
            <p>
              <strong style={{ color: '#e10736' }}>Description:</strong>
              {product.description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default SingleProduct;

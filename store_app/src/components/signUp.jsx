// src/SignUp.jsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    firstname: '',
    lastname: '',
    city: '',
    street: '',
    number: '',
    zipcode: '',
    lat: '',
    long: '',
    phone: '',
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const payload = {
      email: formData.email,
      username: formData.username,
      password: formData.password,
      name: {
        firstname: formData.firstname,
        lastname: formData.lastname,
      },
      address: {
        city: formData.city,
        street: formData.street,
        number: formData.number,
        zipcode: formData.zipcode,
        geolocation: {
          lat: '38.87',
          long: '38.87',
        },
      },
      phone: formData.phone,
    };

    try {
      fetch('https://fakestoreapi.com/users/7', {
        method: 'PATCH',
        body: JSON.stringify(payload),
      })
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
          if (!json) {
            throw new Error('Something went wrong');
          } else {
            navigate('/');
          }
        });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(value, name);

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div
      style={{
        maxWidth: '400px',
        margin: '0 auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '4px',
      }}
    >
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>Email </label>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', marginTop: '4px' }}
            required
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            placeholder="Enter Phone"
            value={formData.phone}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', marginTop: '4px' }}
            required
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Username</label>
          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            value={formData.username}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', marginTop: '4px' }}
            required
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', marginTop: '4px' }}
            required
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>First Name</label>
          <input
            type="text"
            name="firstname"
            placeholder="Enter First Name"
            value={formData.firstname}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', marginTop: '4px' }}
            required
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Last Name</label>
          <input
            type="text"
            name="lastname"
            placeholder="Enter Last Name"
            value={formData.lastname}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', marginTop: '4px' }}
            required
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>City</label>
          <input
            type="text"
            name="city"
            placeholder="Enter City"
            value={formData.city}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', marginTop: '4px' }}
            required
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Street Name</label>
          <input
            type="text"
            name="street"
            placeholder="Enter Street Name"
            value={formData.street}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', marginTop: '4px' }}
            required
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Street Number</label>
          <input
            type="text"
            name="number"
            placeholder="Enter Street Number"
            value={formData.number}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', marginTop: '4px' }}
            required
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Zip Code</label>
          <input
            type="text"
            name="zipcode"
            placeholder="Enter Zip Code"
            value={formData.zipcode}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', marginTop: '4px' }}
            required
          />
        </div>
        <button
          type="submit"
          style={{
            padding: '10px 20px',
            backgroundColor: '#A91D3A',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
          disabled={loading}
        >
          {loading ? 'Signing Up...' : 'Sign Up'}
        </button>
      </form>
      {error && <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>}
      <div>
        Already have an account?{' '}
        <Link to="/" style={{ color: '#A91D3A' }}>
          Login here
        </Link>
      </div>
    </div>
  );
};

export default SignUp;

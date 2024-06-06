import React, { useState } from 'react';
import axios from 'axios';

function AddUser() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    try {
      if (
        !email ||
        !username ||
        !password ||
        !firstname ||
        !lastname ||
        !city ||
        !street ||
        !number ||
        !zipcode ||
        !phone
      ) {
        throw new Error('Please fill in all fields');
      } else {
        const response = await axios.post('https://fakestoreapi.com/users', {
          email,
          username,
          password,
          name: {
            firstname,
            lastname,
          },
          address: {
            city,
            street,
            number,
            zipcode,
          },
          phone,
        });
        setMessage(response.data);
        setLoading(false);
        console.log(response.data);
        setEmail('');
        setUsername('');
        setPassword('');
        setFirstname('');
        setLastname('');
        setCity('');
        setStreet('');
        setNumber('');
        setZipcode('');
        setPhone('');
        setError(null);
        setMessage('Successfully added user');
        setLoading(false);
        setTimeout(() => {
          setMessage(null);
        }, 2000);
      }
    } catch (error) {
      console.error(error);
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label mb-1">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
          placeholder="Email"
        />
      </div>
      <div className="mb-3">
        <label className="form-label mb-1">Phone</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="form-control"
          placeholder="Phone"
        />
      </div>
      <div className="mb-3">
        <label className="form-label mb-1">Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="form-control"
          placeholder="Username"
        />
      </div>
      <div className="mb-3">
        <label className="form-label mb-1">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
          placeholder="Password"
        />
      </div>
      <div className="mb-3">
        <label className="form-label mb-1">Firstname </label>
        <input
          type="text"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
          className="form-control"
          placeholder="Firstname"
        />
      </div>
      <div className="mb-3">
        <label className="form-label mb-1">Lastname </label>
        <input
          type="text"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
          className="form-control"
          placeholder="Lastname"
        />
      </div>
      <div className="mb-3">
        <label className="form-label mb-1">City </label>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="form-control"
          placeholder="City"
        />
      </div>
      <div className="mb-3">
        <label className="form-label mb-1">Street name</label>
        <input
          type="text"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
          className="form-control"
          placeholder="Street name"
        />
      </div>
      <div className="mb-3">
        <label className="form-label mb-1">Street Number</label>
        <input
          type="text"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className="form-control"
          placeholder="Street Number"
        />
      </div>
      <div className="mb-3">
        <label className="form-label mb-1">Zipcode</label>
        <input
          type="text"
          value={zipcode}
          onChange={(e) => setZipcode(e.target.value)}
          className="form-control"
          placeholder="Zipcode"
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
        {loading ? 'Adding...' : 'Add User'}
      </button>
      {message && message.length > 0 && (
        <p style={{ color: 'green' }}>{message}</p>
      )}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
}

export default AddUser;

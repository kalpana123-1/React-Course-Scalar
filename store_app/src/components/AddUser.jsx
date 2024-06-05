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
  const [lat, setLat] = useState('');
  const [long, setLong] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
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
          geolocation: {
            lat,
            long,
          },
        },
        phone,
      });

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <label>
        Firstname:
        <input
          type="text"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
      </label>
      <br />
      <label>
        Lastname:
        <input
          type="text"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
      </label>
      <br />
      <label>
        City:
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </label>
      <br />
      <label>
        Street:
        <input
          type="text"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
        />
      </label>
      <br />
      <label>
        Number:
        <input
          type="text"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </label>
      <br />
      <label>
        Zipcode:
        <input
          type="text"
          value={zipcode}
          onChange={(e) => setZipcode(e.target.value)}
        />
      </label>
      <br />
      <label>
        Latitude:
        <input
          type="text"
          value={lat}
          onChange={(e) => setLat(e.target.value)}
        />
      </label>
      <br />
      <label>
        Longitude:
        <input
          type="text"
          value={long}
          onChange={(e) => setLong(e.target.value)}
        />
      </label>
      <br />
      <label>
        Phone:
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Add User</button>
    </form>
  );
}

export default AddUser;

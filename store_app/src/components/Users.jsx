import React, { useState, useEffect } from "react";
// import { useNavigate } from 'react-router-dom';
import { UserNavBar } from "./navBar";
import axios from "axios";
import '../css/users.css';
import UserIcon from '../images/usericon.webp';

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true); // Set loading state to true before making the API call
    axios
      .get('https://fakestoreapi.com/users')
      .then((res) => {
        setUsers(res.data);
        setLoading(false); // Set loading state to false after successful API call
      })
      .catch((err) => {
        console.error(err);
        setLoading(false); // Set loading state to false after failed API call
      });
  }, []);

  return (
    <div style={{ display: 'flex', alignItems: 'flex-start' }}>
      <UserNavBar />

      {loading ? (
        <div>Loading...</div>
      ) : (
        <div style={{ marginLeft: '70px', marginTop: '20px' }}>
          <div className="user-card">
            {users.map((user) => (
              <div key={user.id} className="user-details">
                <img
                  src={UserIcon}
                  alt="User Icon"
                  style={{
                    width: '100px',
                    height: '100px',
                    paddingLeft: '30px',
                  }}
                />
                <br />
                <strong>Firstname:</strong> {user.name.firstname}
                <br />
                <strong>Lastname:</strong> {user.name.lastname}
                <br />
                <strong>Email:</strong> {user.email}
                <br />
                <strong>Username:</strong> {user.username}
                <br />
                <strong>Phone:</strong> {user.phone}
                <br />
                <strong>Address:</strong>
                <br />
                {user.address.street}
                <br />
                {user.address.number},
                <br />
                {user.address.city}, {user.address.zipcode}
                <br />
                {user.address.geolocation.lat}, {user.address.geolocation.long}
                <br />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Users;

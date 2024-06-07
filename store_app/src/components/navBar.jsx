import React, { useState } from 'react';
import '../css/navBar.css';
import { useNavigate } from 'react-router-dom';
import Cart from '../images/cart.png';
// import { Users } from './Users';
// import { Users } from './Users';
// import { Navbar, Nav } from 'react-bootstrap';

function NavBar() {
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState('home');

  const handleLinkClick = (page) => {
    setCurrentPage(page);
    navigate(`/${page}`);
  };

  return (
    <div className="sidebar">
      {/* <div
        className={`sidebar-brand ${currentPage === 'home' ? 'active' : ''}`}
      >
        <span className="sidebar-brand" onClick={() => handleLinkClick('home')}>
          Products
        </span>
      </div> */}
      <div className="sidebar-content">
        <div className="sidebar-item">
          <span
            className={`sidebar-brand ${currentPage === 'home' ? 'active' : ''}`}
            onClick={() => handleLinkClick('home')}
            style={{
              backgroundColor: currentPage === 'home' ? '#e10736' : 'white',
              color: currentPage === 'home' ? 'white' : '#e10736',
              fontWeight: 'bold', // Add this line
              fontSize: '1.2em', // Add this line
            }}
          >
            Products
          </span>
        </div>
        <div className="sidebar-item">
          <span onClick={() => navigate('/cart')}>
            Cart
            <img
              src={Cart}
              alt="Cart icon"
              style={{
                width: '25px',
                marginLeft: '10px',
                marginBottom: '-5px',
              }}
            />
          </span>
        </div>
        <div className="sidebar-item">
          <span onClick={() => navigate('/users')}>Users</span>
        </div>
        <div className="sidebar-item">
          <span onClick={() => navigate('/')}>Logout</span>
        </div>
      </div>
    </div>
  );
}

function UserNavBar() {
  // const navigate = useNavigate();
  // const [isAdding, setIsAdding] = useState(false);
  // const [isUpdating, setIsUpdating] = useState(false);
  // const [isDeleting, setIsDeleting] = useState(false);
  // const [userId, setUserId] = useState(null);

  const handleAddClick = () => {
    // setIsAdding(true);
    // navigate('/users/addNewUser');
    // Users(true, isUpdating, isDeleting);
    // <Users />
  };

  const handleUpdateClick = () => {
    // setIsUpdating(true);
    // navigate(`/users/updateUser/${userId}`);
    // Users(isAdding, isUpdating, isDeleting);
  };

  const handleDeleteClick = () => {
    // setIsDeleting(true);
    // navigate(`/users/deleteUser/${userId}`);
    // Users(isAdding, isUpdating, isDeleting);
  };

  return (
    <div className="Navbar">
      <h2 onClick={handleAddClick()}>Add User</h2>
      <h2 onClick={handleUpdateClick()}>Update User</h2>
      <h2 onClick={handleDeleteClick()}>Delete User</h2>
    </div>
  );
}

export { NavBar, UserNavBar };

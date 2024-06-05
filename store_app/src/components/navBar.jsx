import React from 'react';
import '../css/navBar.css';
import { useNavigate } from 'react-router-dom';
import Cart from '../images/cart.png';
// import { Users } from './Users';
// import { Users } from './Users';

function NavBar() {
  const navigate = useNavigate();

  return (
    <div className="Navbar">
      <h2 onClick={() => navigate('/home')}>Products</h2>
      <h2 onClick={() => navigate('/cart')}>
        Cart
        <img
          style={{
            width: '25px',
            marginLeft: '10px',
            marginBottom: '-5px',
          }}
          src={Cart}
          alt="Cart icon"
        />
      </h2>
      <h2 onClick={() => navigate('/users')}>Users</h2>
      <h2 onClick={() => navigate('/')}>Logout</h2>
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

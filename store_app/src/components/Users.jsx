import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { UserNavBar } from './navBar';
import '../css/users.css';
import UserIcon from '../images/usericon.webp';
import AddUser from './AddUser';
// import Button from './Button';

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    axios
      .get('https://fakestoreapi.com/users')
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  // const addNewUser = () => {
  //   navigate('/users/addNewUser');
  // };

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div style={{ marginLeft: '50px', marginTop: '20px' }}>
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Add New User
          </button>
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    Add new user
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <AddUser />
                </div>
              </div>
            </div>
          </div>

          {/* <button
            style={{
              backgroundColor: '#e10736',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              padding: '10px 20px',
              cursor: 'pointer',
            }}
            onClick={addNewUser}
          >
            Add New User
          </button> */}
          {/* <Button name="Add New User" onClick={navigate('/users/addNewUser')} /> */}
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
                <strong style={{ color: '#e10736' }}>Firstname:</strong>{' '}
                {user.name.firstname}
                <br />
                <strong style={{ color: '#e10736' }}>Lastname:</strong>{' '}
                {user.name.lastname}
                <br />
                <strong style={{ color: '#e10736' }}>Email:</strong>{' '}
                {user.email}
                <br />
                <strong style={{ color: '#e10736' }}>Username:</strong>{' '}
                {user.username}
                <br />
                <strong style={{ color: '#e10736' }}>Phone:</strong>{' '}
                {user.phone}
                <br />
                <strong style={{ color: '#e10736' }}>Street Name:</strong>{' '}
                {user.address.street}
                <br />
                <strong style={{ color: '#e10736' }}>
                  Street Number:
                </strong>{' '}
                {user.address.number}
                <br />
                <strong style={{ color: '#e10736' }}>City:</strong>
                {user.address.city}
                <br />
                <strong style={{ color: '#e10736' }}>Zipcode:</strong>{' '}
                {user.address.zipcode}
                <br />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// function Users(isAdding = false, isUpdating = false, isDeleting = false) {
//   console.log('here at users', isAdding, isUpdating, isDeleting);
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     setLoading(true); // Set loading state to true before making the API call
//     axios
//       .get('https://fakestoreapi.com/users')
//       .then((res) => {
//         setUsers(res.data);
//         setLoading(false); // Set loading state to false after successful API call
//       })
//       .catch((err) => {
//         console.error(err);
//         setLoading(false); // Set loading state to false after failed API call
//       });
//   }, []);

//   // if (isAdding) {
//   //   return (
//   //     <div style={{ display: 'flex', alignItems: 'flex-start' }}>
//   //       <UserNavBar />
//   //       {/* <AddUser /> */}
//   //     </div>
//   //   );
//   // } else if (isUpdating) {
//   //   return (
//   //     <div style={{ display: 'flex', alignItems: 'flex-start' }}>
//   //       <UserNavBar />
//   //       {/* <UpdateUser /> */}
//   //     </div>
//   //   );
//   // } else if (isDeleting) {
//   //   return (
//   //     <div style={{ display: 'flex', alignItems: 'flex-start' }}>
//   //       <UserNavBar />
//   //       {/* <DeleteUser /> */}
//   //     </div>
//   //   );
//   // } else {
//   console.log('here at else block');
//   return (
//     <div style={{ display: 'flex', alignItems: 'flex-start' }}>
//       <UserNavBar />

//       {loading ? (
//         <div>Loading...</div>
//       ) : (
//         <div style={{ marginLeft: '70px', marginTop: '20px' }}>
//           <div className="user-card">
//             {users.map((user) => (
//               <div key={user.id} className="user-details">
//                 <img
//                   src={UserIcon}
//                   alt="User Icon"
//                   style={{
//                     width: '100px',
//                     height: '100px',
//                     paddingLeft: '30px',
//                   }}
//                 />
//                 <br />
//                 <strong>Firstname:</strong> {user.name.firstname}
//                 <br />
//                 <strong>Lastname:</strong> {user.name.lastname}
//                 <br />
//                 <strong>Email:</strong> {user.email}
//                 <br />
//                 <strong>Username:</strong> {user.username}
//                 <br />
//                 <strong>Phone:</strong> {user.phone}
//                 <br />
//                 <strong>Address:</strong>
//                 <br />
//                 {user.address.street}
//                 <br />
//                 {user.address.number},
//                 <br />
//                 {user.address.city}, {user.address.zipcode}
//                 <br />
//                 {user.address.geolocation.lat}, {user.address.geolocation.long}
//                 <br />
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
//   // }
// }

export default Users;

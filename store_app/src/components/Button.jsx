import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name }) => {
  return (
    <button
      style={{
        backgroundColor: '#e10736',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        padding: '10px 20px',
        cursor: 'pointer',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
        transition: 'box-shadow 0.3s',
      }}
    >
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Button;

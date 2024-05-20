// Card.js

import React from 'react';
import PropTypes from 'prop-types';
import './Card.css'; // Import CSS file for card styles

const Card = ({ title, image, description, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      {image && <img src={image} alt={title} className="card-image" />} {/* Optional image */}
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string, // Optional image URL
  description: PropTypes.string.isRequired,
  onClick: PropTypes.func, // Optional click handler
};

export default Card;

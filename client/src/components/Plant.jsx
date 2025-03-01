import React from 'react';

const Plant = ({ name, description, price, image }) => {
  return (
    <div className="plant">
      <img src={image} alt={name} />
      <h3 style={{ color: '#650900' }}>{name}</h3>
      <p>{description}</p>
      <p style={{ color: '#650900' }}>Price: ${price}</p>
    </div>
  );
};

export default Plant;
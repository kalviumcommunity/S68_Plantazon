import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserSelect from './UserSelecter'; 
import './Plantcomponent.css';

const Plantcomponent = () => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {

    axios.get('http://localhost:5000/api/plants/all')
      .then(response => setPlants(response.data))
      .catch(error => console.error('Error fetching plants:', error));
  }, []);

  return (
    <div className="plant-page">
      <h1 style={{ color: '#650900' }}>Welcome to Plantazon</h1>
      <h2 style={{ color: '#650900' }}>Our Plant Collection</h2>

      <UserSelect setPlants={setPlants} />  

      <div className="product-list">
        {plants.map((plant) => (
          <Plant
            key={plant._id}
            name={plant.name}
            description={plant.description}
            price={plant.price}
            image={plant.imageUrl} 
          />
        ))}
      </div>
    </div>
  );
};

export default Plantcomponent;

import React, { useEffect, useState } from "react";
import axios from "axios";
import Plant from "./Plant";
import "./Plantcomponent.css";

const Plantcomponent = () => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/items');
        setPlants(response.data);
      } catch (error) {
        console.error('Error fetching plants:', error);
      }
    };

    fetchPlants();
  }, []);

  return (
    <div className="plant-page">
      <h1 style={{ color: '#650900' }}>Welcome to Plantazon</h1>
      <h2 style={{ color: '#650900' }}>Our Plant Collection</h2>
      <div className="product-list">
        {plants.map((plant) => (
          <Plant
            key={plant.id}
            name={plant.name}
            description={plant.description}
            price={plant.price}
            image={plant.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Plantcomponent;
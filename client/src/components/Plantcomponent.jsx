import React from "react";
import Plant from "./Plant";
import "./Plantcomponent.css";

const Plantcomponent = () => {  
  const plants = [
    {
      id: 1,
      name: "Aloe Vera",
      description: "Aloe Vera is known for its medicinal and skincare benefits.",
      price: 19.99,
      image: "https://img.crocdn.co.uk/images/products2/pl/20/00/02/77/pl2000027723_card10_lg.jpg",
    },
    {
      id: 2,
      name: "Snake Plant",
      description: "A hardy plant that thrives in low light.",
      price: 25.99,
      image: "https://images.squarespace-cdn.com/content/v1/54fbb611e4b0d7c1e151d22a/1610074066643-OP8HDJUWUH8T5MHN879K/Snake+Plant.jpg?format=1000w",
    },
    {
      id: 3,
      name: "Ficus Tree",
      description: "A stylish indoor tree for any modern home.",
      price: 59.99,
      image: "https://m.media-amazon.com/images/I/817a-+Gy6GL.jpg",
    },
  ];

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
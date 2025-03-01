import React from "react";


const Plantcomponent = () => {  
  const plants = [
    {
      id: 1,
      name: "Aloe Vera",
      description: "Aloe Vera is known for its medicinal and skincare benefits.",
      price: 19.99,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Snake Plant",
      description: "A hardy plant that thrives in low light.",
      price: 25.99,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Ficus Tree",
      description: "A stylish indoor tree for any modern home.",
      price: 59.99,
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="plant-page">
      <h1>Welcome to Plantazon</h1>
      <h2>Our Plant Collection</h2>
      <div className="product-list">
        {plants.map((plant) => (
          <PlantCard  // Assuming you have the PlantCard component
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

import React, { useState } from 'react';
import './AddEntity.css';

function AddEntity() {
  // State to store plant data
  const [plants, setPlants] = useState([]);
  
  // State for each field in the form
  const [plantName, setPlantName] = useState('');
  const [scientificName, setScientificName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [stockQuantity, setStockQuantity] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Make sure all required fields are filled
    if (plantName.trim() !== '' && price.trim() !== '' && category.trim() !== '') {
      const newPlant = {
        name: plantName,
        scientificName: scientificName,
        price: parseFloat(price),
        category: category,
        description: description,
        stockQuantity: parseInt(stockQuantity, 10),
        imageUrl: imageUrl
      };

      // Add new plant to the list of plants
      setPlants([...plants, newPlant]);

      // Clear the input fields after submission
      setPlantName('');
      setScientificName('');
      setPrice('');
      setCategory('');
      setDescription('');
      setStockQuantity('');
      setImageUrl('');
    }
  };

  return (
    <div className="AddEntity">
      <h1>Add New Plant</h1>
      
      {/* Plant Form */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="plantName">Plant Name:</label>
        <input
          type="text"
          id="plantName"
          value={plantName}
          onChange={(e) => setPlantName(e.target.value)}
          required
        />
        
        <label htmlFor="scientificName">Scientific Name:</label>
        <input
          type="text"
          id="scientificName"
          value={scientificName}
          onChange={(e) => setScientificName(e.target.value)}
        />
        
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        
        <label htmlFor="category">Category:</label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="">Select a category</option>
          <option value="Indoor Plants">Indoor Plants</option>
          <option value="Outdoor Plants">Outdoor Plants</option>
          <option value="Succulent">Succulent</option>
          <option value="Air Purifying Plants">Air Purifying Plants</option>
          <option value="Flowering Plants">Flowering Plants</option>
          <option value="Herbs">Herbs</option>
          <option value="Foliage Plants">Foliage Plants</option>
          <option value="Tropical Plants">Tropical Pl
          ants</option>
          <option value="Edible Plants">Edible Plants</option>
          <option value="Climbing Plants">Climbing Plants - Vines</option>
          <option value="Aquatic Plants">Aquatic Plants</option>
          <option value="Cacti and Desert Plants">Cacti and Desert Plants</option>
        </select>
        
        <label htmlFor="description">Description:</label>
        <textarea
        
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        
        <label htmlFor="stockQuantity">Stock Quantity:</label>
        <input
          type="number"
          id="stockQuantity"
          value={stockQuantity}
          onChange={(e) => setStockQuantity(e.target.value)}
        />
        
        <label htmlFor="imageUrl">Image URL:</label>
        <input
          type="text"
          id="imageUrl"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        
        <button type="submit">Add Plant</button>
      </form>

      {/* List of added plants */}
      <div className="plant-list">
        <h2>Plants Available</h2>
        <ul>
          {plants.length > 0 ? (
            plants.map((plant, index) => (
              <li key={index}>
                <h3>{plant.name} ({plant.scientificName})</h3>
                <p><strong>Category:</strong> {plant.category}</p>
                <p><strong>Price:</strong> ${plant.price}</p>
                <p>{plant.description}</p>
                <p><strong>Stock:</strong> {plant.stockQuantity}</p>
                {plant.imageUrl && <img src={plant.imageUrl} alt={plant.name} width="100" />}
              </li>
            ))
          ) : (
            <p>No plants added yet.</p>
          )}
        </ul>
      </div>
    </div>
  );
}

export default AddEntity;

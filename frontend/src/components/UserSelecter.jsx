import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserSelect = ({ setPlants }) => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/api/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  const handleUserChange = (event) => {
    const userId = event.target.value;
    setSelectedUser(userId);
    if (userId) {
      axios.get(`http://localhost:5000/api/plants/all/by-user/${userId}`)
        .then(response => setPlants(response.data))
        .catch(error => console.error('Error fetching plants for user:', error));
    } else {
      setPlants([]); 
    }
  };

  return (
    <div>
      <label htmlFor="userSelect">Select a User</label>
      <select id="userSelect" value={selectedUser} onChange={handleUserChange}>
        <option value="">Select a user</option>
        {users.map(user => (
          <option key={user._id} value={user._id}>
            {user.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default UserSelect;

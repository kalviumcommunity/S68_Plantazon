import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const EntityList = () => {
    const [entities, setEntities] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchEntities();
    }, []);

    const fetchEntities = () => {
        fetch('http://yourserver.com/api/entities')
            .then(response => response.json())
            .then(data => setEntities(data))
            .catch(error => console.error('Error:', error));
    };

    const deleteEntity = (id) => {
        fetch(`http://yourserver.com/api/entities/${id}`, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(() => {
                alert('Entity deleted successfully');
                fetchEntities();
            })
            .catch(error => console.error('Error:', error));
    };

    const updateEntity = (id) => {
        navigate(`/update/${id}`);
    };

    return (
        <div>
            <h1>Entity List</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {entities.map(entity => (
                        <tr key={entity.id}>
                            <td>{entity.id}</td>
                            <td>{entity.name}</td>
                            <td>
                                <button onClick={() => updateEntity(entity.id)}>Update</button>
                                <button onClick={() => deleteEntity(entity.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EntityList;
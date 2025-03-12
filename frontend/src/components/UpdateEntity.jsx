import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateEntity = () => {
    const { id } = useParams();
    const [entityName, setEntityName] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://yourserver.com/api/entities/${id}`)
            .then(response => response.json())
            .then(data => setEntityName(data.name))
            .catch(error => console.error('Error:', error));
    }, [id]);

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch(`http://yourserver.com/api/entities/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: entityName })
        })
            .then(response => response.json())
            .then(() => {
                alert('Entity updated successfully');
                navigate('/');
            })
            .catch(error => console.error('Error:', error));
    };

    return (
        <div>
            <h1>Update Entity</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Entity Name:
                    <input
                        type="text"
                        value={entityName}
                        onChange={(e) => setEntityName(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Update</button>
            </form>
        </div>
    );
};

export default UpdateEntity;
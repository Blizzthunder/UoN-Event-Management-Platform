   // Example React component
    import React, { useState } from 'react';
    import axios from 'axios'; // npm install axios

    function CreateRecordForm() {
        const [title, settitle] = useState('');
        const [description, setdescription] = useState('');
        const [message, setMessage] = useState('');

        const handleSubmit = async (e) => {
            e.preventDefault();
            try {
                const response = await axios.post('http://localhost:3001/api/events', { title, description });
                setMessage(response.data.message);
                settitle('');
                setdescription('');
            } catch (error) {
                setMessage('Error: ' + (error.response?.data?.error || 'Failed to create record'));
            }
        };

        return (
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={title}
                    onChange={(e) => settitle(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Email"
                    value={description}
                    onChange={(e) => setdescription(e.target.value)}
                />
                <button type="submit">Create Record</button>
                {message && <p>{message}</p>}
            </form>
        );
    }

    export default CreateRecordForm;
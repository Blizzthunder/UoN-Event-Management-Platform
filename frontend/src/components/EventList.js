    // src/components/EventList.js
    import React, { useState, useEffect } from 'react';
    import axios from 'axios';

    function EventList() {
        const [events, setEvents] = useState([]);

        useEffect(() => {
            const fetchEvents = async () => {
                try {
                    const response = await axios.get('http://localhost:5000/api/events');
                    setEvents(response.data);
                } catch (error) {
                    console.error('Error fetching events:', error);
                }
            };
            fetchEvents();
        }, []);

        return (
            <div>
                <h2>Events</h2>
                <ul>
                    {events.map(event => (
                        <li key={event.id}>
                            <strong>{event.title}</strong> - {event.location} ({event.date})
                            <p>{event.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }

    export default EventList;
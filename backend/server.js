 // Example Node.js with Express and mysql2

    const express = require('express');
    const mysql = require('mysql2');
    const app = express();
    app.use(express.json())
   
const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration

    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'event_db'
    });


    app.post('/api/events', (req, res) => {
        const { title, description } = req.body; // Assuming your table has 'name' and 'email' columns
        const sql = 'INSERT INTO events (title, description) VALUES (?, ?)';
        connection.query(sql, [title, description], (err, result) => {
            if (err) {
                console.error('Error inserting record:', err);
                return res.status(500).json({ error: 'Failed to create record' });
            }
            res.status(201).json({ message: 'Record created successfully', id: result.insertId });
        });
    });

    app.listen(3001, () => {
        console.log('Backend server running on port 3001');
    });
const admin = require("firebase-admin")
const fs = require("fs")

const credentials = JSON.parse(
  fs.readFileSync('./credentials.json')
);

admin.initializeApp({
  credential: admin.credential.cert(credentials)
});



const express = require("express");
const app = express();
const {ServerConfig} = require('./config');
const cors =require("cors");
const mongoose = require('mongoose');
const apirouter = require('./routes')





app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


mongoose.connect('mongodb+srv://event:DjwBBDIRWU06d40y@cluster0.6fwqxdv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

app.use('/api',apirouter);





app.listen(ServerConfig.PORT, () => {
  console.log(`Server is running on port ${ServerConfig.PORT}`);
});
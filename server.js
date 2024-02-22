const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// import connection.js
const connectDB = require('./connection');

// DB function
connectDB();

// routes
app.use('/api/users', require('./routes/user-routes'));
app.use('/api/thoughts', require('./routes/thought-routes'));

app.listen(PORT, () => console.log(`Connected on localhost:${PORT}`));

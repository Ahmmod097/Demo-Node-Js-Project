const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 8080;

connectDB();
const app = express()
app.use(express.json())
app.use('/api/goals', require('./routes/goalRoutes'));

app.use(errorHandler)
app.listen(port, () => console.log(`Server started on port ${port}`))
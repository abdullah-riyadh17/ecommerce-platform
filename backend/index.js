// Load environment variables from .env file
require('dotenv').config();  

// Import mongoose for connecting to MongoDB
const mongoose = require('mongoose');  

// Import express for building the web server
const express = require('express');  

// Connect to MongoDB using the MONGO_URI environment variable
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))  // Log success message on successful connection
  .catch(err => console.log('MongoDB connection error:', err));  // Log any errors that occur during the connection

// Initialize express application
const app = express();  

// Define a simple route for the root URL
app.get('/', (req, res) => {
  res.send('Welcome to the E-commerce Platform');  // Respond with a welcome message
});

// Import and use product routes
const productRoutes = require('./routes/productRoutes');
app.use('/api/products', productRoutes);  // Mount product routes at /api/products

// Define the port on which the server will listen for requests
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);  // Log message when server starts
});

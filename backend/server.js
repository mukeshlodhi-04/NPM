const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const userRoutes = require('./routes/user');
const templeRoutes = require('./routes/temple');
const blogRoutes = require('./routes/blog');

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
//app.use('/uploads', express.static('uploads'));
const path = require('path');
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
// Routes
app.use('/api/user', userRoutes);
app.use('/api/temple', templeRoutes);
app.use('/api/blog', blogRoutes);


// Database Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err));




// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
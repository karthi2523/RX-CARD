const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path'); 
const fs = require('fs');
require('dotenv').config();

const authRoutes = require('./routes/auth');

const app = express();
app.use(express.json()); // Parse JSON bodies
app.use(cors()); // Enable CORS
app.use('/files', express.static(path.join(__dirname, 'files')));
app.use('/qrcodes', express.static(path.join(__dirname, 'qrcodes')));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));


// Routes
app.use('/', authRoutes);
app.use('/auth', authRoutes);

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



// Create the qrcodes directory if it doesn't exist
const qrCodesDir = path.join(__dirname, 'qrcodes');
if (!fs.existsSync(qrCodesDir)) {
  fs.mkdirSync(qrCodesDir);
}



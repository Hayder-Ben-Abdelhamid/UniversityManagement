const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = require('./config/db');

const app = express();

// Middleware
app.use(cors({
  origin: 'http://localhost:4200'
}));
app.use(express.json());

// Routes API
app.use('/api/students', require('./routes/studentRoutes'));

// Route de test
app.get('/', (req, res) => {
  res.send('University Management API is running');
});

// Démarrer le serveur après la connexion
const startServer = async () => {
  try {
    await connectDB();
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

startServer();


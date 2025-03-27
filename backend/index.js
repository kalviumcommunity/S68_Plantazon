const express = require('express');
const cors = require('cors');
const router = require('./src/controller/routes');
const authRoutes = require('./src/controller/authRoutes'); // Import auth routes
const connectDB = require('./src/database/db');

const app = express();

require('dotenv').config({
  path: './src/config/.env'
});
const port = process.env.PORT || 5000;  
const db_url = process.env.db_url;  

app.use(cors());
app.use(express.json());

// Use the auth routes
app.use('/api/auth', authRoutes);

app.listen(port, async () => {
  try {
    await connectDB(db_url);
    console.log(`Connected to the database and server is running on port ${port}`);
  } catch (error) {
    console.error('Database connection failed:', error);
  }
});

app.use('/api', router);

app.get('/', (req, res) => {
  res.send('Hello World!');
});
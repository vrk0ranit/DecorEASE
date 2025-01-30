import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/authRoute.js'

dotenv.config();  // Load environment variables from .env

const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => { 
    console.log('MongoDB is connected');
  })
  .catch((err) => {
    console.log('Error:', err);
  });

app.use(cookieParser())
app.use(express.json())  


//use routes
app.use('/api/user',authRoutes)


// Root route to check server status
app.get('/', (req, res) => {
  res.send('Server is running!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

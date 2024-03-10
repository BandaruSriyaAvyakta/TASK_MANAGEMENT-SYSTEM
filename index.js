import dotenv from 'dotenv';
dotenv.config();
import express, { json, urlencoded } from "express";
import cors from "cors";
import mongoose from 'mongoose';
import taskRoutes from "./routes/taskRoutes.js";
    
const app = express();

// Middleware
app.use(json());
app.use(urlencoded({ extended: true }));

// CORS Configuration
const corsOptions = {
 origin: process.env.NODE_ENV === 'production' ? 'http://localhost:5000' : 'http://localhost:3000',
 methods: ['GET', 'POST', 'PUT', 'DELETE'],
 allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));

// MongoDB Connection
const DB_URL = process.env.DB_URL;

// Debugging: Print DB_URL to ensure it's being read correctly
console.log("DB_URL:", DB_URL);

mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
 .then(() => console.log('Database connection is open.'))
 .catch(err => console.error('Failed to connect to the database:', err.message));

// Routes
app.use('/tasks', taskRoutes);

// Error Handling Middleware
app.use((err, req, res, next) => {
 console.error(err.stack);
 res.status(500).send('Something broke!');
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

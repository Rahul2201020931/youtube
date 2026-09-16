import express from 'express';
import connectDB from './db/mongoose.js';
import dotenv from 'dotenv';
dotenv.config({
    path: './.env'
});


 const app = express();
 connectDB();
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})
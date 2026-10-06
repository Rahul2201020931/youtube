import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

app.use(cors(
    {
        Origin: process.env.CORS_ORIGIN
    }
));
app.use(express.json({limit:'50kb'}));
app.use(express.urlencoded({ extended: true , limit:'50kb'}));
app.use(express.static('public'));
app.use(cookieParser());
//routes
import userRoutes from './routes/user.routes.js';
app.use('/api/v1/users', userRoutes);

export default app;


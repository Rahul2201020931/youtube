
import 'dotenv/config';
import connectDB from './db/mongoose.js';
import app from './app.js';

connectDB().then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });
});
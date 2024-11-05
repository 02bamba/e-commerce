import express from 'express';
// import { connectDB } from './config/db.js';
import ProductRoute from './routes/product.route.js';

const app  = express();
const port = 5000;

app.use(express.json());

app.use("/api/product", ProductRoute)



console.log(process.env.MONGO_DB_URI);


app.listen(port, () => {
    // connectDB();
    console.log(`Server is running on port http://localhost:${port}`);
})
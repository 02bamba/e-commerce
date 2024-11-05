import mongoose from 'mongoose';

const MONGO_DB_URI = process.env.MONGO_DB_URI;
console.log(MONGO_DB_URI);

export const connectDB  = async () => {
    try {
        const conn =  await mongoose.createConnection(MONGO_DB_URI)
        console.log(`MongoDB Connected to ${conn.connection.host}`)

    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
}
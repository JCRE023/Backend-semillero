import "dotenv/config";
import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const url = process.env.MONGODB_URL!;
        const connection = await mongoose.connect(url);

        console.log('MongoDB Conectado!...');

    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
}

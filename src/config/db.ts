import "dotenv/config";
import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const { connection } = await mongoose.connect(process.env.MONGO_URI, {
            dbName: 'mern_calendar'
        });
        const url = `${connection.host}:${connection.port}`;

        console.log(`MongoDB Conectado en el puerto: ${url} `);

    } catch (error) {
        console.log(error);
    }
}

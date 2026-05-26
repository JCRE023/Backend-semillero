import "dotenv/config";
import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        if (!process.env.MONGO_URI) throw new Error('MONGO_URI no está definida en las variables de entorno');
        const { connection } = await mongoose.connect(process.env.MONGO_URI, {
            dbName: 'devtree'
        });
        const url = `${connection.host}:${connection.port}`;

        console.log(`MongoDB Conectado en el puerto: ${url} `);

    } catch (error) {
        console.log(error);
    }
}

import { createConnection } from 'typeorm';
import { UserModel } from './models/PostModel';
import "dotenv/config"

export const doConnection = async () => {
    try {
        await createConnection({
            type: 'postgres',
            host: process.env.HOST!,
            port: parseInt(process.env.PORTDB!),
            username: process.env.USERNAMEDB!,
            password: process.env.PASSWORDDB!,
            database: process.env.DATABASE!,
            synchronize: true, // Auto-create database schema (for development only)
            logging: true, // Log SQL queries (for development only)
            entities: [UserModel]
        });
        console.log("Connected")
    }catch (e){
        console.log(process.env.USERNAME)
        console.log("No connected " + e)
    }
}

// lib/dbConnect.ts
import mongoose from 'mongoose';

const MONGODB_URI: string | undefined = process.env.MONGODB_URI;


// Định nghĩa kiểu cho cached object
interface MongooseCache {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
}

// GlobalThis là cách an toàn để truy cập biến global trong Next.js
let cached = globalThis as unknown as { mongoose: MongooseCache };

if (!cached.mongoose) {
    cached.mongoose = { conn: null, promise: null };
}

async function dbConnect(): Promise<typeof mongoose> {
    if (cached.mongoose.conn) {
        return cached.mongoose.conn;
    }

    if (!cached.mongoose.promise) {
        const opts = {
            bufferCommands: false,
        };

        if (!MONGODB_URI) {
            throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
        }

        cached.mongoose.promise = mongoose.connect(MONGODB_URI, opts);
    }

    cached.mongoose.conn = await cached.mongoose.promise;
    return cached.mongoose.conn;
}

export default dbConnect;
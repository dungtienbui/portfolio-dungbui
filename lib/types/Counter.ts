// types/Counter.ts
import { Document } from 'mongoose';

// Định nghĩa kiểu dữ liệu cơ bản
export interface ICounter {
    page: string;
    count: number;
}

// Định nghĩa kiểu dữ liệu cho Document Mongoose
export interface ICounterDocument extends ICounter, Document {
    // Các trường Mongoose mặc định như _id, createdAt, updatedAt,...
}
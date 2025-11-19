// models/Counter.ts
import mongoose, { Schema, Model } from 'mongoose';
import { ICounterDocument } from '../types/Counter';

const CounterSchema: Schema<ICounterDocument> = new Schema({
    page: {
        type: String,
        required: true,
        unique: true,
        default: 'landing_page'
    },
    count: {
        type: Number,
        required: true,
        default: 0
    }
});

// Sử dụng kiểu Model<ICounterDocument>
const CounterModel: Model<ICounterDocument> =
    (mongoose.models.Counter as Model<ICounterDocument>) ||
    mongoose.model<ICounterDocument>('Counter', CounterSchema);

export default CounterModel;
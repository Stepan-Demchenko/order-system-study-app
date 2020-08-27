import { Schema, model } from 'mongoose';

const positionsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  cost: {
    type: Number,
    required: true,
  },
  category: {
    ref: 'categories',
    type: Schema.Types.ObjectId,
  },
  user: {
    ref: 'users',
    type: Schema.Types.ObjectId,
  },
});

export default model<any>('positions', positionsSchema);
